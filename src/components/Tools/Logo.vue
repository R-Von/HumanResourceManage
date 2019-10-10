<template>
  <div class="logo">
    <router-link :to="{path:'/'}">
      <img class="logo" src='@/assets/logo.svg'  alt="logo" /> 
      <h1>{{title}}</h1>
    </router-link>
  </div>
</template>

<script lang="ts">
  import { Component , Vue , Prop} from 'vue-property-decorator'
  @Component
  export default class Logo extends Vue{
    @Prop() private title!:string 
  }
</script>

<style>
</style>