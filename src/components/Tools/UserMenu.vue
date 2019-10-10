<template>
  <div class='user-wrapper'>
     <div class="content-box">
      <notice-icon class="action"/>
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-avatar class="avatar" size="small" :src="avatar"/>
          <span>{{ nickname }}</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="0">
            <!-- <router-link :to="{ name: 'center' }"> -->
              <a-icon type="user"/>
              <span>个人中心</span>
            <!-- </router-link> -->
          </a-menu-item>
          <a-menu-divider/>
          <a-menu-item key="3">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout"/>
              <span>退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'
import { State , Action , Getter } from 'vuex-class'
import Notices from '@/components/Tools/Notice.vue'

@Component({
  components:{
    NoticeIcon:Notices
  }
})
export default class UserMenu extends Vue{
  @State('user') user!:any
  @Action('Logout') Logout:any
  @Getter('avatar') avatar!:string
  @Getter('name') nickname!:string

  handleLogout(){
    const _this = this
    this.$confirm({
      title:'提示',
      content:'真的要注销登录吗',
      okText:'确定',
      cancelText:'取消',
      onOk(){
        _this.Logout().then(()=>{
          window.location.reload()
        }).catch((err:any)=>{
          _this.$message.error({
            title:'错误',
            description: err.message
          })
        })
      },
      onCancel(){}
    })
  }
}

</script>

<style lang="scss">
.user-wrapper {
  float: right;
  height: 100%;
  padding: 0 12px 0 0;
  background: #fff;
  .action {
    cursor: pointer;
    padding: 0 12px;
    display: inline-block;
    transition: all 0.3s;
    height: 100%;
    color: rgba(0, 0, 0, 0.65);

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }

    .avatar {
      margin: 20px 8px 20px 0;
      color: #1890ff;
      background: hsla(0, 0%, 100%, 0.85);
      vertical-align: middle;
    }

    .icon {
      font-size: 16px;
      padding: 4px;
    }
  }
}
</style>