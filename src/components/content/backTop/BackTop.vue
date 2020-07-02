<template>
	<!-- 返回顶部按钮组件 -->
	<div class="back-top">
		<img src="../../../assets/img/backtop.png">
	</div>
</template>

<script>
	export default {
		name: 'BackTop'
	}
</script>

<style>
	.back-top{
		position: fixed;
		right: 6px;
		bottom: 52px;
	}
	.back-top img{
		width: 48px;
		height: 48px;
	}
</style>
