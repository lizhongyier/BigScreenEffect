<script setup lang="ts">
import { onMounted, ref } from 'vue'
import userApi from '@/api/user'
//引入想要的pinia文件 {} 里面就是对应导出的名字
import { useMain } from '@/store/home'
import { storeToRefs } from 'pinia';

const main = useMain()
// 解构main里面的state和getters的数据，
// 使用storeToRefs解构才有响应式，响应式可以直接修改数据，这里只用来渲染
let { counter,name ,doubleCount } = storeToRefs(main)

//（常用方法三种）
//常用方法一： 使用数据
console.log( counter );
//使用方法(方法目前不能解构)
main.increment()


//常用方法三：
//进阶使用$patch，多个修改
const amend=()=>{
  main.$patch((state) => {
      state.counter += 10;
      state.name = '张三'
  })
}
const info = ref<any>([])
onMounted(() => {
  userApi.getDict().then(res => {
    console.log('test info:', res)
    info.value = res.data
  });
})

</script>

<template>
  <div class="">user测试接口页面</div>
  <div>{{ info }}</div>
  <div>counter:{{counter}}</div>
  <div>doubleCount:{{doubleCount}}</div>
  <el-button @click="main.randomizeCounter()">counter(round)</el-button>
  <el-button type="primary" @click="main.increment()">counter++</el-button>

  <div>{{name}}</div>
  <el-button @click="amend()">修改</el-button>
</template>

<style lang="scss" scoped></style>
