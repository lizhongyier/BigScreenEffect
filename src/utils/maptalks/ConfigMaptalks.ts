import "maptalks/dist/maptalks.css";
import * as THREE from "three";
import * as maptalks from "maptalks";
import { BaseObject, ThreeLayer } from "maptalks.three";
import { GroupGLLayer, VectorTileLayer } from "@maptalks/gl-layers";
// const maptalksgl = require('../gl/maptalks/maptalksgl')
import RippleWall from "@/utils/gl/maptalks/RippleWall";
import {
    CSS2DRenderer,
    CSS2DObject,
} from "@/three-plugin/jsm/renderers/CSS2DRenderer.js";
import { OrbitControls } from "@/three-plugin/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "@/three-plugin/jsm/loaders/GLTFLoader.js";
import lineData from "@/utils/gl/maptalks/geojson/nysubways";
import { lineLength } from "@/utils/gl/maptalks/geoutil";
import { uuid } from "@/utils/tools"
import OutLine from "@/utils/gl/maptalks/Outline"
import buildings from '@/utils/gl/maptalks/buildings'
interface Window {
    css2DLabelRenderer: any;
}
let css2DLabelRenderer = "WIN_CSS2dRender" as keyof typeof window;
let threeLayer: ThreeLayer | null = null;
let groupLayer = null;
let groundWall: any = null;
let wallMaterial: THREE.ShaderMaterial | null = null;
let linePathTextureObj: THREE.Texture | null = null;
let lineMeshObj: any[] = []
let baseObjectModel: any = null;
let animationTimer: number | null = null;
let maptalksMap: maptalks.Map | null = null;
let containerDom: HTMLElement | null = null;
let css2dDomList: any[] = []
let samllIconList: any[] = []
let extrudePolygonMateial: any = null
let extrudePolygons: any[] = []
let extrudePolygonLinesMaterila: any = null
let mapMask: any = null
let maskedLayer: any = null
let buildingOutLineMaterial: any = null
let buildingsMaterial: any = null
let buildingOutLineFeatures: any[] = []
let buildingOutLineMeshes: any[] = []
const modelsUrlList: { url: string; name: string }[] = [
    {
        url: "https://storage-dev.heating.ai/v1/storage/object/assets/gltf/qinghe/models/budingBottom.glb",
        name: "budingBottom",
    },
    {
        url: "https://storage-dev.heating.ai/v1/storage/object/assets/gltf/qinghe/models/buildingTop.glb",
        name: "buildingTop",
    },
    {
        url: "https://storage-dev.heating.ai/v1/storage/object/assets/gltf/qinghe/models/edge.glb",
        name: "edge",
    },
    {
        url: "https://storage-dev.heating.ai/v1/storage/object/assets/gltf/qinghe/models/floor.glb",
        name: "floor",
    },
];
const buildingTier = 10;
let mapCenter: any[] = [124.142860502, 42.5422626272];
const lines = [];
let lineMaterial: THREE.MeshBasicMaterial | null = null;
export default class ConfigMaptalks {
    options: { container: string; };
    customCoords: null;
    threePositions: any;
    currentOpenPanelCoor: any;
    constructor(options: { container: string; }) {
        this.options = options;
        this.initMap();
        this.customCoords = null;
        this.threePositions = [];
        this.currentOpenPanelCoor = null;
    }
    initMap() {
        maptalksMap = new maptalks.Map(this.options.container, {
            //设置地图容器id
            zoom: 16.9, //初始化地图级别
            center: mapCenter, //初始化地图中心点位置
            minZoom: 3,
            // 地图可滚动最大层级
            maxZoom: 24,
            baseLayer: new maptalks.TileLayer("base", {
                urlTemplate:
                    "https://api.mapbox.com/styles/v1/zhang12388999/clp7mrp8g00h501r76g5b5yyz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemhhbmcxMjM4ODk5OSIsImEiOiJja3N5Ync1cXcyMTR2Mm9xempmbGE4MnBtIn0.R-j78CRvbs6JZG-MDSoh8Q&zoomwheel=true&fresh=true#14.91/30.24036/120.33858/16.6/64",
                subdomains: ["a", "b", "c", "d"],
                attribution:
                    '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
                // cssFilter : 'sepia(80%) invert(80%)'
            }),
            pitch: 54,
            doubleClickZoom: false,
            bearing: 20,
            fog: true,
            fogColor: [20, 67, 109]
        } as any);
        this.initThreeLayer();
    }

