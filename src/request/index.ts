import Vue from 'vue';
import axios , { AxiosResponse , AxiosRequestConfig } from 'axios';
import Vueaxios from 'vue-axios';


axios.interceptors.response.use((res:any)=>{
  return res.data
})

Vue.use(Vueaxios,axios)
