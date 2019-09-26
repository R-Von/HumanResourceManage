export const fakeAuth = {
  setToken(token:string){
      localStorage.setItem('loginToken',token)
      return true
  },
  signOut(){
      localStorage.removeItem('loginToken')
      localStorage.removeItem('userRole')
  },
  authenticate(){
      const token = localStorage.getItem('loginToken')
      return token ? true:false
  },
  setRole(permission:string[]){
    // let permission = ['dashboard','signup']
    localStorage.setItem('userRole',JSON.stringify(permission))
    return true
  },
  getAuthRole(){
    const permission = localStorage.getItem('userRole')
    return permission ? JSON.parse(permission):[]
  }
}