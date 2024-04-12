
import * as VueRouter from 'vue-router'
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path:'/',
            component: () => import('@/pages/index')
        }
    ]
})

export default router