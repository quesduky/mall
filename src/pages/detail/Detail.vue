<template>
	<div id="detail">
		<detail-nav-bar class="detail-navbar"/>
		<scroll class="container">
			<detail-banner :top-images="topImages"/>
			<detail-base-info :goods="goods" />
			<detail-shop-info :shop="shop" />
		</scroll>
	</div>
</template>

<script>
	import DetailNavBar from './childComps/DetailNavBar.vue'
	import DetailBanner from './childComps/DetailBanner.vue'
	import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
	import DetailShopInfo from './childComps/DetailShopInfo.vue'
	
	import Scroll from '../../components/common/scroll/BScroll.vue' 
	
	import {getDetail,Goods,Shop} from '../../network/detail.js'
	export default {
		name: "Detail",
		components:{
			DetailNavBar,
			DetailBanner,
			DetailBaseInfo,
			DetailShopInfo,
			Scroll
		},
		data(){
			return{
				iid:null,
				topImages:[],
				goods: {},
				shop:{}
			}
		},
		created() {
			//保存商品数据id
			this.iid = this.$route.params.id
			// 发送请求商品数据,根据id请求对应的商品数据
			getDetail(this.iid).then(res => {
				console.log(res.data.result)
				const data = res.data.result
				// 获取详情顶部图片
				this.topImages = data.itemInfo.topImages;
				// 获取商品信息
				this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
				// 获取商家信息
				this.shop = new Shop(data.shopInfo)
				
			}).catch(err =>{
				console.log(err)
			})

		}
	}
</script>

<style scoped>
	#detail{
		position: relative;
		z-index: 9;
		background-color: #fff;
		height: 100vh;
	}
	
	.container{
		height: calc(100% - 44px);
	}
	.detail-navbar{
		position: relative;
		z-index: 9;
		background-color: #fff;
	}
</style>
