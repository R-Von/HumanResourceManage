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
    [state[0],state[0]],  //08 01 4
    [state[0],state[0]],    
    [state[0],state[0]],  //6
    [state[1],state[0]],  //7
    [state[0],state[2]],
    [state[0],state[0]],
    [state[0],state[0]],
    [state[0],state[0]],
    [state[0],state[0]],
    [state[0],state[2]],  //7
    [state[0],state[0]],  //7
    [state[1],state[0]],
    [state[0],state[0]],
    [state[0],state[0]],
    [state[0],state[0]],
    [state[0],state[0]],
    [state[0],state[0]], //6
    [state[0],state[0]], //7
    [state[1],state[0]]
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