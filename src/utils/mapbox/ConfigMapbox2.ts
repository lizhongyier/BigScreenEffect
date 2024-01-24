import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";
// import * as THREE from "three";
import {THREE, Threebox } from 'threebox-plugin'
import TWEEN from "@tweenjs/tween.js"
import { mergeBufferGeometries } from '@/three-plugin/jsm/utils/BufferGeometryUtils.js'
import { getCenterByGeoPoints, getCenterByGeoArrys } from "@/utils/turfTools"
import { vertexShader, fragmentShader, ground_vertexShader, ground_fragmentShader } from "@/utils/gl/shader"
mapboxgl.accessToken =
  "pk.eyJ1IjoiemhhbmcxMjM4ODk5OSIsImEiOiJja3N5Ync1cXcyMTR2Mm9xempmbGE4MnBtIn0.R-j78CRvbs6JZG-MDSoh8Q";
let map: any = null
let sources = {
  "osm-tiles1": {
    type: "raster",
    tiles: [
      "http://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=ca6de686597445dce035c465e6596379",
    ],
    tileSize: 256,
  },
  "osm-tiles2": {
    type: "raster",
    tiles: [
      "http://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=ca6de686597445dce035c465e6596379",
    ],
    tileSize: 256,
  },
};
let layers = [
  {
    id: "simple-tiles1",
    type: "raster",
    source: "osm-tiles1",
  },
  {
    id: "simple-tiles2",
    type: "raster",
    source: "osm-tiles2",
  },
];
let localhost = window.location.origin;
let animateTimer = null
let tb: any = null
const poiSize = 200;
let shadermaterial: any = null
let ground_shadermaterial: any = null
let texMAT: any = null
let mat: any = null
let mat2: any = null
let mapTexture: any = null
let shaderCircleWidth: number = 300
export default class ConfigMapbox2 {
  initailView: any;
  container: any;
  constructor(options: { container: HTMLElement; }) {
    this.container = options.container

    this.initailView = {
      container: this.container,
      style: `mapbox://styles/zhang12388999/clqdhzdzc00de01quhit7d8yb`,
      // style: {
      //   "version": 8,
      //   "sprite": localhost + "/MapBoxGL/css/sprite",
      //   "glyphs": localhost + "/MapBoxGL/css/font/{fontstack}/{range}.pbf",
      //   "sources": sources,
      //   "layers": layers,
      // },
      center: [116.845476938061, 37.186192756190124],
      zoom: 14,
      pitch: 20,
      bearing: -17.6,
      // projection: "globe",
      // antialias: false, //抗锯齿，通过false关闭提升性能
      // essential: true,
      // renderWorldCopies: false,
      // skipOnboarding: true,
    }
    // this.initMap()

  }
  initMap() {
    map = new mapboxgl.Map(this.initailView);
    map.on("style.load", () => {
      map.setFog({
        range: [0.6, 12],
        "horizon-blend": 0.12,
        color: "#0c315e",
        "high-color": "#0e589e",
        "space-color": "#0B1026",
        "star-intensity": 0.8,
      });
    });
    return new Promise<void>((resolve, reject) => {
      map.on("load", () => {
        resolve()
      })
    })
  }
  drawSweepLight() {
    console.log('****')
    fetch('https://storage-dev.heating.ai/v1/storage/object/assets/geojson/linyi/building.json')
      .then((response) => {
        return response.json();
      }).then((mapJson) => {
        map.addLayer({
          id: 'custom_layer',
          type: 'custom',
          renderingMode: '3d',
          onAdd: (mapObj: any, mbxContext: any) => {
            tb = new Threebox(
              mapObj,
              mbxContext,
              { defaultLights: true }
            );
            let obj3D = this.draw2(mapJson);

            tb.add(obj3D);
          },
          render: function (gl: any, matrix: any) {
            tb.update();
            if (map) {
              map.triggerRepaint();
            }
            // if (shadermaterial) {
            //   shadermaterial.uniforms.innerCircleWidth.value += 2
            //   if (shadermaterial.uniforms.innerCircleWidth.value > 1000) {
            //     shadermaterial.uniforms.innerCircleWidth.value = -shaderCircleWidth
            //   }
            // }

            if (mapTexture) {
              mapTexture.offset.y -= 0.01;
            }
            if (ground_shadermaterial) {
              ground_shadermaterial.uniforms.innerCircleWidth.value += 2
              if (ground_shadermaterial.uniforms.innerCircleWidth.value > 1000) {
                ground_shadermaterial.uniforms.innerCircleWidth.value = -shaderCircleWidth
              }
            }

          }
        })
      })
  }

