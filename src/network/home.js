import {request} from './request.js'
// 定义home中请求数据
export function getHomeData(){
	return request({
		url: 'home/multidata'
	})
}
// 定义home中请求的商品数据
export function getHomeGoods(type,page){
	return request({
		url: 'home/data',
		params: {
			type,
			page,
		}
	})
}