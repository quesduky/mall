<template>
	<div id="home">
		<!-- 导航 -->
		<nav-bar class="home-nav">
			<div slot="center-bar">购物街</div>
		</nav-bar>
		<!-- 轮播 -->
		<swiper></swiper>
		<!-- 展示推荐位 -->
		<recomment-view :recomments="recomments"/>
		
		<!-- 图片展示位 -->
		<feature />
		
		
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import Swiper from '../../components/common/swiper/Swiper.vue'
	import RecommentView from './childComps/RecommentView.vue'
	import Feature from './childComps/Feature.vue'
	
	// 导入封装的首页网络请求
	import {getHomeData} from '../../network/home.js'
	export default {
		name: "Home",
		components: {
			NavBar,
			Swiper,
			RecommentView,
			Feature
		},
		data() {
			return {
				banners: [],
				recomments: []
				
			} 
		},
		created() {
			getHomeData().then(res =>{
				// console.log(res.data.data.banner)
				this.banners = res.data.data.banner,
				this.recomments =res.data.data.recommend.list
				console.log(res.data.data.recommend.list)
			}).catch(err =>{
				console.log(err)
			})
		}
	}
</script>

<style>
	#home{
		/* 顶部导航使用fixed.设置内距将内容顶下来 */
		padding-top: 44px;
	}
	.home-nav {
		background-color: aliceblue;
		color: #000;
		/* 使用fixed固定navbar */
		position: fixed;
		top:0;
		left: 0;
		right: 0;
		z-index:12;
	}
</style>
