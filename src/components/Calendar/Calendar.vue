<template>
  <div class="calendar-box">
    <a-spin wrapperClassName size="large" :spinning="loading">
      <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
      <a-row class="calendar-header">
        <p class="cal-hd_title"> 2019年8月考勤日历</p>
        <div class="cal-hd_extra">
          <a-row>
            <a-col :span="8">
              <div class="hd-info">
                <span>迟到</span>
                <p>{{late}} 次</p>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="hd-info">
                <span>早退</span>
                <p>{{early}} 次</p>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="hd-info">
                <span>请假</span>
                <p>{{vocation}} 天</p>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-row>
      <a-calendar 
        :validRange="validRanges"  
        :defaultValue='defaultValues'
        v-model="defaultValues"
        @select="dateSelect" 
      >
        <ul class="events" slot="dateCellRender" slot-scope="value">
          <li v-for="(item,index) in setListData(value)" :key="index">
            <a-badge :status="item.icon" :text="item.content" />
          </li>
        </ul>
      </a-calendar>
    </a-spin>
    <a-modal
      title="打卡详情"
      v-model="visible"
      cancelText="取消"
      okText="确定"
      @ok="handleOK"
    >
      <a-form>
        <a-form-item
          label="签到时间"
        >
           {{state[0].time}}
        </a-form-item>
        <a-form-item
          label="签退时间"
        >
           {{state[1].time}}
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import { Vue , Component } from 'vue-property-decorator'

@Component({
})
export default class Calendar extends Vue{
  visible:boolean = false
  validRanges = [moment('20190801'),moment('20190820')]
  listDatas:any = []
  defaultValues:any = moment('20190820')
  early:string = '0'
  late:string = '0'
  vocation:string = '0'
  loading:boolean = false
  state:any = [{
    time:'09:00'
  },{
    time:'18:00'
  }]

  setListData(value:any){
    if(value.month()!==7||value.day()===6||value.day()===0||value.date()>20){
      return []
    }
    return this.listDatas[value.date()-1]
  }

  getListDatas(){
    this.loading = true
    this.$http.get('/sign/calendar').then((res:any)=>{
      if(res.code===200){
        let data = res.data
        this.listDatas = data.dateLiist
        this.early = data.early
        this.late = data.late
        this.vocation = data.vocation
        this.loading = false
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  dateSelect(value:any):void{
    let state = this.listDatas[value.date()-1]
    this.state = state
    this.visible = true
  }

  handleOK(e:any):void{
    console.log(e)
    this.visible = false
  }
  

  private mounted(){
    this.getListDatas()
  }
}

</script>

<style lang="scss" >
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}

.ant-fullcalendar-header{
  display: none
}

</style>
<style lang="scss" scoped>
  .calendar-header{
    width:100%;
    height: 70px;
    margin-bottom:30px;
    border-bottom:1px solid #dedede
  }
  .cal-hd_title{
    font-size: 16px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    float: left;
    line-height: 50px;
  }
  .cal-hd_extra{
     float: right;
     width:300px;
  }
  .hd-info {
    position: relative;
    text-align: left;
    padding: 0 32px 0 0;
    min-width: 125px;
   
    &.center {
      text-align: center;
      padding: 0 32px;
    }

    span {
      color: rgba(0, 0, 0, .45);
      display: inline-block;
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 4px;
    }
    p {
      color: rgba(0, 0, 0, .85);
      font-size: 16px;
      // line-height: 32px;
      margin: 0;
    }
    em {
      background-color: #e8e8e8;
      position: absolute;
      height: 56px;
      width: 1px;
      top: 0;
      right: 0;
    }
  }
  
  .cal-modal-title{
    color: rgba(0,0,0,.45);
    font-size: 12px;
    line-height: 20px;
  }
</style>