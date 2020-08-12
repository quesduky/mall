<template>
	<div class="bar">
		<div class="left-bar">
			<div>
				<i class="customer "></i>
				<p>客服</p>
			</div>
			<div>
				<i class="shop"></i>
				<p>店铺</p>
			</div>
			<div>
				<i class="collection"></i>
				<p>收藏</p>
			</div>
		</div>
		<div class="right-bar">
			<div class="R0">
				加入购物车
			</div>
			<div class="R1">
				购买
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"DetailBottomBar"
	}
</script>

<style scoped>
	p{
		font-size: 13px;
		height: 14px;
		margin:-8px 0;
	}
	.bar{
		height: 49px;
		background-color: #fff;
		position: fixed;
		text-align: center;
		line-height: 49px;
		display: flex;
		bottom:0;
		left: 0;
		right: 0;
	}
	.left-bar{
		flex: 1;
		display: flex;
	}
	.customer{
		display:block;
		width: 22px;
		height: 22px;
		background: url(../../../assets/img/detail/customer.png);
	}
	.shop{
		display: block;
		width: 22px;
		height: 22px;
		background-image: url(../../../assets/img/detail/shop.png);
	}
	.collection{
		display: block;
		width: 22px;
		height: 22px;
		background-image: url(../../../assets/img/detail/collection.png);
	}
	.right-bar{
		flex: 1;
		display: flex;
	}
	.left-bar>div{
		flex: 1;
	}
	.R0{
		background-color: #feaf00;
		flex:1;
	}
	.R1{
		background-color: #f65b09;
		flex:1;
	}
</style>
