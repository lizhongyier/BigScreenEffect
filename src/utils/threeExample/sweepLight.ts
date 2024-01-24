import * as THREE from "three";
import { OrbitControls } from '@/three-plugin/jsm/controls/OrbitControls.js'
import { mergeBufferGeometries } from '@/three-plugin/jsm/utils/BufferGeometryUtils.js'
import { vertexShader, fragmentShader, ground_vertexShader, ground_fragmentShader } from "@/utils/gl/shader"
let scene: any = null
let camera: any = null
let controls: any = null
let pointLight: any = null
let renderer: any = null
let shadermaterial: any = null
let ground_shadermaterial: any = null
// 数据池，为防止轮播时请求数据出现延迟，以及点击时快速进入下一级地图
let mapDataPool: any = {}
let shaderCircleWidth: number = 300
let clock: any = new THREE.Clock()
let height: number = 30
let MAP_SIZE: number = 1000
let MAP_WIDTH: number = MAP_SIZE
let MAP_HEIGHT: number = MAP_SIZE

let minLng: any = null
let minLat: any = null
let maxLng: any = null
let maxLat: any = null
let texMAT: any = null
let mat: any = null
let mat2: any = null
let mapTexture: any = null

export default class sweepLight {
  container: any;
  constructor(options: { container: HTMLElement; }) {
    this.container = options.container
    this.initThree()
    this.initMaterial()
    this.initGeometry()
    this.animate()
    this.windowOnresize()
  }
  initThree() {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor('#000')
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.toneMapping = THREE.ReinhardToneMapping
    this.container.appendChild(renderer.domElement)
    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000)
    camera.position.set(200, 200, 300)
    scene.add(camera)
    camera.lookAt(scene.position);
    controls = new OrbitControls(camera, renderer.domElement)

    /**
    * 光源设置
    * 方向光1
    */
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.setScalar(1024)
    directionalLight.position.set(300, 300, 500)
    const directionalLight2 = directionalLight.clone()
    directionalLight2.position.set(-300, -300, 500)
    directionalLight2.castShadow = true
    scene.add(directionalLight)
    scene.add(directionalLight2)
    scene.add(new THREE.AmbientLight(0x404040, 0.5))
    // pointLight = new THREE.PointLight(0xffffff, 1)
    // camera.add(pointLight)

