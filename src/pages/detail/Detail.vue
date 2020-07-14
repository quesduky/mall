<template>
	<div>
		新页面
		{{id}}
	</div>
</template>

<script>
	export default {
		name: "Detail",
		data(){
			return{
				id:null
			}
		},
		created() {
			this.id = this.$route.params.id
		}
	}
</script>

<style>
</style>
