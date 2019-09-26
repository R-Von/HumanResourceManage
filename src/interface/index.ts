export interface routerItem {
  /**
   * 路由规则
   */
  name? : string,
  component? : any,
  path : string,
  icon? : string,
  hidden? : boolean,
  permission? : string | string[] | boolean,
  redirect? : string | object,
  children? : routerItem[],
  meta? : object,
  pathName?:string
}


// export interface user
export interface User {
  id: string,
  name: string,
  avatar: string,
  roles:[],
  token:string
}