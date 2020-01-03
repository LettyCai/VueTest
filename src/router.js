import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path:'/home',component:HomeContainer},
    { path:'/shopcar',component:ShopcarContainer},
    { path:'/search',component:SearchContainer},
    { path:'/Member',component:MemberContainer},
  ],
  linkActiveClass:'mui-active'  //覆盖默认的路由高亮类 router-link-active
})

// 把路由对象暴露出去
export default router