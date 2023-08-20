<script setup lang="ts">
    // import { Swipe, SwipeItem } from 'vant';
    import { ref, reactive, nextTick } from 'vue';
    import makeRequest from "../lib/index";
    import {Account} from "../custom"
    import ProjectList from "../components/ProjectList.vue";
    const bannerImageList = reactive([
        "https://img1.imgtp.com/2023/08/19/TrS5u1VV.jpg",
        "https://img1.imgtp.com/2023/08/19/TrS5u1VV.jpg",
    ]);
  let msg = ref("");
  let refresh = ref(0);
  let account = ref<Account>({
    id: "@",
    name: "@",
    password: "@",
    create_at: "@",
    update_at: "@",
    is_removed: null
  });
  makeRequest('fn', {a: 1}).then((res)=>{
    msg.value = res.msg || '';
  });
  
  makeRequest('get/getIsLogin').then((res)=>{
        account.value = res;
    });
</script>

<template>
    <van-nav-bar title="米奇妙妙屋" :fixed="true" :placeholder="true" :safe-area-inset-top="true">
        <template v-if="account.id === '@'" #right>
            <router-link to="/signin">
                <span>登录/注册</span>
            </router-link>
        </template>
        <template v-else #right>
            <router-link to="/mine">
                <span>你好, {{ account.name }}</span>
            </router-link>
        </template>
    </van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white" >
        <van-swipe-item v-for="item in bannerImageList" :key="item">
            <div style="display: flex;justify-content: center;">
                <img class="bannerImage" :src="item" />
            </div>
        </van-swipe-item>
    </van-swipe>
    <div style="position: fixed;bottom: 10px; right: 10px; opacity: 0.5;">{{ msg }}</div>
    <ProjectList />
</template>

<style scoped>
    .navBar{
        width: 100vw;
        height: 40px;
        background-color: grey;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .my-swipe{
        height: 200px;
        width: 100vw;
    }
    .bannerDiv{
        width: 100vw;
        height: 200px;
    }
    .bannerImage{
        width: 200px;
        height: 200px;
    }
</style>