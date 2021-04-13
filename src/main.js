// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import {Tabs,TabPane,Alert,MessageBox,Select,Option,Icon,CheckboxGroup,Checkbox,Radio,RadioGroup,Pagination,Timeline,TimelineItem,Message,Upload,Dialog,Button,DatePicker,Steps,Step,Dropdown,DropdownMenu,DropdownItem} from 'element-ui'
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
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(DatePicker)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
/* eslint-disable no-new */

axios.defaults.baseURL = 'https://gesapi.iyougu.com/'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
