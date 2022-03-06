import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav';
import Carsousel from '@/components/Carsousel'  
import Pagination from '@/components/Pagination' 
import {Button,MessageBox} from 'element-ui' 
Vue.component(TypeNav.name,TypeNav) //全局组件
Vue.component(Carsousel.name,Carsousel) //全局组件
Vue.component(Pagination.name,Pagination) //全局组件
Vue.component(Button.name,Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import router from '@/router'
import store from '@/store'
import * as API from '@/api'
import VueLazyload from 'vue-lazyload'
import cc from '@/assets/images/1.gif'
import '@/plugins/validate'
import '@/mock/mockServe'
import "swiper/css/swiper.css"
Vue.use(VueLazyload,{
  loading:cc
})
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
    Vue.prototype.$API=API
  },
  router,
  store
}).$mount('#app')


