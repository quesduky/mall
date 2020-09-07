<template>
	<div class="category">
		<nav-bar class="nav-bar">
			<div slot="center-bar">分类</div>
		</nav-bar>
		<left-item class="left-item"></left-item>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import LeftItem from './childComps/LeftItem.vue'
	
	export	default {
		name: "Categroy",
		components:{
			NavBar,
			LeftItem
		}
	}
</script>

<style scoped>
	.category{
		position: relative;
	}
	.nav-bar{
		width: 100%;
		position: fixed;
		margin-top: -44px;
		background-color:#f88;
		font-weight: 800;
		z-index: 9;
	}
</style>
