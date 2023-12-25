<script setup lang="ts">
import { onMounted, ref, reactive, toRaw, onBeforeUnmount } from "vue";
import ConfigMap from "@/utils/maptalks/ConfigMaptalks";
import { useRouter } from "vue-router";
import * as dat from "dat.gui";
let gui: any = null;
let guiControlers: any[] = [];
let router = useRouter();
const goBack = () => {};
declare global {
  interface Window {
    secondNetwork: any;
  }
}
const secondNetwork = "secondNetwork" as keyof typeof window;
const initConfig = () => {
  return new Promise<void>((resolve, reject) => {
    window["secondNetwork"] = new ConfigMap({
      container: "map",
    });
    resolve();
  });
};
const initGUI = () => {
  if (!gui) {
    gui = new dat.GUI();
  } else {
    return;
  }
};
onMounted(() => {
  initGUI();
  const pageId = toRaw(router).currentRoute.value.query.showId;

  switch (pageId) {
    case "1":
      initConfig().then(() => {
        window[secondNetwork].addBuildings();
        const params = {
          bloom: true,
        };
        const bloomController = gui
          .add(params, "bloom")
          .name("发光")
          .onChange(() => {
            window[secondNetwork].triggerBloom(params.bloom);
          });
        guiControlers.push(bloomController);
      });
      break;
    case "2":
      initConfig().then(() => {
        setTimeout(() => {
          window[secondNetwork].addWall();
          const params = {
            color: "#0099FF",
            opacity: 0.5,
            altitude: 0,
            speed: 0.04,
          };
          const wallColorController = gui
            .addColor(params, "color")
            .name("wall color")
            .onChange(() => {
              window[secondNetwork].updateWallAttribute(
                "wallColor",
                params.color
              );
            });
          const opacityController = gui
            .add(params, "opacity", 0, 1)
            .name("opacity")
            .onChange(() => {
              window[secondNetwork].updateWallAttribute(
                "opacity",
                params.opacity
              );
            });
          const altitudeController = gui
            .add(params, "altitude", 0, 3000)
            .name("altitude")
            .onChange(() => {
              window[secondNetwork].updateWallAttribute(
                "altitude",
                params.altitude
              );
            });
          const speedController = gui
            .add(params, "speed", 0.001, 0.3, 0.00001)
            .name("speed")
            .onChange(() => {
              window[secondNetwork].updateWallAttribute("speed", params.speed);
            });
          guiControlers.push(
            wallColorController,
            opacityController,
            altitudeController,
            speedController
          );
        }, 500);
      });
      break;
    case "3":
      initConfig().then(() => {
        setTimeout(() => {
          window[secondNetwork].addLines();
          const params = {
            bloom: true,
          };
          const bloomController = gui
            .add(params, "bloom")
            .name("发光")
            .onChange(() => {
              window[secondNetwork].triggerLineBloom(params.bloom);
            });
          guiControlers.push(bloomController);
        }, 500);
      });
      break;
    case "4":
      initConfig().then(() => {
        window[secondNetwork].addBuildings().then(() => {
          const params = {
            color: "#4fc1a6",
          };
          window[secondNetwork].changeModelColor(params.color);
          const colorController = gui
            .addColor(params, "color")
            .name("颜色")
            .onChange(() => {
              window[secondNetwork].changeModelColor(params.color);
            });
          guiControlers.push(colorController);
        });
      });
      break;
    case "5":
      initConfig().then(() => {
        window[secondNetwork].addBuildings().then(() => {
          window[secondNetwork].addLabel();
        });
      });
      break;
    case "6":
      initConfig().then(() => {
        setTimeout(() => {
          window[secondNetwork].initExtrudePolygon();
        }, 2000);
        // window[secondNetwork].addBuildings().then(() => {
        //   window[secondNetwork].addLabel()
        // });
      });
      break;
    case "7":
      initConfig().then(() => {
        const params = {
          add: true,
          color: 'rgb(0,0,0)',
          show: true,
          opacity: 1,
          altitude: 0,
          lineColor: 'rgb(15,159,190)',
          lineOpacity: 0.7,
          animateShow: false,
        };
        setTimeout(() => {
          window[secondNetwork].initBuildingOutLine();
          gui.add(params, 'add').onChange(function () {
                if (params.add) {
                    window[secondNetwork].addBuildingOutlineMesh()
                } else {
                    window[secondNetwork].removeBuildingOutlineMesh()
                }
            });
            gui.addColor(params, 'color').name('building color').onChange(function () {
                window[secondNetwork].setBuildingColor(params.color)
            });
            gui.add(params, 'opacity', 0, 1).name('building opacity').onChange(function () {
                window[secondNetwork].setBuildingOpacity(params.opacity)
            });

            gui.addColor(params, 'lineColor').name('line color').onChange(function () {
                window[secondNetwork].setBuildingOutLineColor(params.lineColor)
            });

            gui.add(params, 'lineOpacity', 0, 1).onChange(function () {
                window[secondNetwork].setBuildingOutLineOpacity(params.lineOpacity)
            });
            gui.add(params, 'altitude', 0, 300).onChange(function () {
                window[secondNetwork].setBuildingOutLineAltitude(params.altitude)
            });
            gui.add(params,'animateShow').onChange(function () {
                window[secondNetwork].setBuildingOutLineAnimate(params.animateShow)
            });
        }, 2000);
      });
      break;
  }
});

onBeforeUnmount(() => {
  if (gui) {
    if (guiControlers.length) {
      guiControlers.forEach((cot) => {
        gui.remove(cot);
      });
      guiControlers.length = 0;
    }
    gui.destroy();
    gui = null;
  }

  if (window[secondNetwork]) {
    window[secondNetwork].clearMap();
  }
});
</script>

<template>
  <div class="show-page">
    <div id="map"></div>
    <span class="back-btn" @click="goBack">返回</span>
  </div>
</template>

<style lang="scss" scoped>
.show-page {
  width: 100%;
  height: 100%;
  position: relative;

  #map {
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    position: absolute;
    /* width: 100%;
    height: 100%; */
    background: url("@/assets/img/skybg.jpg") no-repeat center / cover;
  }

  .back-btn {
    color: #fff;
    margin: 5px;
    cursor: pointer;
  }
}
</style>
