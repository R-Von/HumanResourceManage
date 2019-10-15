<template>
<page-views>
  <a-card>
    加班申请
    <a-table :columns="columns" :dataSource="data" bordered>
      <template slot="name" slot-scope="text">
        <a href="javascript:;">{{text}}</a>
      </template>
      <template slot="title" slot-scope="currentPageData">
        Header
      </template>
      <template slot="footer" slot-scope="currentPageData">
        Footer
      </template>
    </a-table>
  </a-card>
</page-views>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'
import { PageViews } from '@/layouts'

@Component({
  components:{
    PageViews
  }
})
export default class Apply extends Vue{
  private mounted(){
    console.log('Sign Apply')
  }
}
</script>

<style lang="scss" scoped>

</style>