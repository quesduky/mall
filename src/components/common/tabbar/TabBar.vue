<template>
	<div id="tar-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBar'
	}
</script>

<style>
	#tar-bar{
		display: flex;
		text-align: center;
		background-color: #f6f6f6;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow:0px -1px 2px #f6f6f6;
	}
</style>
