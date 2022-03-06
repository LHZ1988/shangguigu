export default [
    {
        path: "/home",
        component: () => import('@/pages/Home'),
        meta: { show: true }
    },
    {
        path: "/search/:keyword?",
        component: () => import('@/pages/search'),
        meta: { show: true },
        name: 'search'
    },
    {
        path: "/login",
        component: () => import('@/pages/Login'),
        meta: { show: false }
    },
    {
        path: "/register",
        component: () => import('@/pages/Register'),
        meta: { show: false }
    },
    {
        path: "/detail/:skuid",
        name: "detail",
        component: () => import('@/pages/Detail'),
    },
    {
        path: "/addcartsuccess",
        name:"addcartsuccess",
        component: () => import('@/pages/AddCartSuccess'),
        meta: { show: true },
    },
    {
        path: "/shopcart",
        name:"shopcart",
        component: () => import('@/pages/ShopCart'),
        meta: { show: true },
    },
    {
        path: "/trade",
        name:"trade",
        component: () => import('@/pages/Trade'),
        meta: { show: true },
        beforeEnter:(to,from,next)=>{
            if(from.path=="/shopcart"){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: "/pay",
        name:"pay",
        component: () => import('@/pages/Pay'),
        meta: { show: true },
        beforeEnter:(to,from,next)=>{
            if(from.path=="/trade"){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: "/paysuccess",
        name:"paysuccess",
        component: () => import('@/pages/PaySuccess'),
        meta: { show: true },
    },
    {
        path: "/center",
        name:"center",
        component: () => import('@/pages/Center'),
        meta: { show: true },
        children:[
            {
                path:'myorder',
                component:()=>import('@/pages/Center/myOrder')
            },
            {
                path:'grouporder',
                component:()=>import('@/pages/Center/groupOrder')
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    //重定向
    {
        path: '*',
        redirect: '/home'
    },
]