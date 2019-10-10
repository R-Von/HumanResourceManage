<template>
  <a-card>
    请假申请
  </a-card>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'

@Component 
export default class Holiday extends Vue{
  private mounted(){
    console.log('Holiday  Index')
  }
}
</script>

<style lang="scss" scoped>

</style>