<script setup lang="ts">
    import { useRouter } from "vue-router"
    import { reactive, ref } from "vue";
    import makeRequest from "../lib/index";
    import encrypt_lib from "../lib/encrypt"
    const router = useRouter()
    const onClickLeft = () => {
        router.push('/');
    }
    const signupData = reactive({
        username: '',
        password: '',
        confirmPassword: ''
    })
    const onSubmit = (values: {username: string, password: string, confirmPassword: string}) => {
        let {username, password, confirmPassword} = values;
        if(username && password && confirmPassword && password === confirmPassword){
            console.log('success');
            let encrypt_password = encrypt_lib.encrypt(`${password}`);
            if(encrypt_password){
                makeRequest("signup", {
                    username,
                    password: encrypt_password
                }).then(()=>{
                    alert("注册成功")
                    // router.push('/signin');
                })
            } else {
                alert("加密出错")
            }
        }
    };
</script>
<template>
    <van-nav-bar @click-left="onClickLeft" title="要不注册一下吧" left-text="返回" left-arrow>
    
    </van-nav-bar>

    <van-form @submit="onSubmit" style="margin-top: 20px;">
        <van-cell-group inset>
            <van-field
            v-model="signupData.username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
            v-model="signupData.password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
            v-model="signupData.confirmPassword"
            type="password"
            name="confirmPassword"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请确认密码' }]"
            />
        </van-cell-group>
        <div style="margin: 32px 16px 16px 16px;">
            <van-button round block type="primary" native-type="submit">
            注册
            </van-button>
        </div>
    </van-form>

</template>