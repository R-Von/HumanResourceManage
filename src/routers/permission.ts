import router from '../router'
import store from '../store';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
import {fakeAuth} from '../utils/fakeAuth'
import { asyncRouterMap } from './config'

const whiteList:string[] = ['login']

router.beforeEach((to,from,next)=>{
  NProgress.start()
  // 获取token 判断用户是否登录
  if(fakeAuth.authenticate()){
     //已登录
    if(to.path==='/user/login'){
      next({path:'/dashboard/workplace'})
      NProgress.done()
    }else{
      console.log(store.getters)
      if(store.getters.roles.length===0){
        store.dispatch('SetInfo').then(res=>{
          console.log(res)
          router.addRoutes(asyncRouterMap)
          next({...to,replace:true})
        }).catch(()=>{
          console.log('error')
        })
      }else{ 
        console.log(1)
        next()
        console.log(2)
      }
    }
  }else{
    //未登录
    if(whiteList.includes(to.meta.name)){
      // 免登陆 白名单直接通过  
      next()
    }else{
      next({ path : '/user/login' , query : { redirect : to.fullPath } })
      NProgress.done()
    }
  }
})


router.afterEach(()=>{
  NProgress.done()   //finish the progress bar
})