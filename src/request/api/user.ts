

import axios from 'axios'

/**
 * 登陆接口
 * @param parameter 
 */

export function login(parameter:any){
  return axios({
    url: '/user/login',
    method: 'post',
    data: parameter
  })
}


/**
 * 获取用户信息接口
 * @param parameter 
 */
export function getInfo(parameter:any){
  return axios({
    url: '/user/info',
    method: 'post',
    data: parameter
  })
}