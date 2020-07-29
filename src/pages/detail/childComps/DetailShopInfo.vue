<template>
	<div>
		<div class="shop">
			<img class="clogo" :src="shop.clogo" alt="">
			<span class="cname">{{shop.cname}}</span>
		</div>
		<div class="shop-info">
			<div>
				<span>{{shop.cfans}}总销量</span>
				<span>{{shop.cGoods}}全部宝贝</span>
			</div>
			<div>
				<tr v-for="(item,index) in shop.cscore" :key="index">
					<td>{{item.name}}</td>
					<td>{{item.score}}</td>
					<td></td>
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
	}
</style>
