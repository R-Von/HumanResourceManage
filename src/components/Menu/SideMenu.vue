<template>
  <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      class="sider"
    >
      <Logo title="HRM"/>
      <a-menu
      style="padding: 16px 0px;"
      @click="handleClick"
      :defaultSelectedKeys="['1']"
      :openKeys.sync="openKeys"
      mode="inline"
      theme="dark"
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><a-icon type="home" /><span>考勤管理</span></span>
        <a-menu-item key="1">打卡</a-menu-item>
        <a-menu-item key="2">加班申请</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"><a-icon type="schedule" /><span>请假管理</span></span>
        <a-menu-item key="3">请假申请</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3" @titleClick="titleClick">
        <span slot="title"><a-icon type="dollar" /><span>薪酬管理</span></span>
        <a-menu-item key="4">工资单</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4" @titleClick="titleClick">
        <span slot="title"><a-icon type="team" /><span>员工管理</span></span>
        <a-menu-item key="5">离职申请</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub5" @titleClick="titleClick">
        <span slot="title"><a-icon type="sound" /><span>公告管理</span></span>
        <a-menu-item key="6">纪念日</a-menu-item>
        <a-menu-item key="7">节假日</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">

import { Component , Vue } from 'vue-property-decorator'
import Logo from '../Tools/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class SideMenu extends Vue{
  
  current = ['mail']
  openKeys = ['sub1']
  collapsed = false

  handleClick (e:any) {
    console.log('click', e)
  }

  titleClick (e:any) {
    console.log('titleClick', e)
  }

}

</script>

<style lang="scss">
.sider {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}

// 菜单样式
.sider {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  position: relative;
  z-index: 10;
  min-height: 100vh;

  .ant-layout-sider-children {
    overflow-y: hidden;

    &:hover {
      overflow-y: auto;
    }
  }

  &.ant-fixed-sidemenu {
    position: fixed;
    height: 100%;
  }

  .logo {
    position: relative;
    height: 64px;
    padding-left: 24px;
    overflow: hidden;
    line-height: 64px;
    background: #002140;
    transition: all .3s;

    img,
    svg,
    h1 {
      display: inline-block;
      vertical-align: middle;
    }

    img,
    svg {
      height: 32px;
    }

    h1 {
      color: #fff;
      font-size: 20px;
      margin: 0 0 0 12px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      font-weight: 600;
      vertical-align: middle;
    }
  }

  &.light {
    background-color: #fff;
    box-shadow: 2px 0px 8px 0px rgba(29, 35, 41, 0.05);

    .logo {
      background: #fff;
      box-shadow: 1px 1px 0px 0px #e8e8e8;

      h1 {
        color: unset;
      }
    }

    .ant-menu-light {
      border-right-color: transparent;
    }
  }
}

</style>