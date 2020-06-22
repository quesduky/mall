import {request} from './request.js'
// 定义home中请求数据的路径
export function getHomeData(){
	return request({
		url: 'home/multidata'
	})
}
