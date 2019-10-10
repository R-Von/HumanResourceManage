<template>
  <a-layout class="layout">
    <side-menu /> 
    <a-layout>
      <global-header />
      <a-layout-content>
        <route-views />
      </a-layout-content>
      <global-footer />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RouteViews from './RouteViews.vue'
import GlobalHeader from '../components/GlobalHeader'
import GlobalFooter from '../components/GlobalFooter'
import SideMenu from '../components/Menu'

@Component({
  components: {
    RouteViews,
    GlobalHeader,
    GlobalFooter,
    SideMenu
  }
})
class MainLayout extends Vue{

}
export default MainLayout
</script>
<style lang="scss">
  .layout{
    width:100%;
    height:100%;
  }
</style>