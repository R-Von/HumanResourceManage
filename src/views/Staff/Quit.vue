<template>
  <a-card>
    员工管理/离职申请


  </a-card>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'

@Component 
export default class Quit extends Vue{
  private mounted(){
    console.log('Staff  Index')
  }
}
</script>

<style lang="scss" scoped>

</style>