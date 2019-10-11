<template>
  <!-- <div> -->
  <a-button class="clockIn" type="primary" shape="circle">
    <p class="clockin-title">上班打卡</p>
    <p class="clockin-time">08:31:12</p>
  </a-button>
  <!-- </div> -->
</template>

<script lang="ts"> 

import { Vue , Component } from 'vue-property-decorator'

@Component
export default class ClockIn extends Vue{
  timer:any = null
  time:string = ''

  // private 
  mounted() {
    
  }
}


</script>

<style lang="scss">
.clockIn{
  width:80px;
  height:80px;
  position: relative;
  // p{
  //   font-size: 14px;
  //   margin-top: 10px;
  // }
  .clockin-title{
    font-size: 14px;
    line-height: 70px;
  }
  .clockin-time{
    position: absolute;
    font-size: 12px;
    bottom:0;
    text-align: center;
    width:100%;
  }

}
</style>