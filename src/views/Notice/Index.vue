<template>
  <a-card>
    节假日
  </a-card>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'

@Component 
export default class Notice extends Vue{
  private mounted(){
    console.log('Pay  Index')
  }
}
</script>

<style lang="scss" scoped>

</style>