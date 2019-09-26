<template>
 
  <div class="loginWrap" id="basicLayout">
    <div class="contentWrap">
      <div class="leftSide">
        <img src='@/assets/login_bg.svg' class="loginBg" alt="login"/>
      </div>
      <div class="loginForm">
        <div class="title">
          <img class="logo" src='@/assets/logo.svg' alt="Ant Design后台管理系统">
        </div>
        <div class="dataWrap">
          <route-views></route-views>
        </div>
      </div>
    </div>
  </div> 
      
  
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RouteViews from './RouteViews.vue'

@Component({
  components: {
    RouteViews
  }
})
class BasicLayout extends Vue{

}
export default BasicLayout
</script>

<style lang="scss">
  @import './BasicLayout.scss'
</style>