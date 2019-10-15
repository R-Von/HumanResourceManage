import Mock from 'mockjs'
import { accessToken } from '../util'
import moment from 'moment'

const makeCalendar = (token:string)=>{
  let listDatas = []
  let state = [
    {
      type:0,
      icon:'success',
      content:'正常!',
      time:'08:38'
    },
    {
      type:1,
      icon:'success',
      content:'正常!',
      time:'18:23'
    },
    {
      type:2,
      icon:'warning',
      content:'迟到！',
      time:'09:38'
    },
    {
      type:3,
      icon:'error',
      content:'早退！',
      time:'17:46'
    }
  ]
  
  // switch (token) {
  //   case 'YWRtaW4=':
      
  //     break;
  //   case 'YWRtaW4=':
      
  //         break;
  //   default:
  //     break;
  // }
  // if(){
    
  // }
  let dataList  = [
    [state[0],state[1]],  //08 01 4
    [state[0],state[1]],    
    [state[0],state[1]],  //6
    [state[2],state[0]],  //7
    [state[0],state[3]],
    [state[0],state[1]],
    [state[0],state[1]],
    [state[0],state[1]],
    [state[0],state[1]],
    [state[0],state[2]],  //7
    [state[0],state[1]],  //7
    [state[2],state[1]],
    [state[0],state[1]],
    [state[0],state[1]],
    [state[0],state[1]],
    [state[0],state[1]],
    [state[0],state[1]], //6
    [state[0],state[1]], //7
    [state[2],state[1]]
  ]
  return dataList
}


const calendar = (option:object)=>{  
  const responseBody = {
    code:200,
    message:"success",
    data:{}
  }

  let token = accessToken(option)
  let data = makeCalendar(token)
  responseBody.data = {
    late:'2',
    early:'1',
    vocation:0,
    dateLiist:data
  }
  return responseBody
}

Mock.mock(/\/sign\/calendar/,'get',calendar)