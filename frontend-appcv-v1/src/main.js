import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import './axios'

import App from './App.vue'

Vue.use(VueRouter)
 
Vue.config.productionTip = false
 
const router = new VueRouter({ mode: 'history', routes: routes })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
