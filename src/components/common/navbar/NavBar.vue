<template>
	<div class="navbar">
		<div class="left"><slot name="left-bar"></slot></div>
		<div class="center"><slot name="center-bar"></slot></div>
		<div class="right"><slot name="right-bar"></slot></div>
	</div>
</template>

<script>
	export default {
		name: 'NavBar'
	} 
</script>

<style scoped>
	.navbar {
		display: flex;
		height: 44px;
		text-align: center;
		line-height: 44px;
		box-shadow: 0px 1px rgba(100,100,100,.2);
	}
	.left,.right {
		width: 60px;
	}
	.center {
		flex: 1;
	}
</style>
