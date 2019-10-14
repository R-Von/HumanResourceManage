import Vue from 'vue';
import axios , { AxiosResponse , AxiosRequestConfig } from 'axios';
import Vueaxios from 'vue-axios';


axios.interceptors.request.use((config:any)=>{
  let token:string = localStorage.loginToken||''
  config.headers.accessToken = token
  if(config.data){
    config.data.accessToken = token
  }else{
    config.data = {
      accessToken:token
    }
  }
  
  return config
})


axios.interceptors.response.use((res:any)=>{
  return res.data
})

Vue.use(Vueaxios,axios)
