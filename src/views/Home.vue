<script setup lang="ts">
    // import { Swipe, SwipeItem } from 'vant';
    import { ref, reactive, nextTick } from 'vue';
    import makeRequest from "../lib/index";
    import {Account} from "../custom"

    const bannerImageList = reactive([
        "https://img1.imgtp.com/2023/08/19/TrS5u1VV.jpg"
    ]);
  let msg = ref("");
  let refresh = ref(0);
  let account = reactive<Account>({
    id: "@",
    name: "@",
    password: "@",
    create_at: "@",
    update_at: "@",
    is_removed: null
  });
  makeRequest('fn', {a: 1}).then((res)=>{
    console.log(res);
    msg.value = res.msg || '';
  });
  setTimeout(()=>{
    makeRequest('get/getIsLogin').then((res)=>{
        account = res;
        refresh.value += 1;
    });
  }, 500);
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
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
        <van-swipe-item v-for="item in bannerImageList" :key="item">
            <img class="bannerImage" :src="item" />
        </van-swipe-item>
    </van-swipe>

    <div style="font-size: 18px;">前后端初始化完成，可以调用接口；</div>
    <div>2023-4-4 huang</div>
    <div>{{ msg }}</div>
    <div style="opacity: 0;">
        {{ refresh }}
    </div>
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
        height: 250px;
        width: 100vw;
    }
    .bannerImage{
        width: 100vw;
    }
</style>