import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import './assets/normalize.css'
// 引入ElementUI组件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components:{
       
    },
  render: h => h(App)
}).$mount('#app')
