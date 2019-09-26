<template>
  <a-layout>
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


@Component({
  components: {
    RouteViews,
    GlobalHeader,
    GlobalFooter
  }
})
class MainLayout extends Vue{

}
export default MainLayout
</script>