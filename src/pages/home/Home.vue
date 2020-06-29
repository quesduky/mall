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
		
		<!-- 导航控制条 -->
		<tab-control :controlTitles="['爆款','精品','新款']" class="tab-control" @tabClick="tabClick"/>
		<goods-list :goods="showGoods"></goods-list>
		<ul>
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
	// 导入当前文件夹下子组件
	import RecommentView from './childComps/RecommentView.vue'
	import Feature from './childComps/Feature.vue'
	
	// 导入component中的组件
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import Swiper from '../../components/common/swiper/Swiper.vue'
	import TabControl from '../../components/content/tabcontrol/TabControl.vue'
	import GoodsList from '../../components/content/home/GoodsList.vue'
	// 导入封装的首页网络请求
	import {getHomeData,getHomeGoods} from '../../network/home.js'
	export default {
		name: "Home",
		components: {
			RecommentView,
			Feature,
			NavBar,
			Swiper,
			TabControl,
			GoodsList
		},
		data() {
			return {
				// 轮播图数据
				banners: [],
				// 推荐icon
				recomments: [],
				// 商品数据
				goods: {
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]}
				},
				currentType: 'pop'
			} 
		},
		// 计算属性
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		created() {
			// 请求首页的banner和推荐位数据
			this.getHomeData(),
			// 请求商品数据
			this.getHomeGoods('pop'),
			this.getHomeGoods('new'),
			this.getHomeGoods('sell')
		},
		methods:{
			// 事件监听相关
			tabClick(index){
				switch(index){
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'sell'
						break
					case 2:
						this.currentType = 'new'
						break
				}
					
			},
			// 将请求数据处理的具体方法,created中只写主要的处理逻辑
			// 请求首页的banner和推荐位数据
			getHomeData() {
				getHomeData().then(res =>{
					// console.log(res.data.data.banner)
					this.banners = res.data.data.banner,
					this.recomments =res.data.data.recommend.list
				}).catch(err =>{
					console.log(err)
				})
			},
			// 请求商品数据
			getHomeGoods(type) {
				// 取到当前type下page数据+1
				const page = this.goods[type].page + 1
				getHomeGoods(type,page).then(res =>{
					// 将获取的数据追加到list数组中
					// ... es6新语法 将对象字面量展开为多个元素 相当于concat
					this.goods[type].list.push(...res.data.data.list)
				}).catch(err =>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	#home{
		width: 100%;
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
	/* 设置tab-control吸顶 */
	.tab-control{
		position: sticky;
		top: 44px;
	}
</style>