  draw2(mapJson: any) {
    this.initMaterial()
    console.log(mapJson)
    const allPois: any[] = []
    mapJson.features.forEach((item: any) => {
      if (item.geometry && item.geometry.coordinates && item.geometry.coordinates.length) {
        if (item.geometry.type === 'Polygon') {
          item.geometry.coordinates.forEach((pois: any[]) => {
            allPois.push(...pois)
          })
        }
        if (item.geometry.type === 'MultiPolygon') {
          item.geometry.coordinates[0].forEach((pois: any[]) => {
            allPois.push(...pois)
          })
        }
      }
    })
    const mainMapGroup = new THREE.Group()

    var groundGeo = new THREE.PlaneGeometry(1000, 1000);
    var ground = new THREE.Mesh(groundGeo, ground_shadermaterial);
    ground.frustumCulled = false;
    // ground.rotation.x = -Math.PI / 2
    mainMapGroup.add(ground);
    const center = getCenterByGeoPoints(allPois)
    map.flyTo({ center: center });
    const xyz_center = tb.utils.lnglatsToWorld([[...center, 0]])
    mainMapGroup.position.set(xyz_center[0].x, xyz_center[0].y, xyz_center[0].z)
    console.log(center)
    let sideGeos = [];
    let topGeos: any[] = [];
    let topGeos2: any[] = [];
    console.log(xyz_center)
    for (let i = 0; i < mapJson.features.length; i++) {
      let feature = mapJson.features[i]
      if (!feature.geometry) return;
      const coordinates = feature.geometry.coordinates;
      switch (feature.geometry.type) {
        case 'Polygon':
          for (let points of coordinates) {
            const _points = points.map((point: any[]) => {
              return this.lnglat2Map(point)
            })
            // console.log(_points)
            let floor = feature.properties.Floor ? feature.properties.Floor : 5 + Math.ceil(Math.random() * 3)
            let geometry = this.createBuildingGeometry(_points, floor)
            sideGeos.push(geometry)

            let topGeo: any = this.createTopGeo(_points, floor)
            topGeos.push(topGeo[0])
            topGeos2.push(topGeo[1])

          }
          break;
        case 'MultiPolygon':
          for (let points of coordinates[0]) {
            const _points = points.map((point: any[]) => {
              return this.lnglat2Map(point)
            })
            let floor = feature.properties.Floor ? feature.properties.Floor : 5 + Math.ceil(Math.random() * 3)

            let geometry = this.createBuildingGeometry(_points, floor)
            console.log(geometry)
            sideGeos.push(geometry)

            let topGeo: any = this.createTopGeo(_points, floor)
            topGeos.push(topGeo[0])
            topGeos2.push(topGeo[1])
          }
          break;
        default:
          break;
      }
    }
    // @ts-ignore
    let sideGeo = mergeBufferGeometries(sideGeos, false)
    console.log(sideGeo)
    // // let city1 = new THREE.Mesh(sideGeo, texMAT)
    sideGeo.computeVertexNormals()
    let city1 = new THREE.Mesh(sideGeo, shadermaterial)

    console.log(city1)
    console.log(tb)
    tb.add(city1)
    // @ts-ignore
    let topGeo = mergeBufferGeometries(topGeos, false)
    topGeo = new THREE.BufferGeometry().setFromPoints(topGeo);
    topGeo.computeVertexNormals()
    let city2 = new THREE.Mesh(topGeo, mat)

    // city2.frustumCulled = false;

    tb.add(city2)
    // @ts-ignore
    let topGeo2 = mergeBufferGeometries(topGeos2, false)
    topGeo2.computeVertexNormals()
    let city3 = new THREE.Mesh(topGeo2, mat2)
    console.log(city3)
    city3.frustumCulled = false;


    // city3.frustumCulled = false;

    tb.add(city3)

    return mainMapGroup
  }

