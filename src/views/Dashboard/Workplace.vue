<template>
  <div>
    WorkPlace   
    <router-link to='/signup'>SignIn</router-link>
    <a @click="logout">登出</a>
  </div>  
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'

@Component 
export default class Workplace extends Vue{

  public logout(){

  }
  
  private mounted(){
    console.log('Dashboard  Workplace')

    console.log(this.$router)
  }
}
</script>

<style>

</style>