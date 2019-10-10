<template>
    <a-layout-header :style="{ background: '#fff', padding: 0 }">
   
      <div class="header">
        <user-menu />
      </div>

    </a-layout-header>
</template>

<script lang="ts">
  
  import { Vue , Component } from 'vue-property-decorator'
  import { fakeAuth } from '../../utils/fakeAuth'
  import UserMenu from '../Tools/UserMenu.vue'

  @Component({
    components:{
      UserMenu
    }
  })
  export default class GlobalHeader extends Vue{
    public logout(){
      this.$store.dispatch('Logout').then(()=>{
        this.$router.push('/user/login')
      })
    }

  }

</script>

<style lang="scss" scoped>
.header{
    height: 64px;
    padding: 0 12px 0 0;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    position: relative;
}
</style>