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
	}
}
</script>

<style>
	@import url("assets/css/base.css");
</style>