<template>
  <div class="page-header">
    <!-- pageHeader -->
    <div class="page-header-index-wide">
      <s-breadcrumb />
      <div class="detail">
        <div class="main">
         <div class="row" v-if="this.$slots.pageTitle">
            <slot name="pageTitle" />
         </div>
          <slot name="pageInfo" />
          <slot name="userInfo" />
          <div class="row action" v-if="this.$slots.actions">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue , Component } from 'vue-property-decorator'
  import SBreadcrumb from '../Tools/SBreadcrumb.vue'

  @Component({
    components:{
      SBreadcrumb
    }
  })
  export default class pageHeader extends Vue{

  } 



</script>

<style lang="scss">
.page-header {
  background: #fff;
  padding: 16px 32px;
  border-bottom: 1px solid #e8e8e8;

  .breadcrumb {
    margin-bottom: 16px;
  }

  .detail {
    display: flex;
    /*margin-bottom: 16px;*/

    .avatar {
      flex: 0 1 72px;
      margin: 0 24px 8px 0;

      & > span {
        border-radius: 72px;
        display: block;
        width: 72px;
        height: 72px;
      }
    }

    .main {
      width: 100%;
      flex: 0 1 auto;

      .row {
        display: flex;
        width: 100%;

        .avatar {
          margin-bottom: 16px;
        }
      }

      .title {
        font-size: 20px;
        font-weight: 500;

        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        margin-bottom: 16px;
        flex: auto;
      }
      .logo {
        width: 28px;
        height: 28px;
        border-radius: 4px;
        margin-right: 16px;
      }
      .content,
      .headerContent {
        flex: auto;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;

        .link {
          margin-top: 16px;
          line-height: 24px;

          a {
            font-size: 14px;
            margin-right: 32px;
          }
        }
      }
      .extra {
        flex: 0 1 auto;
        margin-left: 88px;
        min-width: 242px;
        text-align: right;
      }
      .action {
        margin-left: 56px;
        min-width: 266px;
        flex: 0 1 auto;
        text-align: right;
        &:empty {
          display: none;
        }
      }
    }
  }
}
</style>