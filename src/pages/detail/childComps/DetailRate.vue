<template>
	<div>
		<span class="title">用户评价</span>
		<div class="userInfo" v-if="rate.user">
			<img :src="rate.user.avatar">
			{{rate.user.uname}}
		</div>
		<div class="cate">
			<p>{{rate.content}}</p>
			<p class="cateInfo">{{rate.style}}</p>
		</div>
	</div>
</template>

<script>
	export	default{
		name:"DetailRate",
		props:{
			rate:{
				type:Object,
				default(){
					return 1
				}
			}
		}
	}
</script>

<style scoped="">
	.title{
		margin: 4px 8px;
		font-weight: 800;
	}
	.userInfo{
		position: relative;
		height: 80px;
		line-height: 80px;
	}
	.userInfo img{
		height: 68px;
		width: 68px;
		border-radius: 34px;
	}
	.cate{
		height: 120px;
		margin: 4px;
	}
	.cateInfo{
		color: #797979;
		font-size: 12px;
	}
</style>