    initThreeLayer() {
        threeLayer = new ThreeLayer("t", {
            forceRenderOnMoving: true,
            forceRenderOnRotating: true,
            animation: false,
        } as any);
        threeLayer.prepareToDraw = (gl, scene, camera) => {
            containerDom = document.getElementById(this.options.container);
            console.log(gl);
            const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff);
            hemiLight.position.set(0, 0, 0);
            scene.add(hemiLight);
            const dirLight = new THREE.DirectionalLight(0xffffff); // 设置平行光源
            dirLight.position.set(0, -10, 10).normalize();
            // dirLight.castShadow = true;
            // dirLight.shadow.camera.top = 2;
            // dirLight.shadow.camera.bottom = -2;
            // dirLight.shadow.camera.left = -2;
            // dirLight.shadow.camera.right = 2;
            // dirLight.shadow.camera.near = 0.1;
            // dirLight.shadow.camera.far = 20;
            scene.add(dirLight);

            camera.add(new THREE.PointLight("#fff", 4));
            this.threePositions = threeLayer!.coordinateToVector3(
                new maptalks.Coordinate(mapCenter[0], mapCenter[1])
            );

            // this.addBuildings();
            // this.addWall();
            // this.addLines();
            // this.animation()
        };

        const sceneConfig = {
            postProcess: {
                enable: true, // 是否开启后处理
                antialias: {
                    enable: true, // 是否开启FXAA后处理
                    taa: true, // 是否开启taa后处理
                },
                bloom: {
                    enable: true, // 是否开启泛光
                    threshold: 0.01, // 最小阈值（亮度低于阈值的区域不发光） 0 - 1
                    factor: 0.1, // 强度因子 0.1 - 5
                    radius: 0.1, // 泛光半径 0.1 - 4
                },
                outline: {
                    enable: true, // 是否开启高亮后处理
                },
            },
        };
        // const vt = new VectorTileLayer("vt", {
        //     urlTemplate: `https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoidGFuZ21pbmd5YW5nIiwiYSI6ImNqczVqZmw2eTBnOW0zem96OHN4Zm41bTgifQ.0EPVaDmwmlr8iXf9cT34Kg`,
        //     style: "./mapStyles/style.json"
        //   });
        groupLayer = new GroupGLLayer("group", [threeLayer], {
            sceneConfig,
            onlyWebGL1: true,
        });
        groupLayer.addTo(maptalksMap);
    }

    addBuildings() {
        // console.log(this.threePositions)
        return new Promise<void>((resolve, reject) => {
            const loader = new GLTFLoader();
            const promiseList = modelsUrlList.map((item) => {
                return new Promise((resolve, reject) => {
                    loader.load(item.url, (gltf: { scene: any; }) => {
                        if (gltf) {
                            resolve({
                                name: item.name,
                                model: gltf.scene,
                            });
                        } else {
                            resolve({
                                name: item.name,
                                model: null,
                            });
                        }
                    });
                });
            });

            Promise.all(promiseList).then((objs) => {
                console.log(objs);
                // // 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
                // var axes = new THREE.AxesHelper(30);
                // var axes2 = new THREE.AxesHelper(50);
                // axes.position.set(0, 0, 0);
                // axes2.position.set(0, 10, 0);
                // window[scene].add(axes)
                // window[scene].add(axes2)
                const group = new THREE.Group();
                // console.log(this.threePositions)
                objs.forEach((obj: any) => {
                    obj.model.position.set(0, 0, 0);
                    if (obj.name === "buildingTop") {
                        obj.model.position.set(
                            0,
                            0.39 + (buildingTier - 1) * 0.2 - 0.03,
                            0.052
                        );
                    }
                    if (obj.name === "floor") {
                        obj.model.position.set(0, 0.244, -0.055);
                        for (let f = 1; f < buildingTier; f++) {
                            const cloneFloor = obj.model.clone();
                            cloneFloor.position.set(0, 0.244 + 0.2 * f, -0.055);
                            group.add(cloneFloor);
                        }
                    }
                    if (obj.name === "edge") {
                        obj.model.position.set(0, 0.36, 0.058);
                        for (let e = 1; e < buildingTier - 1; e++) {
                            const cloneEdge = obj.model.clone();
                            cloneEdge.position.set(0, 0.36 + 0.2 * e, 0.058);
                            group.add(cloneEdge);
                        }
                    }
                    group.add(obj.model);
                });

                group.rotation.x = 0.5 * Math.PI;
                group.rotation.y = Math.PI;
                group.traverse((child: any) => {
                    if (child.isMesh) {
                        child.frustumCulled = false;
                    }
                });
                group.scale.set(1, 1, 1);

                baseObjectModel = threeLayer!.toModel(group, { coordinate: mapCenter }) as any;
                threeLayer!.addMesh(baseObjectModel);
                baseObjectModel.options.bloom = true;
                resolve()
                this.animation()
            });
        })
    }


    initExtrudePolygon() {
        fetch('./json/henanProvince.json').then((res) => {
            const position: any = [113.665412, 34.757975]
            maptalksMap!.setCenter(position)
            maptalksMap!.setZoom(8.2)
            res.json().then((geojson => {
                extrudePolygons.length = 0
                extrudePolygonMateial = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0x6179E1, specular: 0xDFDFDF, shininess: 32 });
                extrudePolygonLinesMaterila = new THREE.LineBasicMaterial({ color: "#AFEEEE" });
                console.log(geojson)
                this.addExtrudePolygon(geojson)
            }))
        })
        fetch('./json/henanBoundary.json').then((res) => {
            res.json().then(geojson => {
                console.log(geojson.features[0].geometry.coordinates[0])
                mapMask = new maptalks.Polygon(geojson.features[0].geometry.coordinates[0], {
                    visible: true,
                    zIndex: 999,
                    'symbol': [
                        {
                            'lineColor': '#AFEEEE',
                            'lineWidth': 4,
                            'polygonFillOpacity': 0
                        },
                        {
                            'lineColor': '#404040',
                            'lineWidth': 2,
                            'polygonFillOpacity': 0
                        }
                    ]

                });
                this.addMapMask(mapMask)
            })
        })
    }


    addMapMask(mapMask: any) {
        const outline = mapMask.copy();
        maskedLayer = new maptalks.TileLayer('masked', {
            'urlTemplate': 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            'subdomains': ['a', 'b', 'c', 'd'],
        })
            .setMask(mapMask) // set boundary as the mask to the tilelayer
            .addTo(maptalksMap!);

        //District's name
        // const title = new maptalks.Marker(mapMask.getCenter(), {
        //     'symbol': {
        //         'textName': 'JiangHan District',
        //         'textFaceName': 'sans-serif',
        //         'textSize': 32,
        //         'textFill': '#1bbc9b',
        //         'textHaloFill': '#fff',
        //         'textHaloRadius': 5,
        //         'textDx': -30
        //     }
        // });
        new maptalks.VectorLayer('maskPolygon', [outline]).addTo(maptalksMap!);
    }

    addExtrudePolygon(geojson: any) {
        let idx = 0;
        geojson.features.slice(0, Infinity).forEach((f: any) => {
            const lineStrings = [];
            const geometry = f.geometry;
            if (geometry.type === "MultiPolygon") {
                geometry.coordinates.forEach((coordinates: any[]) => {
                    lineStrings.push(new maptalks.LineString(coordinates[0]));
                });
            } else {
                lineStrings.push(new maptalks.LineString(geometry.coordinates[0]));
            }
            const polygon = threeLayer!.toExtrudePolygon(
                f,
                { height: -15000 * 1.001, interactive: false, topColor: "#fff" },
                extrudePolygonMateial
            );
            extrudePolygons.push(polygon);
            lineStrings.forEach((lineString) => {
                const line = threeLayer!.toLine(
                    lineString,
                    { altitude: 1.0002, interactive: false },
                    extrudePolygonLinesMaterila
                );
                extrudePolygons.push(line);
            });
            idx++;
        });
        threeLayer!.addMesh(extrudePolygons);

    }

    initBuildingOutLine() {
        const position: any = [13.41055, 52.526702]
        maptalksMap!.setCenter(position)
        maptalksMap!.setZoom(17.2)
        buildingOutLineFeatures.length = 0
        buildings.forEach((b: any) => {
            buildingOutLineFeatures = buildingOutLineFeatures.concat(b.features);
        });
        buildingsMaterial = new THREE.MeshPhongMaterial({
            // map: texture,
            transparent: true,
            color: 'rgb(0,0,0)'
        });
        buildingOutLineMaterial = new THREE.LineBasicMaterial({
            // 线的颜色
            color: "rgb(15,159,190)",
            transparent: true,
            linewidth: 1,
            opacity: 0.7,
            //depthTest: true,
        });
        //解决z-flighting
        buildingOutLineMaterial.polygonOffset = true;
        buildingOutLineMaterial.depthTest = true;
        buildingOutLineMaterial.polygonOffsetFactor = 1;
        buildingOutLineMaterial.polygonOffsetUnits = 1.0;

        buildingOutLineMeshes.length = 0


        const heightPerLevel = 10;
        const polygons: any = buildingOutLineFeatures.map(f => {
            const polygon = maptalks.GeoJSON.toGeometry(f);
            const levels = f.properties.levels || 1;
            polygon.setProperties({
                height: heightPerLevel * levels,
            });
            return polygon;
        });
        const mesh = threeLayer!.toExtrudePolygons(polygons, { interactive: false, topColor: '#fff' }, buildingsMaterial);
        buildingOutLineMeshes.push(mesh);
        const outLine = new OutLine(mesh, { interactive: false }, buildingOutLineMaterial, threeLayer);
        buildingOutLineMeshes.push(outLine);

        threeLayer!.addMesh(buildingOutLineMeshes);
        this.animation()

    }
    addBuildingOutlineMesh() {
        if (buildingOutLineMeshes.length && threeLayer) {
            threeLayer.addMesh(buildingOutLineMeshes);
        }
    }
    removeBuildingOutlineMesh() {
        if (buildingOutLineMeshes.length && threeLayer) {
            threeLayer.removeMesh(buildingOutLineMeshes);
        }
    }
    setBuildingColor(color: string) {
        if (buildingsMaterial) {
            buildingsMaterial.color.set(color)
        }
    }
    setBuildingOpacity(opacity: number) {
        if (buildingsMaterial) {
            buildingsMaterial.opacity = opacity
        }
    }
    setBuildingOutLineColor(lineColor: string) {
        if (buildingOutLineMaterial) {
            buildingOutLineMaterial.color.set(lineColor)
        }
    }
    setBuildingOutLineOpacity(lineOpacity: number) {
        if (buildingOutLineMaterial) {
            buildingOutLineMaterial.opacity = lineOpacity
        }
    }

    setBuildingOutLineAltitude(altitude: number) {
        if (buildingOutLineMeshes.length) {
            buildingOutLineMeshes.forEach((mesh) => {
                mesh.setAltitude(altitude)
            })
        }
    }

    setBuildingOutLineAnimate(animated: boolean) {
        if (buildingOutLineMeshes.length) {
            buildingOutLineMeshes.forEach((mesh) => {
                mesh.animateShow({
                    duration: 3000
                });
            });
        }

    }

    changeModelColor(color: string) {
        baseObjectModel.object3d.children[0].children.forEach((obj: { traverse: (arg0: (itm: any) => void) => void; }, idx: any) => {
            obj.traverse((itm: { isMesh: any; material: { color: { set: (arg0: THREE.Color) => void; }; }; }) => {
                if (itm.isMesh) {
                    itm.material.color.set(new THREE.Color(color));
                }
            });
        });
    }

    triggerBloom(bloom: boolean) {
        baseObjectModel.options.bloom = bloom;
    }

    addLabel() {
        if (!maptalksMap) {
            return
        }
        const panel_uuid = uuid(6);
        const tempHtmlLi = ''
        let backTempHtmlLi = ''
        const buildingTemList = [{
            name: '36#楼-一单元',
            m_007t: 32,
        }, {
            name: '36#楼-二单元',
            m_007t: 33,
        }, {
            name: '36#楼-三单元',
            m_007t: 34,
        }]
        buildingTemList.forEach((p) => {
            backTempHtmlLi += `<div class="content-li">
              <span class="name">${formateNamer(
                p.name
            )}</span><span class="value">${p.m_007t}°C</span>
            </div>`;
        });
        function formateNamer(str: string) {
            const arr = str.split("-");
            return arr.filter((i) => i)[arr.length - 1];
        }
        const marker = new maptalks.ui.UIMarker(
            mapCenter,
            {
                draggable: false,
                single: false,
                // autoPan: true,
                // autoPanDuration: 1000,
                // collision: true,
                // collisionFadeIn: true,
                // collisionWeight: 2,
                altitude: 160,
                content: `<div id="${panel_uuid}" class="testLable">
              <div class="title">
                                <i class="icon"></i><span>36#楼</span></div>
                                <div class="content">
                                <div class="content-li sub-title">
                                  <span class="name">平均室温</span><span class="value">21°C</span>
                                </div>
                                <div class="sub-content">
                                  ${tempHtmlLi}
                                </div>
                                <div class="content-li sub-title" style="margin-top:5px">
                                  <span class="name">平均楼口回温</span><span class="value">33°C <i id="avgBackTem_${panel_uuid}" class="btn"></i>
                        </span>
                                </div>
                                <div class="sub-content">
                                  ${backTempHtmlLi}
                                </div>
                                </div>
                              </div>`,
            } as any
        );
        const samllIconMarker = new maptalks.ui.UIMarker(
            mapCenter,
            {
                draggable: false,
                single: false,
                // autoPan: true,
                // autoPanDuration: 1000,
                // collision: true,
                // collisionFadeIn: true,
                altitude: 146,
                content: `<div class="samllIcon"></div>`,
            } as any
        );
        samllIconMarker.on("click", this.onSmallIconClick);
        // marker.on("mouseout", this.onPanelOut);
        marker.on("click", this.onPanelClick);
        maptalksMap.on("zoomend", this.getStatus);
        maptalksMap.on("click", this.onMapClick);
        setTimeout(() => {
            marker.addTo(maptalksMap!).hide();
            samllIconMarker.addTo(maptalksMap!).show();
            css2dDomList.push(marker);
            samllIconList.push(samllIconMarker);
        }, 10);
    }

    onPanelClick(eve: any) {
        const targetID = eve.domEvent.target.id;
        const target = eve.domEvent.target;
        if (targetID) {
            const type = targetID.split("_")[0];
            const panelDom = document.getElementById(targetID.split("_")[1]);
            if (panelDom) {
                const oldContent = eve.target.getContent()
                if (type === "avgTem") {
                    const liDom = panelDom.children[1].children[1]
                    if (liDom.classList.value.indexOf("open") > -1) {
                        // liDom.classList.remove("open");
                        const newContent = oldContent.replace("sub-content open", "sub-content").replace("btn open", "btn");
                        eve.target.setContent(newContent)
                    } else {
                        const newContent = oldContent.replace("sub-content", "sub-content open").replace("btn", "btn open");
                        eve.target.setContent(newContent)
                    }
                }
                if (type === "avgBackTem") {
                    const liDom = panelDom.children[1].children[3]
                    if (liDom.classList.value.indexOf("open") > -1) {
                        const idx = oldContent.lastIndexOf('sub-title')
                        const part1 = oldContent.slice(0, idx)
                        const part2 = oldContent.slice(idx)
                        let newpart2 = part2.replace("sub-content open", "sub-content").replace("btn open", "btn");
                        const newContent = part1 + newpart2;
                        eve.target.setContent(newContent)
                    } else {
                        const idx = oldContent.lastIndexOf('sub-title')
                        const part1 = oldContent.slice(0, idx)
                        const part2 = oldContent.slice(idx)
                        const newpart2 = part2.replace("sub-content", "sub-content open").replace("btn", "btn open");
                        const newContent = part1 + newpart2;
                        eve.target.setContent(newContent)
                    }
                }
            }

        }
    }

    onSmallIconClick(eve: any) {
        const target = eve.target;
        css2dDomList.forEach((item) => {
            if (
                item._coordinate.x === target._coordinate.x &&
                item._coordinate.y === target._coordinate.y
            ) {
                item.show();
                this.currentOpenPanelCoor = item._coordinate;
            }
        });
    }

    getStatus(param: any) {
        // console.log(param);
        if (param.to < 14.8) {
            samllIconList.forEach((marker) => {
                marker.hide();
            });
            css2dDomList.forEach((marker) => {
                marker.hide();
            });
        }
        if (param.to < 18.2 && param.to >= 14.8) {
            samllIconList.forEach((marker) => {
                marker.show();
            });
            css2dDomList.forEach((marker) => {
                if (
                    this.currentOpenPanelCoor &&
                    this.currentOpenPanelCoor.x === marker._coordinate.x &&
                    this.currentOpenPanelCoor.y === marker._coordinate.y
                ) {
                    marker.show();
                } else {
                    marker.hide();
                }
            });
        }
        if (param.to >= 18.2) {
            css2dDomList.forEach((marker) => {
                marker.show();
            });
            samllIconList.forEach((marker) => {
                marker.hide();
            });
        }
    }

    onMapClick(eve: any) {
        this.currentOpenPanelCoor = null;
        const currentZomm = maptalksMap!.getZoom();
        if (currentZomm < 19.6) {
            const targetPoi = { x: eve.domEvent.x, y: eve.domEvent.y };

            css2dDomList.forEach((domMarker) => {
                if (domMarker.options.visible) {
                    const domRect = domMarker
                        .getDOM()
                        .children[0].getBoundingClientRect();
                    if (
                        domRect.left <= targetPoi.x &&
                        domRect.left + domRect.width >= targetPoi.x &&
                        targetPoi.y >= domRect.top &&
                        targetPoi.y <= domRect.top + domRect.height
                    ) {
                        domMarker.show();
                        this.currentOpenPanelCoor = domMarker._coordinate;
                    } else {
                        domMarker.hide();
                    }
                }
            });
        }
    }
    addWall() {
        if (!maptalksMap) {
            return
        }
        const position: any = [122.064444, 37.5741666]
        maptalksMap.setCenter(position)
        maptalksMap.setZoom(14.2)
        wallMaterial = this.makeWallMaterial();
        groundWall = new RippleWall(
            [
                [122.06444, 37.5925],
                [122.064444, 37.5741666],
                [122.0930555, 37.5741666],
                [122.0930555, 37.5925],
                [122.06444, 37.592501],
            ],
            { height: 1000 },
            wallMaterial,
            threeLayer
        );
        threeLayer!.addMesh(groundWall);
        this.animation()
    }
    makeWallMaterial() {
        const vertexs = {
            normal_vertex: "\n  precision lowp float;\n  precision lowp int;\n  "
                .concat(
                    THREE.ShaderChunk.fog_pars_vertex,
                    "\n  varying vec2 vUv;\n  void main() {\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    "
                )
                .concat(THREE.ShaderChunk.fog_vertex, "\n  }\n"),
        };

        const fragments = {
            rippleWall_fragment:
                "\n  precision lowp float;\n  precision lowp int;\n  uniform float time;\n  uniform float opacity;\n  uniform vec3 color;\n  uniform float num;\n  uniform float hiz;\n\n  varying vec2 vUv;\n\n  void main() {\n    vec4 fragColor = vec4(0.);\n    float sin = sin((vUv.y - time * hiz) * 10. * num);\n    float high = 0.92;\n    float medium = 0.4;\n    if (sin > high) {\n      fragColor = vec4(mix(vec3(.8, 1., 1.), color, (1. - sin) / (1. - high)), 1.);\n    } else if(sin > medium) {\n      fragColor = vec4(color, mix(1., 0., 1.-(sin - medium) / (high - medium)));\n    } else {\n      fragColor = vec4(color, 0.);\n    }\n\n    vec3 fade = mix(color, vec3(0., 0., 0.), vUv.y);\n    fragColor = mix(fragColor, vec4(fade, 1.), 0.85);\n    gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));\n  }\n",
        };
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: {
                    type: "pv2",
                    value: 0,
                },
                color: {
                    type: "uvs",
                    value: new THREE.Color("#0099FF"),
                },
                opacity: {
                    type: "pv2",
                    value: 0.5,
                },
                num: {
                    type: "pv2",
                    value: 5,
                },
                hiz: {
                    type: "pv2",
                    value: 0.15,
                },
            },
            vertexShader: vertexs.normal_vertex,
            fragmentShader: fragments.rippleWall_fragment,
            blending: THREE.AdditiveBlending,
            transparent: !0,
            depthWrite: !1,
            depthTest: !0,
            side: THREE.DoubleSide,
        } as any);
        return material;
    }

    updateWallAttribute(type: string, value: any) {
        console.log(type, value)
        if (!wallMaterial || !groundWall) {
            return
        }
        switch (type) {
            case 'wallColor':
                console.log(wallMaterial)
                wallMaterial.uniforms.color.value.setStyle(value);
                break;
            case 'opacity':
                wallMaterial.uniforms.opacity.value = value
                break;
            case 'altitude':
                groundWall.setAltitude(value);
                break;
            case 'speed':
                groundWall.options.speed = value
                break;
        }
    }

    addLines() {
        console.log(lineData)
        if (!maptalksMap || !threeLayer) {
            return
        }
        lineMeshObj.length = 0
        linePathTextureObj = this.linePathTexture();
        let lineMaterial = new THREE.MeshBasicMaterial({
            map: linePathTextureObj,
            side: THREE.BackSide,
            transparent: true,
        });
        maptalksMap.setCenter(lineData.features[0].geometry.coordinates[0])
        maptalksMap.setZoom(14.2)
        lineData.features.forEach((item: { geometry: { coordinates: any[]; type: string; }; }) => {
            if (item.geometry && item.geometry.coordinates && item.geometry.coordinates.length && item.geometry.type === 'LineString') {
                let pois: THREE.Vector3[] = [];
                item.geometry.coordinates.forEach((o: object | number[]) => {
                    const poi = threeLayer!.coordinateToVector3(
                        new maptalks.Coordinate(o),
                        0.01
                    );
                    pois.push(poi);
                });
                this.makePathLight(pois, lineMaterial);
            }
        })
        this.animation();
    }

    makePathLight(pois: any[] | undefined, material: THREE.MeshBasicMaterial) {
        if (!threeLayer) {
            return
        }
        let curve = new THREE.CatmullRomCurve3(pois, false, "centripetal", 0);
        // 创建管道
        let tubeGeometry = new THREE.TubeGeometry(curve, 1, 0.11, 200, false);
        let mesh = new THREE.Mesh(tubeGeometry, material);
        const meshObj: any = threeLayer.toModel(mesh, {
            coordinate: [mesh.position.x, mesh.position.y, mesh.position.z],
        });
        meshObj.options.bloom = true;
        lineMeshObj.push(meshObj)
        threeLayer.addMesh(meshObj);
    }

    linePathTexture() {
        let texture = new THREE.TextureLoader().load("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAACXBIWXMAAAsTAAALEwEAmpwYAAAQimlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0ZURhdGU9IjIwMTMtMDUtMzBUMTk6MTA6MjcrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA2LTI1VDEzOjE4OjQ2KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA2LTI1VDEzOjE4OjQ2KzA4OjAwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzMgV2luZG93cyIgcGhvdG9zaG9wOkxlZ2FjeUlQVENEaWdlc3Q9IjUwQTgxQzRFN0M4NTk4ODcyREI1NzI1N0QxQzI0QzgwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iIiBwaG90b3Nob3A6SGlzdG9yeT0iMjAxOC0wNi0yNVQxMzoxNToyMyswODowMCYjeDk75paH5Lu2IGxpZ2h0Rmxvd19zdHJpcC5qcGcg5bey5omT5byAJiN4QTsyMDE4LTA2LTI1VDEzOjE4OjQ2KzA4OjAwJiN4OTvmlofku7YgQzpcVXNlcnNcQWRtaW5pc3RyYXRvclxEZXNrdG9wXGxpZ2h0Rmxvd19zdHJpcF8xLnBuZyDlt7LlrZjlgqgmI3hBOyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkMTBjYTA1Yi1hOTQ2LTA4NGEtOTIxNS00NWY4MzE4MTM2ZDYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxMzkxOTg2YS1hMGI2LWU1NDMtOTZhMi0wMzYzZWU4OGZkYzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDoxRDRDMUUzMjE4QzlFMjExOUUzMkQ1Mjg2NURGQ0RDNSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB0aWZmOkltYWdlV2lkdGg9IjEyOCIgdGlmZjpJbWFnZUxlbmd0aD0iMTI4IiB0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb249IjIiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6U2FtcGxlc1BlclBpeGVsPSIzIiB0aWZmOlhSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIgZXhpZjpFeGlmVmVyc2lvbj0iMDIyMSIgZXhpZjpDb2xvclNwYWNlPSI2NTUzNSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEyOCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEyOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdiYTY3ZGNkLTM4NDUtZTc0My1iZDE5LTM1ZWE5ZjE1NTFhMiIgc3RSZWY6ZG9jdW1lbnRJRD0idXVpZDoxRDRDMUUzMjE4QzlFMjExOUUzMkQ1Mjg2NURGQ0RDNSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjFENEMxRTMyMThDOUUyMTE5RTMyRDUyODY1REZDREM1Ii8+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4OENERjYzNEZGMEUzMTE5RDNDRjc4RDAwMDFCOTQwIiBzdEV2dDp3aGVuPSIyMDE0LTA2LTEwVDExOjQ3OjMwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL2pwZWcgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Qzk4Q0RGNjM0RkYwRTMxMTlEM0NGNzhEMDAwMUI5NDAiIHN0RXZ0OndoZW49IjIwMTQtMDYtMTBUMTE6NDc6MzArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTVBQTkyRTIzRkYxRTMxMThFMTlGNDJGMTZENTVFOTUiIHN0RXZ0OndoZW49IjIwMTQtMDYtMTFUMTY6MjU6NDYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTZBQTkyRTIzRkYxRTMxMThFMTlGNDJGMTZENTVFOTUiIHN0RXZ0OndoZW49IjIwMTQtMDYtMTFUMTY6MjY6MDIrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvanBlZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1N0FBOTJFMjNGRjFFMzExOEUxOUY0MkYxNkQ1NUU5NSIgc3RFdnQ6d2hlbj0iMjAxNC0wNi0xMVQxNjoyNjowMiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YmE2N2RjZC0zODQ1LWU3NDMtYmQxOS0zNWVhOWYxNTUxYTIiIHN0RXZ0OndoZW49IjIwMTgtMDYtMjVUMTM6MTg6NDYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQxMGNhMDViLWE5NDYtMDg0YS05MjE1LTQ1ZjgzMTgxMzZkNiIgc3RFdnQ6d2hlbj0iMjAxOC0wNi0yNVQxMzoxODo0NiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHRpZmY6Qml0c1BlclNhbXBsZT4gPHJkZjpTZXE+IDxyZGY6bGk+ODwvcmRmOmxpPiA8cmRmOmxpPjg8L3JkZjpsaT4gPHJkZjpsaT44PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC90aWZmOkJpdHNQZXJTYW1wbGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3ngMaQAAAPVJREFUeNrt0TEOwjAQAEH7XASMHSLl8sbwbvgIHU9ACM32W019nlm+VV16XGb0LW5bjGwzY802j5jZxh5jj36P61qXXmp8rtfjKP9bFAEAIAAABACAAAAQAAACAEAAAAgAAAEAIAAABACAAAAQAAACAEAAAAgAAAEAIAAABACAAAAQAAACAEAAAAgAAAEAIAAABACAAAAQAAACAEAAAAgAAAACAEAAAAgAAAEAIAAABACAAAAQAAACAEAAAAgAAAEAIAAABACAAAAQAAACAEAAAAgAAAEAIAAABACAAAAQAAACAEAAAAgAAAEAIAAABACAAPxAb29vBV2PIDSNAAAAAElFTkSuQmCC");
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping; //每个都重复
        texture.repeat.set(1, 1);
        texture.needsUpdate = true;
        return texture;
    }

    triggerLineBloom(bloom: boolean) {
        lineMeshObj.forEach((meshObj) => {
            meshObj.options.bloom = bloom;
        })
    }

    clearMap() {
        if (css2dDomList.length) {
            css2dDomList.forEach((dom) => {
                dom.removeEventListener("click", this.onPanelClick);
                dom.remove();
            });
            css2dDomList.length = 0;
        }
        if (samllIconList.length) {
            samllIconList.forEach((dom) => {
                dom.removeEventListener("click", this.onSmallIconClick);
                dom.remove();
            });
            samllIconList.length = 0;
        }
        if (threeLayer) {
            // @ts-ignore
            threeLayer.remove(baseObjectModel);
            threeLayer.clear();
            threeLayer = null;
        }
        if (maptalksMap) {
            maptalksMap.remove();
            maptalksMap = null;
        }
        if (window[css2DLabelRenderer]) {
            if (window[css2DLabelRenderer].domElement) {
                const dom = window[css2DLabelRenderer].domElement;
                dom.remove(); //删除自己和所有的子元素
            }
            // @ts-ignore
            window[css2DLabelRenderer] = null;
        }
        if (animationTimer) {
            cancelAnimationFrame(animationTimer);
        }
    }
    animation() {
        // threeLayer!._needsUpdate = !threeLayer!._needsUpdate;
        if (!maptalksMap!.isInteracting()) {
            threeLayer!._needsUpdate = !threeLayer!._needsUpdate;
            if (threeLayer!._needsUpdate) {
                threeLayer!.redraw();
            }
        }
        if (threeLayer!._needsUpdate) {
            threeLayer!.redraw();
        }
        if (window[css2DLabelRenderer]) {
            window[css2DLabelRenderer].render(
                threeLayer!.getScene(),
                threeLayer!.getCamera()
            );
        }
        if (linePathTextureObj) {
            linePathTextureObj.offset.x -= 0.02;
        }
        animationTimer = requestAnimationFrame(this.animation.bind(this));
    }
}
