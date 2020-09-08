<template>
  <div id="app">
		<!-- keep-alive保持页面不被销毁，从而记录用户离开首页时候的状态 -->
		<keep-alive exclude="Detail">
			<router-view></router-view>
		</keep-alive>
		
		<main-tab-bar></main-tab-bar>
	</div>
</template>

<script>
// 导入MianTabbar
import	MainTabBar from './components/MainTabBar.vue'
export default {
  name: 'App',
	components:{
		MainTabBar
	},
	//数据持久化，保持购物车页面商品数量不会在刷新以后更改
	created(){
		//在页面加载时读取sessionStorage里的状态信息
		if (sessionStorage.getItem("store") ) {
			this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
		} 
		//在页面刷新时将vuex里的信息保存到sessionStorage里
		window.addEventListener("beforeunload",()=>{
			sessionStorage.setItem("store",JSON.stringify(this.$store.state))
		})
	}
}
</script>

<style>
	@import url("assets/css/base.css");
</style>