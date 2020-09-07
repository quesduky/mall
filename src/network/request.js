import axios from 'axios'

export function request(config) {
	// 创建axios实例
	const instancel = axios.create({
		baseURL: 'http://152.136.185.210:8000/api/z8',
		timeout: 5000
	})
	// 发送网络请求
	return instancel(config)
}

export function requestCategory(config){
	// 创建分类页面的请求实例
	const instancel = axios.create({
		baseURL:'https://api.it120.cc/az/mock/category',
		timeout:5000
	})
	return instancel(config)
}

export function requestProfile(config){
	// 创建个人信息也米娜请求实例
	const instancel = axios.create({
		baseURL: 'https://api.it120.cc/az/mock/file',
		timeout: 5000
	})
	return instancel(config)
}