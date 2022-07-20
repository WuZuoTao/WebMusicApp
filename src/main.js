import Vue from 'vue'
import App from './App.vue'
// 引入ElementUI组件库
import ElementUI  from 'element-ui'
import VueRouter from 'vue-router'
import router from './router/index'


// 引入全局样式
import '../src/style/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/index.scss'

// 引用插件
Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
