

import axios from 'axios'

/**
 * 登陆接口
 * @param parameter 
 */

export function login(parameter:any){
  return axios({
    url: '/user/info',
    method: 'post',
    data: parameter
  })
}