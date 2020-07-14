// 引入vue和router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 通过懒加载的方式导入其他组件
const Home = () => import('../pages/home/Home.vue')
const Category = () => import('../pages/category/Category.vue')
const Shopcart = () => import('../pages/shopcart/Shopcart.vue')
const Profile = () => import('../pages/profile/Profile.vue')
const Detail = () => import('../pages/detail/Detail.vue')
// 初始化router
Vue.use(VueRouter)


// 创建router对象
const router = new VueRouter({
	routes: [
		{
			path: '',
			redirect: '/home'
		},
		{
			path:'/home',
			component: Home
		},
		{
			path:'/category',
			component: Category
		},
		{
			path: '/shopcart',
			component: Shopcart
		},
		{
			path: '/profile',
			component: Profile
		},
		{
			path: '/detail/:id',
			component: Detail
		}
	],
	mode: 'history'
})
	

// 导出router

export default router