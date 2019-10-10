<template>
  <a-breadcrumb class="breadcrumb">
    <template v-for="(item,index) in breadList">
      <a-breadcrumb-item v-if="index!=0" :key="index">
        <router-link v-if="index==1" :to="item.path">  
          {{item.name}}
        </router-link>  
        <span v-else>
           {{item.name}}
        </span>
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<script lang="ts">
import { Vue , Component , Watch } from 'vue-property-decorator'


@Component
export default class SBreadcrumb extends Vue{
  breadList:any = []
  name:string = ''

  getBreadcrumb(){
    this.breadList = []
    this.name = this.$route.name||''
    this.breadList = this.$route.matched.map(item=>item)
  }
  private mounted(){
    this.getBreadcrumb()
  }
  @Watch('$route')
  setBreadcrumb(oldVal:any,newVal:any){
    this.getBreadcrumb()
  }
}


</script>

<style lang="scss">
.breadcrumb{
  margin-bottom:16px;
}
</style>