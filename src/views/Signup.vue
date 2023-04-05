<script setup lang="ts">
    import { useRouter } from "vue-router"
    import { ref } from "vue";
    const router = useRouter()
    const onClickLeft = () => {
        router.push('/');
    }
    const username = ref('');
    const password = ref('');
    const onSubmit = (values: {username: string, password: string, confirmPassword: string}) => {
      console.log('submit', values);
    };

</script>
<template>
    <van-nav-bar @click-left="onClickLeft" title="要不注册一下吧" left-text="返回" left-arrow>
    
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
            <van-field
            v-model="password"
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