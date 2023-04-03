<script setup lang="ts">
  import { ref } from 'vue';
  import Home from './components/home/Home.vue';
  import makeRequest from "./lib/index";
  console.log(1);
  let msg = ref("");
  makeRequest('post/fn', {a: 1}).then((res)=>{
    console.log(res);
    msg.value = res.msg || '';
  })
</script>

<template>
  <Home/>
  <div style="font-size: 18px;">前后端初始化完成，可以调用接口；</div>
  <div>2023-4-4 huang</div>
  <div>
    {{ msg }}
  </div>
</template>

<style scoped>

</style>
