<template>
  <a-card>
    员工管理
  </a-card>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'

@Component 
export default class Staff extends Vue{
  private mounted(){
    console.log('Staff  Index')
  }
}
</script>

<style lang="scss" scoped>

</style>