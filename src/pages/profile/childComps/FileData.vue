<template>
	<div>
		<div class="container">
			<div class="balance public">
				<span>0.00</span>
				<span>余额</span>
			</div>
			<div class="integral public">
				<span>0</span>
				<span>积分</span>
			</div>
			<div class="card public">
				<span>0</span>
				<span>会员卡</span>
			</div>
			<div class="coupon public">
				<span>0</span>
				<span>优惠券</span>
			</div>
		</div>
	</div>
</template>

<script>
	export	default{
		name: "FileData"
	}
</script>

<style scoped>
	.container{
		width: 92%;
		height: 60px;
		margin: 0 auto;
		background-color: #fff;
		display: flex;
		display: -webkit-flex;
		
	}
	.public{
		flex: 1;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;/* 项目排列方向 */
		align-self:center;
		width: 60px;
	}
	span{
		align-self:center;
	}
	.balance .{
		
	}
</style>
