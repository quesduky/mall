<template>
	<!-- 我的里面我的订单模块 -->
	<div>
		<div class="fileorder">
			<div class="top">
				<span>我的订单</span>
				<span>全部></span>
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
	.fileorder{
		width: 100%;
		height: 120px;
		background-color: #f8f8f8;
		margin: 16px;
	}
	.top{
		width: 92%;
		height: 40px;
		display: flex;
		line-height: 40px;
		justify-content: space-between;	
		border-bottom: 1px #d1d1d1 solid;
		margin-bottom: 4px;
	}
	.bottom{
		width: 100%;
		height: 78px;
		display: flex;
	}
	.bottomitem{
		width: 80px;
		height: 80px;
		flex: 1;
		display: flex;
		flex-wrap: wrap; /* 换行 */
		margin: 0 4px;
		text-align: center;
	}
	.bottom img{
		width: 40px;
		height: 40px;
	}
	.text{
		text-align: center;
	}
</style>
