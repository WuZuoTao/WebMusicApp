// 创建整个路由器
import VueRouter from "vue-router"
import Layout from '@/layout'

// 创建一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/',
            component: Layout,
            redirect: '/discover/recommend',
            children:[{
                path:'/discover',
                name:'music',
                component: () => import('@/views/discoverMusic/index'),
                children:[
                    {
                        path:'/discover/recommend',
                        name:'recommend',
                        component: () => import('@/views/discoverMusic/components/recommend')
                    },{
                        path:'/discover/customization',
                        name:'customization',
                        component: () => import('@/views/discoverMusic/components/customization')
                    },
            ]
            }]
        },
        {
            path:'/boke',
            component: Layout,
            redirect: '/bokein',
            children:[{
                path:'/bokein',
                name:'bokein',
                component: () => import('@/views/boke/index')
            }]
        },
    ]
})
