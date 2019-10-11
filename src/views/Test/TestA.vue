<template>
  <a-card :bordered="false" :body-style="{padding:'24px 32px'}">
    Test A
  </a-card>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'

@Component
export default class TestA extends Vue{
  description:string = '这里是用来做测试用的测试组件A'
}

</script>

<style lang="scss">

</style>