import { ActionTree , MutationTree } from 'vuex'
import { fakeAuth } from '../../utils/fakeAuth'
import { User } from '@/interface'

const state:User = {
  id: '',
  name: '',
  avatar: '',
  roles:[],
  token:''
}

const mutations:MutationTree<any> = {
  SET_TOKEN(state,token){
    state.token = token
  },
  SET_ROLES(state,roles){
    state.roles = roles
  },
  SET_INFO(state,info){
    state.name = info.name
    state.id = info.id
    state.avatar = info.avatar
  }
}

const actions:ActionTree<any,any> = {
  Login({ commit } , userInfo){
    return new Promise(( resolve , reject )=>{
      // fakeAuth
      let token:string = `9fjew7n2m5as2k`
      fakeAuth.setToken(token)
      console.log(token)
      commit('SET_TOKEN',token)
      resolve('200')
    })
  },
  GetInfo({ commit }){
    return new Promise(( resolve , reject )=>{
      // let permission = ['dashboard','signup']
      let permission:string[] = ['dashboard','signup']
       
      fakeAuth.setRole(permission)
      commit('SET_ROLES',permission)
      let info:object = {
        name:'Admin',
        id:1,
        avatar:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3615831237,1510664097&fm=26&gp=0.jpg'
      }
      commit('SET_ROLES',permission)
      commit('SET_INFO',info)
      resolve()
    })
  },
  Logout({commit}){
    return new Promise(( resolve , reject )=>{
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      fakeAuth.signOut()
      resolve()
    })
  }
}

const namespaced:boolean = true

const user = {
  // namespaced,
  state,
  actions,
  mutations
}

export default user