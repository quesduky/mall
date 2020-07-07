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
		props:{
			probeType: {
				type:Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				scroll: null
			}
		},
		methods:{
			// 定义的返回顶部的方法,通过调用scrollTo方法,time=800为设置的默认数值
			scrollTo(x,y,time=800){
				this.scroll.scrollTo(x,y,time)
			},
			refresh() {
				this.scroll && this.scroll.refresh()
			}
		},
		mounted() {
			// 创建scroll实例
			this.scroll = new BScroll(document.querySelector('.container'),{
				// 这里必须设置click为true,组件下的点击事件才可以使用
				click:true,
				probeType:this.probeType,
				pullUpLoad:this.pullUpLoad
			}),
			// 监听滚动的位置
			this.scroll.on('scroll',position => {
				// 将信息发送给父组件,position就是实时滚动的位置,y是个负值
				this.$emit('scroll',position)
			}),
			// 监听上拉事件
			this.scroll.on('pullingUp',() =>{
				// 上拉加载商品
				this.$emit('pullingUp')
			})
			
		}
	}	
</script>

<style>
</style>