  lnglat2Map(lnglat: any[]) {
    const xyz = tb.utils.lnglatsToWorld([[...lnglat, 0]])[0]
    const v = new THREE.Vector2(xyz.x, xyz.y)
    return v
  }

  createBuildingGeometry(points: any[], floor: number) {
    let mapInnerSize = floor; // 贴图对应真实尺寸大小(3m)
    let vecHeight = floor;

    let vertices = []; // 墙壁顶点数组
    let indices = []; // 墙壁索引数组  indices index负数
    let uv = []; // 墙壁纹理坐标

    // const uv_y = vecHeight / mapInnerSize;
    const uv_y = floor
    let uv_x = 0;
    if (THREE.ShapeUtils.isClockWise(points)) {
      points = points.reverse();
    }
    const len = points.length;
    points.forEach((point, index) => {
      vertices.push(point.x, point.y, 0); // 底部点
      vertices.push(point.x, point.y, vecHeight); // 顶部点

      if (index !== 0) {
        const prePoint = points[index - 1];
        const dis = new THREE.Vector2(prePoint.x, prePoint.y).distanceTo(new THREE.Vector2(point.x, point.y));

        uv_x += dis * 2 / mapInnerSize;
        // uv_x += 1
      }

      uv.push(uv_x, 0, uv_x, uv_y);

      if (index !== 0) {
        // 推入面索引
        indices.push(index * 2 - 2, index * 2, index * 2 - 1, index * 2 - 1, index * 2, index * 2 + 1);
      }
    });

    // 闭合
    const firstPoint = points[0], lastPoint = points[len - 1];
    vertices.push(firstPoint.x, firstPoint.y, 0); // 底部点
    vertices.push(firstPoint.x, firstPoint.y, vecHeight); // 顶部点

    const dis = new THREE.Vector2(firstPoint.x, firstPoint.y).distanceTo(new THREE.Vector2(lastPoint.x, lastPoint.y));

    uv_x += dis / mapInnerSize;
    uv.push(uv_x, 0, uv_x, uv_y);

    indices.push(len * 2 - 2, len * 2, len * 2 - 1, len * 2 - 1, len * 2, len * 2 + 1);


    // 构建侧面
    let geometry = new THREE.BufferGeometry();
    // geometry.isBufferGeometry = true
    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    // console.log(geometry)
    return geometry;
  }

  createTopGeo(points: any[], floor: number) {
    let vertices: any[] = []; // 顶点数组
    let indices: any[] = []; // 索引数组
    if (THREE.ShapeUtils.isClockWise(points)) {
      points = points.reverse();
    }
    let offset_h = 0.2, offset_s = 0.1, height = floor
    let len = points.length;
    let point_offests: any[] = points.map((point, index) => {
      const point_offest = this.getOffsetPoint(points, index, offset_s);
      const p1 = new THREE.Vector3(point.x, point.y, height);
      const p2 = new THREE.Vector3(point_offest.x, point_offest.y, height);
      const p3 = new THREE.Vector3(p2.x, p2.y, p2.z - offset_h);
      vertices.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);

      if (index != len - 1) {
        indices.push(index * 3, index * 3 + 1, (index + 1) * 3 + 1, // 0, 1, 4
          (index + 1) * 3 + 1, (index + 1) * 3, index * 3, // 4, 3, 0
          index * 3 + 1, index * 3 + 2, (index + 1) * 3 + 2, // 1, 2, 5
          (index + 1) * 3 + 2, (index + 1) * 3 + 1, index * 3 + 1 // 5, 4, 1
        );
      } else {
        // 最后一组
        indices.push(index * 3, index * 3 + 1, 1, 1, 0, index * 3, index * 3 + 1, index * 3 + 2, 2, 2, 1, index * 3 + 1);
      }

      return point_offest;
    });

