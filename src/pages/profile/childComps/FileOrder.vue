<template>
	<!-- 我的里面我的订单模块 -->
	<div>
		<div class="container">
			<div class="top">
				<span class="myorder">我的订单</span>
				<span class="whole">全部></span>
			</div>
			<div class="bottom">
				<div v-for="item in myordericon"
				:key="item.text" class="bottomitem">
					<img :src="item.icon" alt="">
					<span class="text">{{item.text}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "FileOrder",
		data(){
			return{
				myordericon:[
					{
						icon: require('../../../assets/img/profile/tobepaid.svg'),
						text: "待付款"
					},
					{
						icon: require('../../../assets/img/profile/tobedelivered.svg'),
						text: "待发货"
					},
					{
						icon: require('../../../assets/img/profile/tobereceived.svg'),
						text: "待收货"
					},
					{
						icon: require('../../../assets/img/profile/tobeevaluated.svg'),
						text: "评价"
					},
					{
						icon: require('../../../assets/img/profile/aftersale.svg'),
						text: "售后"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 92%;
		height: 120px;
		margin: 8px auto;
		background-color: #ffff;
	}
	.top{
		height: 40px;
		display: flex;
		line-height: 40px;
		justify-content: space-between;	
		border-bottom: 1px #d1d1d1 solid;
		margin-bottom: 4px;
	}
	.myorder{
		font-weight: 600;
		margin-left: 8px;
	}
	.whole{
		font-size: 12px;
		color: #a0a0a0;
	}
	.bottom{
		height: 78px;
		display: flex;
		display: -webkit-flex;
		padding: 16px;
		/* background-color: #42B983; */
	}
	.bottomitem{
		height: 60px;
		flex: 1;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;/* 项目排列方向 */
		
	}
	.bottom img{
		width: 40px;
		height: 40px;
		align-self:center;
	}
	.text{
		align-self: center;
	}
</style>
