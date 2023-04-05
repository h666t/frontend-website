<script setup lang="ts">
    // import { Swipe, SwipeItem } from 'vant';
    import { reactive } from 'vue';
    import { ref } from 'vue';
    import makeRequest from "../lib/index";

    const bannerImageList = reactive([
        // "https://s1.ax1x.com/2023/04/04/pp4eSCF.jpg",
        "https://s1.ax1x.com/2023/04/04/pp4Zx4U.jpg",
        "https://s1.ax1x.com/2023/04/04/pp4ep34.jpg"
    ])
  let msg = ref("");
  makeRequest('post/fn', {a: 1}).then((res)=>{
    console.log(res);
    msg.value = res.msg || '';
  })
</script>

<template>
    <van-nav-bar title="米奇妙妙屋" :fixed="true" :placeholder="true" :safe-area-inset-top="true">
        <template #right>
            <router-link to="/signin">
                <van-icon name="contact" />
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
    <div>
        {{ msg }}
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