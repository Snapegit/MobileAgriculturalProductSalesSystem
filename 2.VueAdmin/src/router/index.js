	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import forum from '@/views/forum/list'
	import news from '@/views/news/list'
	import nongchanpin from '@/views/nongchanpin/list'
	import discussnongchanpin from '@/views/discussnongchanpin/list'
	import chanpinfenlei from '@/views/chanpinfenlei/list'
	import address from '@/views/address/list'
	import yonghu from '@/views/yonghu/list'
	import chat from '@/views/chat/list'
	import orders from '@/views/orders/list'
	import storeup from '@/views/storeup/list'
	import config from '@/views/config/list'
	import cart from '@/views/cart/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/forum',
			name: '我的发布',
			component: forum
		}
		,{
			path: '/news',
			name: '公告信息',
			component: news
		}
		,{
			path: '/nongchanpin',
			name: '农产品',
			component: nongchanpin
		}
		,{
			path: '/discussnongchanpin',
			name: '农产品评论',
			component: discussnongchanpin
		}
		,{
			path: '/chanpinfenlei',
			name: '产品分类',
			component: chanpinfenlei
		}
		,{
			path: '/address',
			name: '地址',
			component: address
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/chat',
			name: '客服聊天',
			component: chat
		}
		,{
			path: '/orders',
			name: '订单管理',
			component: orders
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/cart',
			name: '购物车',
			component: cart
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
