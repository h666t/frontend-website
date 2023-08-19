<script setup lang="ts">
    import { ref, nextTick } from 'vue';
    import makeRequest from "../lib/index";
    import {Account} from "../custom"
    import { useRouter } from 'vue-router';

    const router = useRouter();
    let account = ref<Account>({
        id: "@",
        name: "@",
        password: "@",
        create_at: "@",
        update_at: "@",
        is_removed: null
    });
    setTimeout(()=>{
        makeRequest('get/getIsLogin').then((res)=>{
            account.value = res;
        });
    }, 500);
    const signout = () => {
        makeRequest('get/signout').then((res)=>{
            router.push("/");
        });
    };
</script>

<template>
    
    <div v-if="account.id !== '@'" 
    style="display: flex;align-items: center;flex-direction: column;">
        <van-icon style="margin-top: 40px;" name="contact" />
        <div style="margin-top: 20px;">你好，{{ account.name }}</div>
        <van-button style="margin-top: 20px;" @click="signout">退出登录</van-button>
    </div>
    <router-link v-else to="/signin">
        <div style="text-align: center;margin-top: 40px;">请先登录</div>
    </router-link>
</template>

<style scoped>
    
</style>