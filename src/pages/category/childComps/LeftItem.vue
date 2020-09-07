<template>
	<div>
		<div class="left" >
			<div class="left-item" 
			v-for="(item,index) in leftData" 
			:key="index" 
			@click="itemClick(index)" :class="{active:index == currentIndex}"> {{item.name}} </div>
		</div>
	</div>
</template>

<script>
	import {getCategoryLeft} from '../../../network/category.js'
	export default{
		name:"LeftItem",
		data(){
			return {
				leftData:{},
				currentIndex:0
			}
		},
		created() {
			// 请求分类页面左侧数据
			getCategoryLeft().then(res => {
				this.leftData = JSON.parse(res.data);
				this.leftData = this.leftData.data.list
			}).catch(err => {
				console.log(err)
			})
		},
		methods:{
			itemClick(index){
				this.currentIndex = index;
			}
		}
		
	}
</script>

<style scoped>
	/* css3属性;隐藏了滚动条;有兼容问题;别乱用 */
	::-webkit-scrollbar {
		display: none;
	}
	.left{
		width: 100px;
		height: calc(100vh - 44px);
		background-color: #e4e4e4;
		position: relative;
		margin-top: 44px;
		overflow:scroll;
	}
	.left-item{
		height: 44px;
		line-height: 44px;
		text-align: center;
	}
	.active{
		background-color: #FFFFFF;
	}
</style>
