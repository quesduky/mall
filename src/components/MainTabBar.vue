<template>
	<tab-bar>
		<tab-bar-item path="/home" activeColor="blue">
			<img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="">
			<img slot="item-icon-active" src="../assets/img/tabbar/home-active.svg" alt="">
			<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/category">
			<img slot="item-icon" src="../assets/img/tabbar/category.svg" alt="">
			<img slot="item-icon-active" src="../assets/img/tabbar/category-active.svg" alt="">
			<div slot="item-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/shopcart">
			<img slot="item-icon" src="../assets/img/tabbar/shopcart.svg" alt="">
			<img slot="item-icon-active" src="../assets/img/tabbar/shopcart-active.svg" alt="">
			<div slot="item-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/profile">
			<img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt="">
			<img slot="item-icon-active" src="../assets/img/tabbar/profile-active.svg" alt="">
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	// 导入
	import TabBar from './common/tabbar/TabBar.vue'
	import TabBarItem from './common/tabbar/TabBarItem.vue'
	export default {
		name:"MainTabBar",
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
