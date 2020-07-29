<template>
	<div>
		<div class="shop">
			<img class="clogo" :src="shop.clogo" alt="">
			<span class="cname">{{shop.cname}}</span>
		</div>
		<div class="shop-info">
			<div class="shop-info-left">
				<span>总销量:{{shop.cfans}}万</span><br >
				<span><br /></span>
				<span>全部宝贝:{{shop.cGoods}}</span>
			</div>
			<div class="shop-info-right">
				<tr v-for="(item,index) in shop.cscore" :key="index">
					<td>{{item.name}}:</td>
					<td :class="{avtive:item.isBetter}" class="default">{{item.score}}</td>
					<td :class="{avtive:item.isBetter}" class="default">{{item.isBetter?'高':'低'}}</td>
				</tr>
			</div>
		</div>
		<div></div>
		<ul>
			<li>00</li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		
	</div>
</template>

<script>
	export default{
		name:"DetailShopInfo",
		props:{
			shop:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.shop{
		height:80px ;
		border-top: 1px solid #ccc;
		position: relative;
	}
	.clogo{
		width: 80px;
		height: 80px;
		margin-top: 12px;
		margin-left: 12px;
	}
	.cname{
		position: absolute;
		top: 50%;
		left: 30%;
		font-weight: 600;
	}
	
	.shop-info{
		height: 120px;
		margin-top: 12px;
		display: flex;
	}
	.shop-info-left{
		flex: 1;
		margin-left: 12px;
		font-weight: 600;
	}
	.shop-info-right{
		flex: 1;
	}
	.shop-info-right tr td{
		padding: 0 8px;
	}
	.default{
		color: #42B983;
	}
	.avtive{
		color: #FF0000;
	}
</style>
