<template>
  <page-views>
    <div class="content">
      <a-card>
        <a-form>
          <a-form-item
            label="离职时间："
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-date-picker placeholder="请选择离职日期"/>
          </a-form-item>
          <a-form-item
            label="离职原因："
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
          <a-textarea
            placeholder="请输入离职理由"
            :autosize="{ minRows: 4, maxRows: 6 }"
          />
          </a-form-item>
          <a-form-item
            :wrapper-col="{ span: 12, offset: 5 }"
          >
            <a-button
              type="primary"
              html-type="submit"
            >
              提交
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
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
export default class Quit extends Vue{

  
  

  private mounted(){
    console.log('Staff  Index')
    // moment
    
  }
}
</script>

<style lang="scss" scoped>

</style>