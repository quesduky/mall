import { requestProfile } from './request.js'

export function getFileInfo(){
	return requestProfile({
		url: '/info'
	})
}