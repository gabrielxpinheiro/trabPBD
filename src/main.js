import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes'
import "bootstrap";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css"

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: routes,
  mode: 'history' // 
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
