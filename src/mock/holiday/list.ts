import Mock from 'mockjs'
import { accessToken } from '../util'


const list = (option:any)=>{
  const responseBody = {
    code:200,
    message:"success",
    data:{}
  }
  let token = accessToken(option)
  responseBody.data = [
    {
      id:1,
      time:'2019-05-03 9:00 ~ 2019-05-03 18:00 ',
      type:1,    //年假 0 调休 1  病假 2 事假 3
      process:1,   //未审批 0 已同意 1 已拒绝 2
      remark:'1请假干嘛？1请假干嘛？1请假干嘛？'
    },
    {
      id:2,
      time:'2019-06-03 9:00 ~ 2019-06-03 18:00 ',
      type:0,    //年假 0 调休 1  病假 2 事假 3
      process:1,   //未审批 0 已同意 1 已拒绝 2
      remark:'2请假干嘛？2请假干嘛？2请假干嘛？2请假干嘛？'
    },
    {
      id:3,
      time:'2019-07-03 9:00 ~ 2019-07-03 18:00 ',
      type:2,    //年假 0 调休 1  病假 2 事假 3
      process:1,   //未审批 0 已同意 1 已拒绝 2
      remark:'3请假干嘛？3请假干嘛？3请假干嘛？'
    },
    {
      id:4,
      time:'2019-08-03 9:00 ~ 2019-08-03 18:00 ',
      type:3,    //年假 0 调休 1  病假 2 事假 3
      process:2,   //未审批 0 已同意 1 已拒绝 2
      remark:'4请假干嘛？4请假干嘛？4请假干嘛？4请假干嘛？4请假干嘛？'
    },
    {
      id:5,
      time:'2019-09-03 9:00 ~ 2019-09-03 18:00 ',
      type:0,    //年假 0 调休 1  病假 2 事假 3
      process:0,   //未审批 0 已同意 1 已拒绝 2
      remark:''
    }
  ]
  return responseBody
}

Mock.mock(/\/holiday\/list/,'get',list)