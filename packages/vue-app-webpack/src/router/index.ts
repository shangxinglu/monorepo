
import * as VueRouter from 'vue-router'
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path:'/',
            name:'首页',
            component: () => import('@/pages/index')
        },
        {
            path:'/my',
            name:'我的',
            component: () => import('@/pages/my/index.vue')
        }
    ]
})

export default router