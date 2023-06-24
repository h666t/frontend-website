<script setup lang="ts">
    import { useRouter } from "vue-router"
    import { ref } from "vue";
    import makeRequest from "../lib/index";
    import encrypt_lib from "../lib/encrypt";
    import { showSuccessToast, showFailToast } from 'vant';




    const router = useRouter()
    const onClickLeft = () => {
        router.push('/');
    }
    const username = ref('');
    const password = ref('');
    const onSubmit = (values: {username: string, password: string}) => {
            let {username, password} = values;
            let encrypt_password = encrypt_lib.encrypt(`${password}`);
            if(encrypt_password){
                makeRequest("signin", {
                    username,
                    password: encrypt_password
                }).then(()=>{
                    showSuccessToast("登录成功");
                    router.push('/');
                }, (error) => {
                    showFailToast(error.message);
                });
            } else {
                alert("加密出错")
            }
    };

</script>
<template>
    <van-nav-bar @click-left="onClickLeft" title="要登录？" left-text="返回" left-arrow>
    
    </van-nav-bar>

    <van-form @submit="onSubmit" style="margin-top: 20px;">
        <van-cell-group inset>
            <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
            />
        </van-cell-group>
        <div style="margin: 16px 16px 16px 16px;">
            <div style="display: flex;justify-content: space-between;margin-bottom: 16px;">
                <div></div>
                <div class="van-haptics-feedback" style="color: blue;font-size: 14px;width: 50px;text-align: center;">
                    <router-link to="/signup" >
                        注册
                    </router-link>
                </div>
            </div>
            <van-button round block type="primary" native-type="submit">
                登录
            </van-button>
        </div>
    </van-form>

</template>