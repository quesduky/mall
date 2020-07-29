<template>
	<div>
		<div>{{detailInfo.desc}}</div>
		<!-- detailInfo.detailImage为空，则不加载该div -->
		<div class="img-list" v-if="detailInfo.detailImage">
			<img  v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgLoad">
		</div>
	</div>
</template>

<script>
	export default{
		name: "DetailGoodsInfo",
		data(){
			return {
				count:0,
				imgLength:0
			}
		},
		props:{
			detailInfo:{
				type: Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			imgLoad(){
				// 监听图片加载,发送事件,解决scroll在图片没加载完成不能拖动的情况
				if(++this.count == this.imgLength){
					this.$emit('imgLoad')
				}
			}
		},
		watch:{
			detailInfo(){
				this.imgLength =this.detailInfo.detailImage[0].list.length
			}
		}
	}
</script>

<style scoped>
	.img-list img{
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
