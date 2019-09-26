// export 
// const 
import { routerItem } from '@/interface'
import { MainLayout , BasicLayout , RouteViews } from '@/layouts'


export const basicRouterMap:routerItem[] = [
  {
    path:'/user',
    component:BasicLayout,
    redirect:'/user/login',
    hidden:true,
    meta:{
      name:'user',
    },
    children:[
      {
        path:'login',
        name:'login',
        meta:{
          name:'login',
        },
        component:() => import(/* webpackChunkName: "user" */ '@/views/Login/Login.vue')
      }
    ]
  },
  {
    path:'/404',
    meta:{
      name:'nomatch',
    },
    component:()=>import(/* webpackChunkName: "user" */ '@/views/Error/404.vue')
  }
  // {
  //   path:'*',
  //   meta:{
  //     name:'notfound',
  //   },
  //   redirect: '/404'
  // }
]


export const asyncRouterMap:routerItem[] = [
  {
    path:'/',
    name:'index',
    component:MainLayout,
    meta:{title:'首页',name:'index'},
    redirect: '/dashboard/workplace',
    children:[
      {
        path:'/dashboard',
        name:'dashboard',
        component:RouteViews,
        redirect: '/dashboard/workplace',
        meta:{title:'仪表盘',permission:['dashboard'],name:'dashboard'},
        children:[
          {
            path:'/dashboard/workplace',
            name:'workplace',
            component:()=>import(/* webpackChunkName: "user" */ '@/views/Dashboard/Workplace.vue'),
            meta:{ title:'工作台',permission:['dashboard'],name:'workplace'}
          }
        ]
      },
      {
        path:'/signup',
        name:'signup',
        component:RouteViews,
        meta:{title:'签到',name:'signup'},
        redirect: '/signup/index',
        children:[
          {
            path:'/signup/index',
            name:'signindex',
            component:()=>import(/* webpackChunkName: "user" */ '@/views/Sign/Index.vue'),
            meta:{ title:'签到首页',permission:['signup'],name:'signindex'}
          }
        ]
      }
    ]
  },
  {
    path:'*',
    meta:{
      name:'notfound',
    },
    redirect: '/404'
  }
]