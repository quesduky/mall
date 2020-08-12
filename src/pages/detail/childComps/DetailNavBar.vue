<template>
	<div class="detail">
		<nav-bar>
			<div slot="left-bar">
				<img class="back" @click="back" src="../../../assets/img/detail/back.png" alt="">
			</div>
			<div slot="center-bar" class="title">
				<div v-for="(item,index) in title" 
				:key="index" 
				class="title-item" 
				:class="{active: currentIndex === index}" @click="itemClick(index)">{{item}}</div>
			</div>	
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from '../../../components/common/navbar/NavBar.vue'
	
	export default {
		name: "DetailNavBar",
		components:{
			NavBar
		},
		data(){
			return {
				title:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex = index
				this.$emit('navBarClick',index)
			},
			back(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.title{
		display: flex;
		font-size: 12px;
	}
	.title-item{
		flex: 1;
	}
	.active{
		color:#f00;
	}
	.back{
		margin-top: 10px;
	}
</style>
