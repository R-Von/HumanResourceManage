<template>
    <a-layout-header :style="{ background: '#fff', padding: 0 }">
      <a-dropdown>
        <a class="ant-dropdown-link" href="#">
          User <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">User Info</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">User Setting</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;" @click="logout">Log out</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-layout-header>
</template>

<script lang="ts">
  
  import { Vue , Component } from 'vue-property-decorator'
  import { fakeAuth } from '../../utils/fakeAuth'

  @Component
  export default class GlobalHeader extends Vue{
    public logout(){
      this.$store.dispatch('Logout').then(()=>{
        this.$router.push('/user/login')
      })
    }

  }

</script>

<style lang="scss" scoped>

</style>