<template>
	<div>
		<div class="cartGoods" v-for="item in goods" :key="item.id">
			<div><img :src="item.img" alt="商品缩略图" class="goodsImg"></div>
			<div class="goodsInfo">
				<div class="goodsTitle">{{item.title}}</div>
				<div>￥{{item.price}}</div>
			</div>
		</div>
	</div>
</template>
<script>
	
	export default{
		name: "CartGoods",
		data(){
			return {
				goods:this.$store.state.goodsList
			}
		}
	}
</script>

<style scoped>
	.cartGoods{
		width: 100%;
		height: 100px;
		display: flex;
		border-top:1px #ccc solid;
		border-bottom:1px #ccc solid;
	}
	.goodsInfo{
		width: 78%;
	}
	.goodsImg{
		width: 80px;
		height: 80px;
	}
	.goodsTitle{
		height: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
