import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes'
import "bootstrap";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css"
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: routes,
  mode: 'history' // 
})

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
