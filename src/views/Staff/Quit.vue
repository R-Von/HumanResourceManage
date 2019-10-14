<template>
  <page-views>
    <div class="content">
      <a-card>
        <a-form
          :form="form"
          @submit="handleSubmit"
        >
          <a-form-item
            label="离职时间："
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
            :bind="formItemLayout"
          >
            <a-date-picker v-decorator="['date-picker', config]" />
          </a-form-item>
          <a-form-item
            label="Gender"
            :label-col="{ span: 5 }"
            :wrapper-col="{ span: 12 }"
          >
            <a-select
              v-decorator="[
                'gender',
                {rules: [{ required: true, message: 'Please select your gender!' }]}
              ]"
              placeholder="Select a option and change input text above"
              @change="handleSelectChange"
            >
              <a-select-option value="male">
                male
              </a-select-option>
              <a-select-option value="female">
                female
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            :wrapper-col="{ span: 12, offset: 5 }"
          >
            <a-button
              type="primary"
              html-type="submit"
            >
              Submit
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
  }
}
</script>

<style lang="scss" scoped>

</style>