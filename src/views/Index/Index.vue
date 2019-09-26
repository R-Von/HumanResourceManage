<template>
  <div>
    Index
  </div>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'

@Component 
export default class Index extends Vue{
  private mounted(){
    console.log('Index  Index')
  }
}
</script>

<style lang="scss" scoped>

</style>