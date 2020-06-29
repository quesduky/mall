<template>
	<div id="swiper">
		<!-- 轮播图 -->
		<div id="container">
			<div class="swiper-item">
				<img src="https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg">
				<img src="https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg">
				<img src="https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg">
			</div>
		</div>
		<!-- 分页器 轮播上的指示小点 -->
		<div class="indicator">
			<div class="indicator-item"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Swiper',
		data() {
			return {
				count: 0,
				isgo: false
			}
		},
		methods:{
			nextSwiper(){
				
			}
		}
	}
</script>

<style scoped>
	#swiper {
		width: 375px;
		height: 220px;
		overflow: hidden;
		position: relative;
	}
	#container {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 5;
	}
	.swiper-item {
		width: 100%;
		height: 220px;
	}
	.swiper-item img {
		width: 100%;
		height: 220px;
		float: left;
	}
	/*  分页器 轮播上的指示小点  */
	.indicator {
		display: flex;
		justify-content: center;
		position: absolute;
		width: 100%;
		bottom: 8px;
	}
	.indicator-item {
		box-sizing: border-box;
		width: 8px;
		height: 8px;
		border-radius: 4px;
		background-color: #000;
		line-height: 8px;
		text-align: center;
		font-size: 12px;
		margin: 0 5px;
		z-index: 6;
	}
</style>
