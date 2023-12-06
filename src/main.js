import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import pinia from './store';
// 样式文件需要单独引入。
// import 'element-plus/dist/index.css'
import '@/assets/scss/style.scss'
import ElementPlus from 'element-plus';

console.log(import.meta.env)
createApp(App).use(router).use(ElementPlus).use(pinia).mount('#app')
