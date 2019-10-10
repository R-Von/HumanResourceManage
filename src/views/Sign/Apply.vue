<template>
  <a-card>
    加班申请
  </a-card>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'

@Component 
export default class Apply extends Vue{
  private mounted(){
    console.log('Sign Apply')
  }
}
</script>

<style lang="scss" scoped>

</style>