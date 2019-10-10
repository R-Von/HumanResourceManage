// export 
// const 
import { routerItem } from '@/interface'
import { MainLayout , BasicLayout , RouteViews, PageViews } from '@/layouts'


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
    name:'首页',
    component:MainLayout,
    meta:{title:'首页',name:'index'},
    redirect: '/sign/index',
    children:[
      // {
      //   path:'/dashboard',
      //   name:'dashboard',
      //   component:RouteViews,
      //   redirect: '/dashboard/workplace',
      //   meta:{title:'仪表盘',permission:['dashboard'],name:'dashboard'},
      //   children:[
      //     {
      //       path:'/dashboard/workplace',
      //       name:'workplace',
      //       component:()=>import(/* webpackChunkName: "user" */ '@/views/Dashboard/Workplace.vue'),
      //       meta:{ title:'工作台',permission:['dashboard'],name:'workplace'}
      //     }
      //   ]
      // },
      {
        path:'/signin',
        name:'考勤管理',
        component:RouteViews,
        meta:{title:'考勤管理',name:'signup',icon:'home',key:'sub1'},
        redirect: '/sign/index',
        children:[
          {
            path:'/sign/index',
            name:'打卡',
            component:()=>import(/* webpackChunkName: "user" */ '@/views/Sign/Index.vue'),
            meta:{ title:'打卡',permission:['sign'],name:'signindex',key:'1'}
          },
          {
            path:'/sign/apply',
            name:'加班申请',
            component:()=>import(/* webpackChunkName: "user" */ '@/views/Sign/Apply.vue'),
            meta:{ title:'加班申请',permission:['sign'],name:'signapply',key:'2'}
          }
        ]
      },
      {
        path:'/holiday',
        name:'请假管理',
        component:RouteViews,
        meta:{title:'请假管理',name:'signup',icon:'schedule',key:'sub2'},
        redirect: '/holiday/index',
        children:[
          {
            path:'/holiday/index',
            name:'请假申请',
            component:()=>import(/* webpackChunkName: "user" */ '@/views/Holiday/Index.vue'),
            meta:{ title:'请假申请',permission:['holiday'],name:'holidayindex',key:'3'}
          }
        ]
      },
      {
        path:'/pay',
        name:'薪酬管理',
        component:RouteViews,
        meta:{title:'薪酬管理',name:'signup',icon:'dollar',key:'sub3'},
        redirect: '/pay/index',
        children:[
          {
            path:'/pay/index',
            name:'工资单',
            component:()=>import(/* webpackChunkName: "user" */ '@/views/Pay/Index.vue'),
            meta:{ title:'工资单',permission:['holiday'],name:'holidayindex',key:'4'}
          }
        ]
      },
      {
        path:'/staff',
        name:'员工管理',
        component:RouteViews,
        meta:{title:'员工管理',name:'staff',icon:'team',key:'sub4'},
        redirect: '/satff/index',
        children:[
          {
            path:'/staff/index',
            name:'离职申请',
            component:()=>import(/* webpackChunkName: "user" */ '@/views/Staff/Index.vue'),
            meta:{ title:'离职申请',permission:['staff'],name:'staffindex',key:'5'}
          }
        ]
      },
      {
        path:'/notice',
        name:'公告管理',
        component:RouteViews,
        meta:{title:'公告管理',name:'notice',icon:'sound',key:'sub5'},
        redirect: '/notice/index',
        children:[
          {
            path:'/notice/index',
            name:'节假日',
            component:()=>import(/* webpackChunkName: "user" */ '@/views/Notice/Index.vue'),
            meta:{ title:'节假日日',permission:['notice'],name:'holidayindex',key:'6'}
          }
        ]
      },
      {
        path:'/test',
        name:'测试组件',
        component:PageViews,
        meta:{title:'测试',name:'test',icon:'database',key:'sub6'},
        redirect:'/test/testA',
        children:[
          {
            path:'/test/testA',
            name:'测试组件A',
            component:()=>import(/* webpackChunkName: "user" */ '@/views/Test/TestA.vue'),
            meta:{ title:'测试组件A',permission:['test'],name:'testA',key:'7'}
          },
          {
            path:'/test/testB',
            name:'测试组件B',
            component:()=>import(/* webpackChunkName: "user" */ '@/views/Test/TestB.vue'),
            meta:{ title:'测试组件B',permission:['test'],name:'testB',key:'8'}
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