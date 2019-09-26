import Vue from 'vue'
// import VueStorage from 'vue-ls'

const storageOptions = {
  namespace: 'HR__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local' // storage name session, local, memory
}

// base library
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './component-use'

Vue.use(Antd)


