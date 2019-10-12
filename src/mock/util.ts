import { resBody } from './type'
export const responseBody:resBody = {
  code:200,
  message:'',
  data:{}
}



export const getBody = (options:any)=>{
  return options.body && JSON.parse(options.body)
}