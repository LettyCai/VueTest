<template>
  <div class="app-container">
    

    <mt-header fixed title="Vue项目"></mt-header>

 <!--中间栏><-->
 <transition>
	<router-view></router-view>
 </transition>


<!--tabbar><-->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-tmp" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-tmp" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-tmp" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-tmp" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.app-container{
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}

.v-enter,
.v-leave-active{
	opacity:0;
	transform:translateX(100%);
}

.v-leave,
.v-enter-active{
	transition:all 0.5s ease;
}

.mui-bar-tab .mui-tab-item-tmp .mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-tmp {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-tmp .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tmp .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>
