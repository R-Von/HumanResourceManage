<template>
  <!-- <a-card>
    打卡
  </a-card> -->
  <page-views>
    <div slot="userInfo" class="row">
        <!-- pageheader -->
      <div class="avatar">
        <a-avatar :src="user.avatar" />
      </div>
      <div class="headerContent">
        <div class="title">{{timeFix()}}，{{user.name}}</div>
        <div>前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台</div>
      </div>
      <div class="extra">
        <a-row class="more-info">
          <a-col :span="8">
             <clock-in />
          </a-col>
          <a-col :span="8">
          </a-col>
          <a-col :span="8">
          </a-col>
        </a-row>
      </div>
    </div>
    <div>
    <a-card :bordered="false" :body-style="{padding:'24px 32px'}">
      <Calendar />
    </a-card>
    </div>
  </page-views>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'
import { PageViews } from '@/layouts'
import { State , Getter } from 'vuex-class'
import ClockIn from '@/components/ClockIn'
import Calendar from '@/components/Calendar'


@Component({
  components:{
    PageViews,
    ClockIn,
    Calendar
  }
}) 
export default class Sign extends Vue{
  @State('user') user!:any


  timeFix() {
    const time = new Date()
    const hour = time.getHours()
    return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
  }

  private mounted(){
    console.log('SignIn  Index')
  }
}
</script>

<style lang="scss" scoped>
.more-info{
  height:100%;
}
</style>