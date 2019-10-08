import Vue from 'vue'
import App from './App.vue'
//VueRouterをimport
import router from './router'

Vue.config.productionTip = false

new Vue({
  //VueRouterをVueインスタンスに登録
  router,
  render: h => h(App),
}).$mount('#app')
