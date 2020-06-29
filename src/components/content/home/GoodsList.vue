<template>
	<!-- 商品列表组件 -->
	<div class="goods">
		<goods-list-item v-for="(item,index) in goods" :goodsItem="item" :key="index"/>
		<ul>
			<li>商品1</li>
			<li>商品1</li>
			<li>商品1</li>
			<li>商品1</li>
			<li>商品1</li>
			<li>商品1</li>
			<li>商品1</li>
			<li>商品1</li>
			<li>商品1</li>
			<li>商品1</li>
		</ul>
		
	</div>
</template>

<script>
	import GoodsListItem from './GoosListItem.vue'
	export default{
		name: "GoodsList",
		components: {
			GoodsListItem
		},
		props:{
			goods: {
				type: Array,
				default() {
					return []
				}
			}
		}
	} 
</script>

<style>
	.goods {
		display: flex;
		flex-wrap: wrap;
		padding-left: 4px;
	}
</style>
