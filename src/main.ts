import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 1. 引入你需要的组件
import vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)
app.use(vant)
app.mount('#app')