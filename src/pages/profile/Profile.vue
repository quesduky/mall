<template>
	<div>
		<nav-bar>
			<div slot="center-bar">个人中心</div>
		</nav-bar>
		<file-info class="fileinfo"></file-info>
		<file-order></file-order>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	import FileInfo from './childComps/FileInfo.vue'
	import FileOrder from './childComps/FileOrder.vue'
	
	export default {
		name: "Prifile",
		components:{
			NavBar,
			FileInfo,
			FileOrder
		}
	}
</script>

<style scoped>
	.fileinfo{
		margin: 16px 0px;
	}
</style>
