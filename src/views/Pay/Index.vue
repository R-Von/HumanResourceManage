<template>
  <a-card>
    薪酬管理
  </a-card>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'

@Component 
export default class Pay extends Vue{
  private mounted(){
    console.log('Pay  Index')
  }
}
</script>

<style lang="scss" scoped>

</style>