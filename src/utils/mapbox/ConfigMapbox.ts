import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";
import { THREE, Threebox } from 'threebox-plugin'
import TWEEN from "@tweenjs/tween.js"
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
let animateTimer: any = null
let tb: any = null
const poiSize = 200;
const pulsingDot = {
  width: poiSize,
  height: poiSize,
  data: new Uint8Array(poiSize * poiSize * 4),

  // When the layer is added to the map,
  // get the rendering context for the map canvas.
  onAdd: function () {
    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d');
  },

  // Call once before every frame where the icon will be used.
  render: function () {
    const duration = 1000;
    const t = (performance.now() % duration) / duration;

    const radius = (poiSize / 2) * 0.3;
    const outerRadius = (poiSize / 2) * 0.7 * t + radius;
    const context = this.context;

    // Draw the outer circle.
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(
      this.width / 2,
      this.height / 2,
      outerRadius,
      0,
      Math.PI * 2
    );
    context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
    context.fill();

    // Draw the inner circle.
    context.beginPath();
    context.arc(
      this.width / 2,
      this.height / 2,
      radius,
      0,
      Math.PI * 2
    );
    context.fillStyle = 'rgba(60, 100, 255, 0.8)';
    context.strokeStyle = 'white';
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // Update this image's data with data from the canvas.
    this.data = context.getImageData(
      0,
      0,
      this.width,
      this.height
    ).data;

    // Continuously repaint the map, resulting
    // in the smooth animation of the dot.
    map.triggerRepaint();

    // Return `true` to let the map know that the image was updated.
    return true;
  }
}
export default class ConfigMapbox {
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
      center: [113.315969, 34.391157],
      zoom: 6,
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
  addHenanPolygon() {
    const bound = [[114.483333, 36.583333], [113.9930034, 31.2594031]]
    map.fitBounds(bound)
    if (animateTimer) {
      clearInterval(animateTimer)
      animateTimer = null
    }
    fetch('./json/henanBoundary.json').then((res) => {
      res.json().then(geojson => {
        console.log(geojson)
        console.log(geojson.features[0].geometry.coordinates[0])
        const geodata = geojson.features[0].geometry.coordinates[0]
        // var poly = turf.polygon(geodata);
        // var scaledPoly = turf.transformScale(poly, 0.96);
        // map.addSource('scaled', {
        //   'type': 'geojson',
        //   'data': scaledPoly
        // })
        map.addSource('henanGeo', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': geodata
            }
          }
        })
        map.addLayer({
          'id': 'henan-fill',
          'type': 'fill',
          'source': 'henanGeo', // reference the data source
          'layout': {},
          'paint': {
            'fill-color': 'rgb(35,255,75)', // blue color fill
            'fill-opacity': 0.2, // 100% opaque
          }
        });
        map.addLayer({
          'id': 'henan-scaled',
          'type': 'line',
          'source': 'henanGeo',
          'layout': {},
          'paint': {
            'line-color': 'rgb(35,255,75)',
            'line-width': 14,
            'line-blur': 6
          }
        })
        map.addLayer({
          'id': 'henan-outline',
          'type': 'line',
          'source': 'henanGeo',
          'layout': {},
          'paint': {
            'line-color': 'white',
            'line-width': 2
          }
        });

        let step = 0
        animateTimer = setInterval(() => {
          step += 0.02
          var opacity = 0.5 + parseFloat(Math.cos(step).toFixed(2)) * 0.3
          map.setPaintProperty(
            "henan-fill",
            "fill-opacity",
            opacity
          );
        }, 12)
      })
    })

  }
  addFlyLine() {
    map.addLayer({
      id: 'custom_layer',
      type: 'custom',
      renderingMode: '3d',
      onAdd: (mapObj, mbxContext) => {
        tb = new Threebox(
          mapObj,
          mbxContext,
          { defaultLights: true }
        );
        let obj3D = this.draw2();

        tb.add(obj3D);
      },
      render: function (gl, matrix) {
        tb.update();
        if (map) {
          map.triggerRepaint();
        }

        TWEEN.update();
      }
    })
  }
  draw2() {

    const curveH = 3000; // 飞线最大高
    const lineGroup = new THREE.Group();
    lineGroup.name = 'lineGroup';
    let startPoint = [113.315969, 34.391157]
    let endPoint = [105.807073, 30.35702]
    const xyz_start = tb.utils.lnglatsToWorld([[...startPoint, 0]])
    const xyz_end = tb.utils.lnglatsToWorld([[...endPoint, 0]])

    const pointInLine = [
      new THREE.Vector3(xyz_start[0].x, xyz_start[0].y, 0),
      new THREE.Vector3((xyz_start[0].x + xyz_end[0].x) / 2, (xyz_start[0].y + xyz_end[0].y) / 2, curveH),
      new THREE.Vector3(xyz_end[0].x, xyz_end[0].y, 0)
    ];


    // 添加点位动画
    map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
    map.addSource('dot-pointS', {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': startPoint // icon position [lng, lat]
            }
          }
        ]
      }
    });
    map.addSource('dot-pointE', {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': endPoint // icon position [lng, lat]
            }
          }
        ]
      }
    });
    map.addLayer({
      'id': 'layer-with-pulsing-dotS',
      'type': 'symbol',
      'source': 'dot-pointS',
      'layout': {
        'icon-image': 'pulsing-dot',
        'icon-pitch-alignment': 'map'
      }
    });
    map.addLayer({
      'id': 'layer-with-pulsing-dotE',
      'type': 'symbol',
      'source': 'dot-pointE',
      'layout': {
        'icon-image': 'pulsing-dot',
        'icon-pitch-alignment': 'map'
      }
    });

    // 创建轨迹线
    const curve = new THREE.CatmullRomCurve3(pointInLine);
    const points = curve.getSpacedPoints(50);
    const lineGeom = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({
      color: 0x006666
    });
    const curveObject = new THREE.Line(lineGeom, material);

    console.log(points)
    // 创建移动的线
    const index = 20; //取点索引位置
    const num = 10; //从曲线上获取点数量
    const points2 = points.slice(index, index + num); //从曲线上获取一段
    const flyLineGeom = new THREE.BufferGeometry();
    flyLineGeom.setFromPoints(points2);

    // 操作颜色
    const colorArr = [];
    for (let i = 0; i < points2.length; i++) {
      const color1 = new THREE.Color(0x006666); // 线颜色 
      const color2 = new THREE.Color(0xffff00); //飞痕颜色
      // 飞痕渐变色
      let color = color1.lerp(color2, i / 5)
      colorArr.push(color.r, color.g, color.b);
    }
    console.log('colorArr', colorArr)
    // 设置几何体顶点颜色数据
    flyLineGeom.attributes.color = new THREE.BufferAttribute(new Float32Array(colorArr), 3);
    flyLineGeom.attributes.position.needsUpdate = true;

    const material2 = new THREE.LineBasicMaterial({
      vertexColors: THREE.VertexColors, //使用顶点本身颜色
    });

    const curveFlyObject = new THREE.Line(flyLineGeom, material2);
    lineGroup.add(curveObject, curveFlyObject)

    // 创建动画
    let tween = new TWEEN.Tween({ index: 1 })
      .to({ index: 50 }, 2000)
      .onUpdate(function (t) {
        let id = Math.ceil(t.index);
        let pointsList = points.slice(id, id + 10); //从曲线上获取一段
        flyLineGeom && flyLineGeom.setFromPoints(pointsList);
        flyLineGeom.attributes.position.needsUpdate = true;
      })
      .repeat(Infinity)
    tween.start();

    return lineGroup
  }

}