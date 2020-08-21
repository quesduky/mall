import {requestCategory} from './request.js'

export function getCategoryLeft(){
	return requestCategory({
		url:'/left',
	})
}