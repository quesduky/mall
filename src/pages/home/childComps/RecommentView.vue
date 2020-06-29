<template>
	<!-- 推荐展示位 -->
	<div class="recomment">
		<div v-for="item in recomments" :key= "item.sort" class="recomment-item">
			<a :href="item.link">
				<img :src="item.image">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'RecommentView',
		// 父传子,获取recomments数据
		props: {
			recomments: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.recomment {
		display: flex;
		margin: 10px 10px;
		padding: 10px;
		text-align: center;
		border-bottom: 8px solid #eee;
	}
	.recomment-item {
		flex: 1;
	}
	.recomment-item img {
		width: 72px;
		height: 72px;
	}
</style>
