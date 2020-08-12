<template>
	<div>
		<div class="info">
			<table>
				<tr>
					<th>{{params.info}}</th>
				</tr>
				<tr v-for="(item,index) in params.set" :key="index" class="set">
					<td>{{item.key}}</td>
					<td>{{item.value}}</td>
				</tr>
			</table>
		</div>
		<p>{{params.disclaimer}}</p>
		<div class="rule">
			<table>
				<tr>
					<th>{{params.key}}</th>
				</tr>
				<tr  v-for="(item,index) in params.tables" :key="item[index]">
					<td>{{item[0]}}</td>
					<td v-for="num in params.tables.length" :key="num">{{item[num]}}</td>
				</tr>
			</table>
		</div>
	{{params.rule}}
	</div>
</template>

<script>
	export default{
		name:"DetalParamsInfo",
		created() {
			this.pr = this.params.tables
		},
		props:{
			params:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.info{
		margin: 4px 8px;
	}
	.info tb{
		margin: 2px 6px;
	}
	.rule{
		margin: 4px 8px;
	}
</style>
