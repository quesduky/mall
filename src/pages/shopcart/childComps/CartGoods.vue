<template>
	<div>
		<div class="cartGoods" v-for="item in goods" :key="item.id">
			<div class="wrap">
				<!-- 利用label的关联属性隐藏input 设置label样式 -->
				<input type="checkbox" id="choice" alt="Submit">
				<label for="choice"></label>
			</div>
			<div><img :src="item.img" alt="商品缩略图" class="goodsImg"></div>
			<div class="goodsInfo">
				<div class="goodsTitle">{{item.title}}</div>
				<div class="goodsPrice">￥{{item.price}}</div>
				<div class="buynum">
					<input type="button" value="-" class="btn">
					<input type="num" value="1">1
					<input type="button" value="+" class="btn">
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	
	export default{
		name: "CartGoods",
		data(){
			return {
				goods:this.$store.state.goodsList,
				// choice:require('../../../assets/img/cart/choice.png')
			}
		}
	}
</script>

<style scoped>
	label{
		display: inline-block;
		width: 16px;
		height: 16px;
		position: relative;
		border-radius: 16px;
		border: 1px solid #ccc;
		margin-top: 150%;
	}
	input[type="checkbox"]:checked + label::before {
		width: 100%;
		height: 100%;
		border-radius: 100%;
		position: absolute;
		line-height: 100%;
		text-align: center;
		content: "\2713";
	}
	input {
		position: absolute;
		clip: rect(0, 0, 0, 0);
	}
	.wrap{
		width: 20px;
		height: 100%;
	}
	#choice{
		/* display: none; */
	}
	.cartGoods{
		display: flex;
		padding: 5px;
		border-top:1px #ccc solid;
		border-bottom:1px #ccc solid;
	}
	.goodsInfo{
		width: 240px;
		padding: 12px;
	}
	.goodsImg{
		width: 80px;
		height: 80px;
	}
	.goodsTitle{
		height: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.goodsPrice{
		color: #FF0000;
	}
	.buynum{
		width: 80px;
		height: 40px;
		position: absolute;
		z-index: 8;
	}
	.btn{
		width: 30px;
		height: 30px;
		z-index: 9;
	}
</style>
