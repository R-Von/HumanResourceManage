<template>
  <div>
    Sign In
  </div>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'

@Component 
export default class Sign extends Vue{
  private mounted(){
    console.log('SignIn  Index')
  }
}
</script>

<style lang="scss" scoped>

</style>