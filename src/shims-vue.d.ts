/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-wechat-title'
declare module 'THREE'
declare module '@maptalks/gl-layers'
declare module "@/utils/gl/maptalks/RippleWall";
declare module "@/three-plugin/jsm/renderers/CSS2DRenderer.js";
declare module "@/three-plugin/jsm/controls/OrbitControls.js";
declare module "@/three-plugin/jsm/loaders/GLTFLoader.js";
declare module "@/utils/gl/maptalks/geojson/nysubways";
declare module "@/utils/gl/maptalks/geoutil";
declare module "dat.gui";
declare module "mapbox-gl";
declare module "threebox-plugin";