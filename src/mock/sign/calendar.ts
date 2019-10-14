import Mock from 'mockjs'
import { accessToken } from '../util'
import moment from 'moment'

const makeCalendar = (token:string)=>{
  let listDatas = []
  let state = [
    {
      type:'success',
      content:'正常!'
    },
    {
      type:'warning',
      content:'迟到！'
    },
    {
      type:'error',
      content:'早退！'
    }
  ]

  for(var i = 1;i<=moment().date();i++){
    let data = [state[Math.round(Math.random()*2)],state[Math.round(Math.random()*2)]]
    
    listDatas.push(data)
  }
}


const calendar = (option:object)=>{  
  const responseBody = {
    code:200,
    message:"success",
    data:{}
  }

  let token = accessToken(option)

  switch (token) {
    case 'YWRtaW4=':
      // responseBody.code = 200
      // responseBody.message = '成功'
      break;
    case 'c3RhZmY=':
      // responseBody.code = 200
      // responseBody.message = '成功'
      break;
    default:
      responseBody.code = 200
      responseBody.message = '成功'
      break;
  }

  return responseBody
}

Mock.mock(/\/sign\/calendar/,'get',calendar)