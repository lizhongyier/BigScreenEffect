<template>
  <div class="panel-container">
    <el-card
      v-for="(item, index) in panelList"
      :key="index"
      :body-style="panelStyle"
    >
      <div class="img-box" @click="toShowPage(item)">
        <img :src="item.img" class="image" />
      </div>

      <div class="tips-info" @click="toShowPage(item)">
        <span class="title">{{ item.name }}</span>
        <div class="info">
          <span>工具：{{ item.tools }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";
type PanelItem = {
  name: string;
  img: any;
  id: number;
  tools: string;
};
//首先在setup中定义
const router = useRouter();

const panelList = ref<PanelItem[]>([
  {
    name: "模型发光",
    img: ref("/src/assets/img/1.png"),
    id: 1,
    tools: "maptalks,three",
  },
  {
    name: "发光围栏",
    img: ref("/src/assets/img/2.png"),
    id: 2,
    tools: "maptalks,three",
  },
  {
    name: "路网发光效果",
    img: ref("/src/assets/img/3.png"),
    id: 3,
    tools: "maptalks,three",
  },
  {
    name: "更换模型材质颜色",
    img: ref("/src/assets/img/4.png"),
    id: 4,
    tools: "maptalks,three",
  },
  {
    name: "弹窗label",
    img: ref("/src/assets/img/5.png"),
    id: 5,
    tools: "maptalks,three",
  },
  {
    name: "3d拉伸地图",
    img: ref("/src/assets/img/6.png"),
    id: 6,
    tools: "maptalks,three",
  },
  {
    name: "楼宇线条",
    img: ref("/src/assets/img/7.png"),
    id: 7,
    tools: "maptalks,three",
  },
  {
    name: "呼吸遮罩",
    img: ref("/src/assets/img/8.png"),
    id: 8,
    tools: "mapbox",
  },
  {
    name: "飞线",
    img: ref("/src/assets/img/9.png"),
    id: 9,
    tools: "mapbox,threebox",
  },
  {
    name: "扫光",
    img: ref("/src/assets/img/10.png"),
    id: 10,
    tools: "threejs",
  },
  {
    name: "地图扫光",
    img: ref("/src/assets/img/11.png"),
    id: 11,
    tools: "maptalks,threejs",
  },
]);
const currentDate = ref(new Date());
const panelStyle = reactive({
  width: "240px",
  height: "280px",
  backgroundColor: "#fff",
  padding: "14px 10px",
  margin: "14px",
  borderRadius: "6px",
  border: "1px solid #d3d3d3",
});

const toShowPage = (item: PanelItem) => {
  console.log(item);

  router.push({ path: "showPage", query: { showId: item.id } });
};
</script>

<style lang="scss" scoped>
.panel-container {
  width: 100%;
  height: 100%;
  background-color: #999;
  display: flex;
  overflow-y: auto;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.tips-info {
  margin-top: 14px;
  cursor: pointer;
  .title {
    font-size: 16px;
  }

  .info {
    margin-top: 12px;
    font-size: 14px;
    color: #999;
  }
}

.img-box {
  width: 100%;
  height: 210px;
  overflow: hidden;
  cursor: pointer;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
