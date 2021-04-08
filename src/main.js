// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import {Tabs,TabPane,Alert,MessageBox,Select,Option,Icon,CheckboxGroup,Checkbox,Radio,RadioGroup,Pagination,Timeline,TimelineItem} from 'element-ui'
import './assets/css/reset.css'
import './assets/css/comment.css'
Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Select)
Vue.use(Option)
Vue.use(Icon)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Pagination)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
/* eslint-disable no-new */

axios.defaults.baseURL = '/api'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
