<template>
  <a-modal title="Modal" v-model="visible" @ok="hideModal" okText="确认" cancelText="取消">
    <p>Bla bla ...</p>
    <p>Bla bla ...</p>
    <p>Bla bla ...</p>
  </a-modal>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'


export default class ApplyModal extends Vue{

  
}

</script>

<style>

</style>