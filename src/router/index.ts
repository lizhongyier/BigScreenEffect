import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";

import Home from "@/views/Home.vue";
import User from "@/views/User.vue";
import ShowPage from "@/views/ShowPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/showPage",
    name: "ShowPage",
    component: ShowPage,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
