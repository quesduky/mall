<template>
	<div class="shopcart">
		<nav-bar class="navbar">
			<div slot="center-bar">购物车({{goodsNum}})</div>
		</nav-bar>
		<no-goods v-if="goodsNum == 0"></no-goods>
		<cart-goods></cart-goods>
		
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	
	import CartGoods from './childComps/CartGoods.vue'
	import NoGoods from './childComps/NoGoods.vue'
	
	export default {
		name: "Shopcart",
		data(){
			return {

			}
		},
		computed:{
			goodsNum(){
				return this.$store.state.goodsNum
			}
		},
		components:{
			NavBar,
			CartGoods,
			NoGoods
		}
	}
</script>

<style scoped>
	.shopcart{
		height: 100%;
		width: 100%;
	}
	.navbar{
		background-color: #f88;
		font-weight: 800;
	}
</style>