    // const mainMapGroup = new THREE.Group()
    // scene.add(mainMapGroup)

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
      opacity: 0.72,
      color: new THREE.Color(0.5,0.62,1),
      // side: THREE.DoubleSide,
      // map: new THREE.TextureLoader().load('textures/building_top.png')
    })

    shadermaterial = new THREE.ShaderMaterial({
      uniforms: {
        buliding: {
          value: mapTexture
        },
        innerCircleWidth: {
          value: 0
        },
        circleWidth: {
          value: shaderCircleWidth
        },
        color: {
          value: new THREE.Color(0.0, 0.0, 1.0)
        },
        opacity: {
          value: 0.9
        },
        center: {
          value: new THREE.Vector3(0, 0, 0)
        }
      },
      vertexShader: vertexShader as any,
      fragmentShader: fragmentShader as any,
      // side: THREE.DoubleSide,              // 双面可见
      transparent: true
    });
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

  initGeometry() {
    var groundGeo = new THREE.PlaneGeometry(1000, 1000);
    var ground = new THREE.Mesh(groundGeo, ground_shadermaterial);
    ground.frustumCulled = false;
    ground.rotation.x = -Math.PI / 2
    scene.add(ground);
    fetch('https://storage-dev.heating.ai/v1/storage/object/assets/geojson/linyi/building.json')
      .then((response) => {
        return response.json();
      }).then((mapJson) => {
        console.log(mapJson)
        var coor = this.getGeoExtent(mapJson.features)
        minLng = coor.minLng,
          minLat = coor.minLat,
          maxLng = coor.maxLng,
          maxLat = coor.maxLat

        let geos = []
        let sideGeos = [];
        let topGeos = [];
        let topGeos2 = [];

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
                let floor = feature.properties.Floor ? feature.properties.Floor : 5 + Math.ceil(Math.random() * 5)
                let geometry = this.createBuildingGeometry(_points, floor)
                sideGeos.push(geometry)

                let topGeo = this.createTopGeo(_points, floor)
                topGeos.push(topGeo[0])
                topGeos2.push(topGeo[1])

              }
              break;
            case 'MultiPolygon':
              for (let points of coordinates[0]) {
                const _points = points.map((point: any[]) => {
                  return this.lnglat2Map(point)
                })
                let floor = feature.properties.Floor ? feature.properties.Floor : 5 + Math.ceil(Math.random() * 5)

                let geometry = this.createBuildingGeometry(_points, floor)
                sideGeos.push(geometry)

                let topGeo = this.createTopGeo(_points, floor)
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
        // let city1 = new THREE.Mesh(sideGeo, texMAT)
        let city1 = new THREE.Mesh(sideGeo, shadermaterial)
        city1.rotation.x = -Math.PI / 2
        city1.traverse(function (child) {
          if (child.isMesh) {
            console.log('TTYYY', child)
            child.frustumCulled = false;
          }
        });
        scene.add(city1)
        // @ts-ignore
        let topGeo = mergeBufferGeometries(topGeos, false)
        topGeo = new THREE.BufferGeometry().setFromPoints(topGeo);
        // topGeo.computeVertexNormals()
        let city2 = new THREE.Mesh(topGeo, mat)
        city2.rotation.x = -Math.PI / 2
        city2.traverse(function (child) {
          if (child!.isMesh) {
            console.log('TTYYY', child)
            child.frustumCulled = false;
          }
        });
        scene.add(city2)
        // @ts-ignore
        let topGeo2 = mergeBufferGeometries(topGeos2, false)
        topGeo2.computeVertexNormals()
        let city3 = new THREE.Mesh(topGeo2, mat2)
        console.log(city3)
        city3.frustumCulled = false;
        city3.rotation.x = -Math.PI / 2
        city3.traverse(function (child) {
          if (child!.isMesh) {
            console.log('DDRRRR', child)
            child.frustumCulled = false;
          }
        });
        scene.add(city3)


      })
  }
  windowOnresize() {
    window.onresize = function () {
      var width = window.innerWidth;
      var height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

  }
  // 计算数据的最大最小经纬度、最大最小墨卡托坐标以及墨卡托坐标的的多变形数组
  getGeoExtent(features: any[]) {
    let minLng = 180, maxLng = -180, minLat = 90, maxLat = -90
    for (let feature of features) {
      if (feature.geometry) {
        if (feature.geometry.type === 'Polygon') {
          for (let points of feature.geometry.coordinates) {
            for (let point of points) {
              minLng = minLng < point[0] ? minLng : point[0];
              maxLng = maxLng > point[0] ? maxLng : point[0];
              minLat = minLat < point[1] ? minLat : point[1];
              maxLat = maxLat > point[1] ? maxLat : point[1];
            }
          }
        } else if (feature.geometry.type === 'MultiPolygon') {
          for (let polygonPoints of feature.geometry.coordinates) {
            for (let points of polygonPoints) {
              for (let point of points) {
                minLng = minLng < point[0] ? minLng : point[0];
                maxLng = maxLng > point[0] ? maxLng : point[0];
                minLat = minLat < point[1] ? minLat : point[1];
                maxLat = maxLat > point[1] ? maxLat : point[1];
              }
            }
          }
        }
      }
    }
    return { minLng, minLat, maxLng, maxLat }
  }

  lnglat2Map(lnglat: any[]) {

    let v = new THREE.Vector2(
      ((lnglat[0] - minLng) / (maxLng - minLng)) * MAP_WIDTH - MAP_WIDTH * 0.5,
      ((lnglat[1] - minLat) / (maxLat - minLat)) * MAP_HEIGHT - MAP_HEIGHT * 0.5
    )
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

    return geometry;
  }

  /**
   * @name 生成顶部几何体
   * @param {array} points 点集
   * @param {number} offset_s 内凹边距
   * @param {number} height 总体高度
   * @param {number} offset_h 沉降深度
   * @return {array} geometries 构造沉降+底部shape
   */

  createTopGeo(points: any[], floor: number) {
    let vertices: any[] = []; // 顶点数组
    let indices: any[] = []; // 索引数组
    if (THREE.ShapeUtils.isClockWise(points)) {
      points = points.reverse();
    }
    let offset_h = 0.2, offset_s = 0.1, height = floor
    let len = points.length;
    let point_offests: any[]  = points.map((point, index) => {
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

  animate() {
    requestAnimationFrame(this.animate.bind(this))
    renderer.render(scene, camera)
    shadermaterial.uniforms.innerCircleWidth.value += 1
    if (shadermaterial.uniforms.innerCircleWidth.value > 1000) {
      shadermaterial.uniforms.innerCircleWidth.value = -shaderCircleWidth
    }
    if (mapTexture) {
      mapTexture.offset.y -= 0.01;
    }
    ground_shadermaterial.uniforms.innerCircleWidth.value += 1
    if (ground_shadermaterial.uniforms.innerCircleWidth.value > 1000) {
      ground_shadermaterial.uniforms.innerCircleWidth.value = -shaderCircleWidth
    }

  }
}