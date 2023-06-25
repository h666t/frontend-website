import Home from "./views/Home.vue";
import Signin from "./views/Signin.vue";
import Signup from "./views/Signup.vue";
import Mine from "./views/Mine.vue";
import * as VueRouter from 'vue-router'
const routes = [
    { path: '/', component: Home },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
    { path: '/mine', component: Mine },
];

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  });

export default router