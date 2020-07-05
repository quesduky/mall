<template>
		<!-- 商品列表子组件 -->
	<div class="goods-item">
		<img :src="goodsItem.show.img" @load="imgLoad">
		<div class="goods-info">
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span>{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "GoodsListItem",
		props:{
			goodsItem: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods:{
			imgLoad(){
				this.$bus.$emit('imgLoad')
			}
		}
	}
</script>

<style>
	.goods-item {
		width: 48%;
		padding-bottom:44px ;
		position: relative;
		margin: 2px;
	}
	.goods-item img {
		width: 100%;
		height: 100%;
	}
	.goods-info {
		font-size: 12px;
		position: absolute;
		bottom: 2px;
		left: 0px;
		right: 0px;
		/* 设置超出不显示,用...代替设置不换行 */
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.price{
		color: #FF0000;
	}
</style>
