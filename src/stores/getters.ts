import { GetterTree } from 'vuex'

const getters:GetterTree<any,any> = {
  roles:state=>state.user.roles,
  token:state=>state.user.token,
  avatar:state=>state.user.avatar,
  name:state=>state.user.name
}

export default getters