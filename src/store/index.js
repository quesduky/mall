import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		goodsNum: 0,
		goodsList: []
	},
	mutations:{
		addcart(state,goodsData) {
			state.goodsNum++;
			state.goodsList.push(goodsData)
		}
	}
})

