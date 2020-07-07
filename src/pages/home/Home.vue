<template>
	<div id="home">
		<!-- 导航 -->
		<nav-bar class="home-nav">
			<div slot="center-bar">购物街</div>
		</nav-bar>
		<!-- 导航条 -->
		<scroll class="content" ref="scroll" :probeType="3" @scroll="hscroll" :pullUpLoad="true" @pullingUp="loadMore">
			<!-- 轮播 -->
			<swiper></swiper>
			<!-- 展示推荐位 -->
			<recomment-view :recomments="recomments"/>
			<!-- 图片展示位 -->
			<feature />
			<!-- 导航控制条 -->
			<tab-control :controlTitles="['爆款','精品','新款']" class="tab-control" 
			@tabClick="tabClick" 
			ref="tabControl"/>
			<goods-list :goods="showGoods"></goods-list>
		</scroll>
			<!-- 返回顶部组件-->
			<!-- 监听组件的原生点击事件，必须添加.native属性 -->
		<back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
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
	import BackTop from '../../components/content/backTop/BackTop.vue'
	// 导入封装的scroll组件
	import Scroll from '../../components/common/scroll/BScroll.vue'
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
			GoodsList,
			Scroll,
			BackTop
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
				currentType: 'pop',
				isShowBackTop:false
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
		mounted() {
			// 1.图片加载完成的事件监听
			const refresh = this.debounce(this.$refs.scroll.refresh,100)
			// 利用事件总线,goodslistitem中发送事件,home中监听,监听到事件后拿到scroll对象,执行refresh,进行实时刷新可滚动区域的高度
			this.$bus.$on('imgLoad',() =>{
				refresh()
			})
			// 2.获取tabContral的offsetTop
			console.log(this.$refs.tabControl.$el.offsetTop)
		},
		methods:{
			// 防抖函数,用于控制refresh请求次数
			debounce(func,delay){
				let timer = null
				return function(...args){
					if(timer) clearTimeout(timer)
					timer = setTimeout(() => {
						func.apply(this,args)
					},delay)
				}
			},
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
			// 监听处理子组件的自定义事件
			hscroll(position) {
				// 设置显示隐藏返回顶部按钮
				this.isShowBackTop = (-position.y) > 600
			},
			// 上拉加载更多商品
			loadMore() {
				this.getHomeGoods(this.currentType)
				
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
					this.goods[type].page += 1
					
					this.$refs.scroll.scroll.finishPullUp()
				}).catch(err =>{
					console.log(err)
				})
			},
			// 返回顶部按钮点击事件
			backTop(){
				// 通过给元素添加ref属性,可以获取到该组件内元素,通过访问scroll的scrollTo的方法实现返回顶部的功能
				// this.$refs.scroll.scroll.scrollTo(0,0,1000)
				// 或者通过调用在scroll中定义好的方法直接返回顶部
				this.$refs.scroll.scrollTo(0,0)
			}
		}
	}
</script>

<style scoped>
	#home{
		width: 100%;
		/* 顶部导航使用fixed.设置内距将内容顶下来 */
		padding-top: 44px;
		height: 100vh;
		position: relative;
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
	
	.tab-control{
		/* 设置tab-control吸顶 失效*/
		/* position: sticky;
		top: 44px; */
	}
	.content{
		overflow: hidden;
		/* 利用定位确定除了顶部底部 的中间元素的位置 */
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
</style>
