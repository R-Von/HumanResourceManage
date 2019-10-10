<template>
  <div class="pageView">
    <page-header>
      <h1 slot="pageTitle" class="title" v-if="pageTitle">
        {{pageTitle}}
      </h1>
      <div slot="pageInfo" v-if="description">
        <p>{{description}}</p>
      </div>
    </page-header>
    <div class="content">
      <div class="page-header-index-wide">
        <router-view ref="content" />
      </div>  
    </div>
  </div>  
</template>

<script lang="ts"> 

import { Component , Vue } from 'vue-property-decorator'
// import {}
import PageHeader from '../components/PageHeader'

@Component({
  components:{
    PageHeader
  }
})
export default class pageViews extends Vue{
  pageTitle:string = ''
  description:string = ''

  getPageInfo(){
    this.pageTitle = this.$route.meta.title
    // console.log(this.$refs.content)
    // console.log(this.$refs.content.description)
    const content:any = this.$refs.content
    this.description = content.description||''
  }

  private updated() {
    this.getPageInfo()
    // console.log('update')
  }
  private mounted() {
    this.getPageInfo()
    // console.log('mounted')
  }
}

</script>

<style lang="scss" scoped>
.content {
  margin: 24px 24px 0;
  .link {
    margin-top: 16px;
    &:not(:empty) {
      margin-bottom: 16px;
    }
    a {
      margin-right: 32px;
      height: 24px;
      line-height: 24px;
      display: inline-block;
      i {
        font-size: 24px;
        margin-right: 8px;
        vertical-align: middle;
      }
      span {
        height: 24px;
        line-height: 24px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
.page-header-index-wide {
  margin: 0 auto;
}
</style>