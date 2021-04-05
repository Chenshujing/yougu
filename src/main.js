// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import './assets/css/reset.css'


Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
/* eslint-disable no-new */

axios.defaults.baseURL = '/api'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
