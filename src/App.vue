<script lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import customRequest from "./lib/index";
export default {
  setup() {
    console.log(1);
    let msg = ref("");
    customRequest('post/fn', {a: 1}).then((res)=>{
      console.log(res);
      msg.value = res.msg || '';
    })
    return {
      msg
    }
  }
}
</script>

<template>
  <div style="font-size: 18px;">前后端初始化完成，可以调用接口；</div>
  <div>2023-3-8 huang</div>
  <div>
    {{ msg }}
  </div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
