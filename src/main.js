// 入口文件
import Vue from 'vue'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//1。1导入路由包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//1.3导入路由模块
import router from './router.js'

import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function(datestr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(datestr).format(pattern)
})


import { Header,Swipe, SwipeItem,Button } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

//2.1导入vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)

//导入mui scroll 控件
import  mui from './lib/mui/js/mui.js'
//初始化scroll控件
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});


import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router  //1.4挂载路由对象
  })