    let geometry = new THREE.BufferGeometry();
    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.computeVertexNormals()
    const geo = new THREE.ShapeGeometry(new THREE.Shape(point_offests));
    geo.computeVertexNormals()
    const translateMatrix = new THREE.Matrix4();
    translateMatrix.makeTranslation(0, 0, height - offset_h);
    geo.applyMatrix4(translateMatrix);
    return [geometry, geo];
  }


  getOffsetPoint(points: any[], index: number, offset: number) {
    let len = points.length;
    let prePoint, nextPoint;

    if (index == 0) {
      // 第一个点
      prePoint = points[len - 2];
      nextPoint = points[index + 1];
    } else if (index == len - 1) {
      // 最后一个点
      prePoint = points[index - 1];
      nextPoint = points[1];
    } else {
      prePoint = points[index - 1];
      nextPoint = points[index + 1];
    }

    return this.biseP(points[index], prePoint, nextPoint, offset);
  }

  biseP(p: any, a: any, b: any, d: any) {
    let dStartAngle = Math.atan2(a.y - p.y, a.x - p.x),
      dEndAngle = Math.atan2(b.y - p.y, b.x - p.x);
    let dWAngle = dEndAngle - dStartAngle; // 外角角度

    if (dWAngle < 0) {
      dWAngle += 2 * Math.PI;
    } else if (dWAngle > 2 * Math.PI) {
      dWAngle -= 2 * Math.PI;
    } // 这里算出来角度都是弧度单位的


    let θ = dWAngle / 2 + dStartAngle; // 计算角平分线上偏移距离
    // let l = d;
    // 计算垂直偏移距离

    let l = d / Math.sin(dWAngle / 2);
    if (Math.abs(l) > 2 * d) l = d; // 限制异常数据
    let panX = l * Math.cos(θ) + p.x,
      panY = l * Math.sin(θ) + p.y; // 夹角（内角）平分线的点

    return {
      x: 2 * p.x - panX,
      y: 2 * p.y - panY
    };

  }

  initMaterial() {
    mapTexture = new THREE.TextureLoader().load('textures/building.png')


    mapTexture.wrapS = THREE.RepeatWrapping;
    mapTexture.wrapT = THREE.RepeatWrapping;
    mapTexture.repeat.set(1, 1);
    mapTexture.needsUpdate = true;
    texMAT = new THREE.MeshBasicMaterial({ map: mapTexture })
    mat = new THREE.MeshPhongMaterial({
      transparent: true,
      // opacity: 1,
      // color: new THREE.Color(1, 1, 0),
      side: THREE.BackSide,
      map: new THREE.TextureLoader().load('textures/building_top.png')
    })

    mat2 = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0.32,
      color: new THREE.Color(0.2, 0.32, 1),
      // side: THREE.DoubleSide,
      // map: new THREE.TextureLoader().load('textures/building_top.png')
    })
    shadermaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 1,
      color: new THREE.Color(0, 0.32, 1),
      // side: THREE.DoubleSide,
      map: mapTexture
    })
    // shadermaterial = new THREE.ShaderMaterial({
    //   uniforms: {
    //     buliding: {
    //       value: mapTexture
    //     },
    //     innerCircleWidth: {
    //       value: 0
    //     },
    //     circleWidth: {
    //       value: shaderCircleWidth
    //     },
    //     color: {
    //       value: new THREE.Color(0.0, 0.0, 1.0)
    //     },
    //     opacity: {
    //       value: 0.9
    //     },
    //     center: {
    //       value: new THREE.Vector3(0, 0, 0)
    //     }
    //   },
    //   vertexShader: vertexShader as any,
    //   fragmentShader: fragmentShader as any,
    //   side: THREE.DoubleSide,              // 双面可见
    //   transparent: true
    // });
    ground_shadermaterial = new THREE.ShaderMaterial({
      uniforms: {
        innerCircleWidth: {
          value: 0
        },
        circleWidth: {
          value: shaderCircleWidth
        },
        diff: {
          value: new THREE.Color(0.2, 0.2, 0.2)
        },
        color: {
          value: new THREE.Color(0.0, 0.0, 1.0)
        },
        opacity: {
          value: 0.3
        },
        center: {
          value: new THREE.Vector3(0, 0, 0)
        }
      },
      vertexShader: ground_vertexShader as any,
      fragmentShader: ground_fragmentShader as any,
      // side: THREE.DoubleSide,              // 双面可见
      transparent: true
    });
  }
}