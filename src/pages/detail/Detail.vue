<template>
	<div>
		<detail-nav-bar />
		<detail-banner :top-images="topImages"/>
	</div>
</template>

<script>
	import DetailNavBar from './childComps/DetailNavBar.vue'
	import DetailBanner from './childComps/DetailBanner.vue'
	
	import {getDetail} from '../../network/detail.js'
	export default {
		name: "Detail",
		components:{
			DetailNavBar,
			DetailBanner
		},
		data(){
			return{
				iid:null,
				topImages:[]
			}
		},
		created() {
			//保存商品数据id
			this.iid = this.$route.params.id
			// 发送请求商品数据,根据id请求对应的商品数据
			getDetail(this.iid).then(res => {
				this.topImages = res.data.result.itemInfo.topImages
				console.log(this.topImages)
				
			}).catch(err =>{
				console.log(err)
			})

		}
	}
</script>

<style>
</style>
