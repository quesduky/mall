<template>
	<div class="profile">
		<nav-bar>
			<div slot="center-bar">个人中心</div>
		</nav-bar>
		<file-info class="fileinfo"></file-info>
		<file-data></file-data>
		<file-order></file-order>
		<button @click="totototo"></button>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	
	import FileInfo from './childComps/FileInfo.vue'
	import FileData from './childComps/FileData.vue'
	import FileOrder from './childComps/FileOrder.vue'
	
	export default {
		name: "Prifile",
		components:{
			NavBar,
			FileInfo,
			FileOrder,
			FileData
		},
		methods:{
			totototo(){
				console.log(this.$store)
			}
		}
	}
</script>

<style scoped>
	.profile{
		background-color: #f8f8f8;
	}
	.fileinfo{
		margin: 16px 0px;
	}
</style>
