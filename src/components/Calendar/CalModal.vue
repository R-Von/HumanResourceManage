<template>
   <a-modal
      title="Basic Modal"
      v-model="visible"
      @ok="handleOK"
      @cancel="handleCancel"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
</template>

<script lang="ts">

import { Vue , Component , Prop , Emit } from 'vue-property-decorator'

@Component
export default class CalModal extends Vue{
  @Prop() visible:boolean = false
  @Emit('confirmOK')
  handleOK(e:any){
    console.log(e)
  }
  @Emit('CancelCM')
  handleCancel(){
    
  }

  


}


</script>

<style>

</style>