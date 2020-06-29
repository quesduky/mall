<template>
	<!-- 导航控制条组件 -->
	<div class="tab-control">
		<div v-for="(item,index) in controlTitles" 
				:key="index" 
				class="control-item"
				:class="{active: index === currenIndex}"
				@click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			controlTitles:{
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currenIndex:0
			}
		},
		methods:{
			// 改变当前点击按钮的下标值,
			itemClick(index){
				this.currenIndex = index;
				this.$emit('tabClick',index);
			}
			
		}
	}
	
</script>

<style>
	.tab-control{
		display: flex;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
		background-color: #FFF;
		z-index: 8;
	}
	.control-item{
		flex: 1;
	} 
	/* 活跃状态下div样式 */
	.active{
		color: #f00;
	}
	.active span {
		padding: 4px;
		border-bottom: 3px solid #f00;
	}
</style>
