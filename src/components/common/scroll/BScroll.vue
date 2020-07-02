<template>
	<div class="container">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'BScroll',
		data() {
			return {
				scroll: null
			}
		},
		methods:{
			// 定义的返回顶部的方法,通过调用scrollTo方法,time=800为设置的默认数值
			scrollTo(x,y,time=800){
				this.scroll.scrollTo(x,y,time)
			}
		},
		mounted() {
			this.scroll = new BScroll(document.querySelector('.container'),{
			})
		}
	}	
</script>

<style>
</style>
