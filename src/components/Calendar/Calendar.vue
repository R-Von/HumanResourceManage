<template>
  <div class="calendar-box">
    <a-row class="calendar-header">
      <p class="cal-hd_title"> {{Dates}}考勤日历</p>
      <div class="cal-hd_extra">
        <a-row>
          <a-col :span="8">
            <div class="hd-info">
              <span>迟到</span>
              <p>0 次</p>
            </div>
          </a-col>
           <a-col :span="8">
            <div class="hd-info">
              <span>早退</span>
              <p>0 次</p>
            </div>
          </a-col>
           <a-col :span="8">
            <div class="hd-info">
              <span>请假</span>
              <p>0 天</p>
            </div>
          </a-col>
        </a-row>
      </div>
    </a-row>
    <a-calendar 
      :validRange="validRanges"  
      @select="dateSelect" 
    >
      <ul class="events" slot="dateCellRender" slot-scope="value">
        <li v-for="(item,index) in getListData(value)" :key="index">
          <a-badge :status="item.type" :text="item.content" />
        </li>
      </ul>
    </a-calendar>

    <a-modal
      title="Basic Modal"
      v-model="visible"
      @ok="handleOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>

  </div>
  
</template>

<script lang="ts">
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import { Vue , Component } from 'vue-property-decorator'

@Component
export default class Calendar extends Vue{
  visible:boolean = false
  get Dates():string{
    var date = new Date();
    return `${date .getFullYear()}年${date .getMonth()+1}月`
  }
  validRanges = [moment('20190801'),moment('20190820')]
  listDatas:any = []
  defaultValues:any = moment().endOf('month')

  setListDatas():void{
    

    let state = [
      {
        type:'success',
        content:'正常!'
      },
      {
        type:'warning',
        content:'迟到！'
      },
      {
        type:'error',
        content:'早退！'
      }
    ]

    for(var i = 1;i<=moment().date();i++){
      let data = [state[Math.round(Math.random()*2)],state[Math.round(Math.random()*2)]]
      
      this.listDatas.push(data)
    }

  }

  getListData(value:any){
    if(value.month()!==new Date().getMonth()){
      return []
    }
    return this.listDatas[value.date()-1]
  }

  dateSelect(value:any):void{
    let state = this.listDatas[value.date()-1]
    console.log(state)
    this.visible = true
  }

  showModal() {
    this.visible = true
  }

  handleOk(e:any) {
    console.log(e);
    this.visible = false
  }

  private mounted(){
    this.setListDatas()
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
</style>