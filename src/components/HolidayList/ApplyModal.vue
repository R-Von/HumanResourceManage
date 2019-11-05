<template>
  <a-modal 
    title="Modal" 
    v-model="visible" 
    @ok="confirmModal" 
    @cancel="cancelModal"  
    okText="确认" 
    cancelText="取消"
    :confirmLoading="confirmLoading"
  >
    <a-form>
      <a-form-item  label="姓名"  :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <p>{{this.user.name}}</p>
      </a-form-item>
      <a-form-item  label="加班时间"  :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <p>111</p>
      </a-form-item>
      <a-form-item  label="加班理由"  :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-textarea placeholder="赶紧找个借口..." :rows="4" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { Vue , Component , Watch, Prop , Emit } from 'vue-property-decorator'
import { State , Action , Getter } from 'vuex-class'



@Component
export default class ApplyModal extends Vue{
  @State('user') user!:any
  @Prop({default:false})
  private show!:boolean

  private visible:boolean = false
  private confirmLoading:boolean = false

  // @Emit('confirm')
  confirmModal(){
    // this.
    console.log('confirm1')

  }

  @Emit('cancel')
  cancelModal(){
    console.log('cancel1')
  }

  @Watch('show')
  onShowChanged(val:boolean){
    console.log(val)
    this.visible = val
  }

  private mounted() {
    console.log(this.user)
  }
}

</script>

<style>

</style>