<template>
	<div>
		<nav-bar class="navbar">
			<div slot="center-bar">购物车({{goodsNum}})</div>
		</nav-bar>
		{{this.$store.state.goodsList}}
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	
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
			NavBar
		}
	}
</script>

<style scoped>
	.navbar{
		background-color: #f88;
		font-weight: 800;
	}
</style>
