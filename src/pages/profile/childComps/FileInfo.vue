<template>
	<!-- 头像昵称 -->
	<div class="profile">
		<div class="infoimg">
			<img :src="img" alt="">
		</div>
		<div class="infoname">
			{{name}}
		</div>
	</div>
</template>

<script>
	import { getFileInfo } from '../../../network/profile.js'
	
	export default{
		name:"FileInfo",
		data(){
			return{
				infolist:{},
				img: '',
				name: ''
			}
		},
		computed:{
			infoimg: function(){
				return this.infolist.data
			}
		},
		// 请求个人信息数据
		created(){
			getFileInfo().then( res => {
				this.infolist = JSON.parse(res.data)
				this.img = this.infolist.data.img
				this.name = this.infolist.data.nickname
			}).catch( err =>{
				console.log(err)
			})
		}
	}
</script>

<style scoped>
	.profile{
		display:flex;
	}
	.infoimg{
		width: 80px;
		height: 80px;
		margin: 2px;
	}
	.infoimg img{
		width: 100%;
		height: 100%;
		border-radius: 40px;
		border: 2px #f34 solid;
	}
	.infoname{
		align-self:center;
		margin-left: 16px;
		font-size: 18px;
		font-weight: 800;
	}
</style>
