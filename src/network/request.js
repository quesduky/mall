import axios from 'axios'

export function request(config) {
	// 创建axios实例
	const instancel = axios.create({
		baseURL: 'http://152.136.185.210:8000/api/n3',
		timeout: 5000
	})
	// 发送网络请求
	return instancel(config)
}