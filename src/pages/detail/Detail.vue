<template>
	<div>
		<detail-nav-bar />
		<detail-banner :top-images="topImages"/>
		<detail-base-info :goods="goods" />
	</div>
</template>

<script>
	import DetailNavBar from './childComps/DetailNavBar.vue'
	import DetailBanner from './childComps/DetailBanner.vue'
	import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
	
	import {getDetail,Goods} from '../../network/detail.js'
	export default {
		name: "Detail",
		components:{
			DetailNavBar,
			DetailBanner,
			DetailBaseInfo
		},
		data(){
			return{
				iid:null,
				topImages:[],
				goods: {}
			}
		},
		created() {
			//保存商品数据id
			this.iid = this.$route.params.id
			// 发送请求商品数据,根据id请求对应的商品数据
			getDetail(this.iid).then(res => {
				console.log(res.data.result)
				const data = res.data.result
				this.topImages = data.itemInfo.topImages;
				this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
				
			}).catch(err =>{
				console.log(err)
			})

		}
	}
</script>

<style>
</style>
