<script setup lang="ts">
    // import { Swipe, SwipeItem } from 'vant';
    import { reactive } from 'vue';
    const bannerImageList = reactive([
        // "https://s1.ax1x.com/2023/04/04/pp4eSCF.jpg",
        "https://s1.ax1x.com/2023/04/04/pp4Zx4U.jpg",
        "https://s1.ax1x.com/2023/04/04/pp4ep34.jpg"
    ])
</script>

<template>
    <van-sticky>
        <div class="navBar">navBar</div>
    </van-sticky>
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
        <van-swipe-item v-for="item in bannerImageList" :key="item">
            <img class="bannerImage" :src="item" />
        </van-swipe-item>
    </van-swipe>
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