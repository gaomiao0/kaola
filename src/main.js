// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import "./assets/css/vip-public.css"
import "./assets/css/charge-public.css"
import "./assets/css/klVerseasFlagshipShop.css"
import '../static/css/common.css'
import 'swiper/dist/css/swiper.css'
import $ from 'jquery'


import axios from 'axios'
Vue.prototype.$http = axios


=======
import vuescroll from "vuescroll"
import 'vuescroll/dist/vuescroll.css'
import '../static/css/common.css'
import './assets/font/iconfont.css'
import '../node_modules/swiper/dist/css/swiper.css'
Vue.use(vuescroll)
Vue.config.productionTip = false
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
