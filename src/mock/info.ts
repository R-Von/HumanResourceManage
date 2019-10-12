/***
 * 用户信息的mock信息
 */


import Mock from 'mockjs'
import { getBody } from './util'

const info = (option:object)=>{
  // console.log(option)
  const body = getBody(option)
  const responseBody = {
    code:200,
    message:"success",
    data:{}
  }
  switch (body.account) {
    case 'admin':
        responseBody.data = {
          id:'2',
          name:'人事主管',
          avatar:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3368007845,606219907&fm=26&gp=0.jpg',
          department:'蚂蚁金服 - 某某某事业群 - 技术平台',
          position:'人事主管',
          token:'YWRtaW4=' //base64加密   staff 普通员工
        }
      responseBody.code = 200
      responseBody.message = '成功'
      break;
    case 'user':
      responseBody.data = {
        id:'1',
        name:'普通员工',
        avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570858807669&di=a6f1b74b0bbd21e25b60f1f8f8a0e4b0&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1e2e62e6f57458ca32394a10211a9616498d25bd5459-K2uzdk_fw658',
        department:'蚂蚁金服 - 某某某事业群 - VUE平台',
        position:'前端切图仔',
        token:'c3RhZmY=' //base64加密   staff 普通员工
      }
      responseBody.code = 200
      responseBody.message = '成功'
      break;
    default:
      responseBody.data = {}
      responseBody.code = 404
      responseBody.message = '用户不存在'
      break;
  }
  return responseBody
 }


 Mock.mock(/\/user\/info/,'post',info)