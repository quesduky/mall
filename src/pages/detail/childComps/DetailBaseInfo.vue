<template>
	<div>
		<div class="title">{{goods.title}}</div>
		<div>
			<span class="n-price">￥{{goods.lealPrice}}</span>
			<span class="o-price">{{goods.oldPrice}}</span>
			<span class="discount">{{goods.discount}}</span>
		</div>
		<div class="columns" v-for="(item,index) in goods.columns" :key="index">{{item}}</div>
	</div>
</template>

<script>
	export default {
			name:"DetailBaseInfo",
			props:{
				goods:{
					type: Object,
					default(){
						return {}
					}
				}
			}
	}
</script>

<style scoped>
	.title{
		margin: 8px;
	}
	.n-price{
		color: #f00;
		font-size: 20px;
		margin-left: 8px;
	}
	.o-price{
		color: #505050;
		text-decoration:line-through;
		margin-left: 12px;
	}
	.discount{
		width: 36px;
		height: 10px;
		color: #fff;
		font-size: 14px;
		background-color: #f00;
		margin-left: 12px;
		border-radius: 4px;
	}
	.columns{
		color: #505050;
		font-size: 14px;
		float: left;
		margin: 0 36px;

	}
</style>
