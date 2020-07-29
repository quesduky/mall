import {request} from './request.js'
export function	getDetail(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}
// 商品信息
export class Goods{
	constructor(itemInfo,columns,services){
		this.title = itemInfo.title
		this.price = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns
		this.lealPrice = itemInfo.lowNowPrice
		this.services = services
	}
}
// 商家信息
export class Shop{
	constructor(shopInfo){
		this.clogo = shopInfo.shopLogo
		this.cname = shopInfo.name
		this.cfans = shopInfo.cFans
		this.cGoods = shopInfo.cGoods
		this.cscore = shopInfo.score
	}
}