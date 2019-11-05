<template>
  <a-card>
    <a-table :columns="columns" :dataSource="tableData" bordered :rowKey="record=>record.id">
      <template slot="title">
        <!-- Header -->
        <!-- {{currentPageData}} -->
        <a-row>
          
          <a-col :span="10">
            <a-row>
              <a-col :span="8">
                <div class="title-info">
                  <span>年假剩余</span>
                  <p>1 天</p>
                </div>
              </a-col>
              <a-col :span="8">
                <div class="title-info">
                  <span>病假剩余</span>
                  <p>1 天</p>
                </div>
              </a-col>
              <a-col :span="8">
                <div class="title-info">
                  <span>调休剩余</span>
                  <p>1 天</p>
                </div>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="10"></a-col>
          <a-col :span="4">
            <a-button type="primary" @click="addNewApply" style="float:right;margin-top:9px">提交请假申请</a-button>
          </a-col>

        </a-row>
      </template>

      <template slot='type' slot-scope="text">
        <!-- 年假 0 调休 1  病假 2 事假 3 -->
        <p v-if="text===0">年假</p>
        <p v-if="text===1">调休</p>
        <p v-if="text===2">病假</p>
        <p v-if="text===3">事假</p>
        
      </template>

      <template slot='process' slot-scope="text">
        <!-- 未审批 0 已同意 1 已拒绝 2 -->
        <p v-if="text===0">未审批</p>
        <p v-if="text===1">已同意</p>
        <p v-if="text===2">已拒绝</p>
      </template>

      <template slot='remark' slot-scope="text">
        <a-tooltip>
          <template slot="title">
            {{text}}
          </template>
          {{text.length>4?`${text.substring(0,4)}...`:text}}
        </a-tooltip>
      </template>

      <template slot="operate" slot-scope="text,record,index">
        <a-button type="link" @click="showCancel(index)"  :disabled="record.process!=0">撤销</a-button>
        <a-divider type="vertical" />
        <a-button type="link" >查看详情</a-button>
      </template>

    </a-table>
    <apply-modal 
      :show="applyShow" 
      @confirm="confirmApply" 
      @cancel="cancelApply" 

    />
  </a-card>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'
import ApplyModal from '@/components/HolidayList/ApplyModal.vue'

@Component({
  components:{
    ApplyModal
  }
}) 
export default class Holiday extends Vue{
  columns:any = [
    {
      title:'请假时间',
      dataIndex:'time',
      // 请假时间  请假类型（ 年假 调休 事假 病假）
      // 请假流程 操作 备注
    },{
      title:'请假类型',
      dataIndex:'type',
      scopedSlots: { customRender: 'type' }
    },{
      title:'请假流程',
      dataIndex:'process',
      scopedSlots: { customRender: 'process' }      
    },{
      title:'备注',
      dataIndex:'remark',
      scopedSlots: { customRender: 'remark' }
    },{
      title:'操作',
      dataIndex:'operate',
      scopedSlots: { customRender: 'operate' }
    }
  ]
  tableData:any = []
  applyShow:boolean = false

  getListData():void{
    this.$http.get('/holiday/list').then((res:any)=>{
      console.log(res)
      if(res.code===200){
        this.tableData = res.data
      }
    }).catch(err=>{
      console.log(err)
    })
  }
  showCancel(index:number):void{
    let _this = this
    this.$confirm({
      title:'确认？',
      content:'是否确认撤销？',
      onOk() {
        _this.tableData.splice(index,1)
        _this.$notification['success']({
          message: '撤销成功',
          description:''
        })
      }
    })
  }

  addNewApply():void{
    this.applyShow = true
  }

  confirmApply(){
    console.log('confirm2')
    this.applyShow = false
    

  }
  cancelApply(){
    console.log('cancel2')
    this.applyShow = false
  }
 
  private mounted(){
    console.log('Holiday  Index')
    this.getListData()
   

  }
}
</script>

<style lang="scss" scoped>
.title-info {
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
<style>
.ant-btn-link {
  color: #1890ff;
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}
.ant-btn-link > a:only-child {
  color: currentColor;
}
.ant-btn-link > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link:hover,
.ant-btn-link:focus {
  color: #40a9ff;
  background-color: transparent;
  border-color: #40a9ff;
}
.ant-btn-link:hover > a:only-child,
.ant-btn-link:focus > a:only-child {
  color: currentColor;
}
.ant-btn-link:hover > a:only-child::after,
.ant-btn-link:focus > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link:active,
.ant-btn-link.active {
  color: #096dd9;
  background-color: transparent;
  border-color: #096dd9;
}
.ant-btn-link:active > a:only-child,
.ant-btn-link.active > a:only-child {
  color: currentColor;
}
.ant-btn-link:active > a:only-child::after,
.ant-btn-link.active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link-disabled,
.ant-btn-link.disabled,
.ant-btn-link[disabled],
.ant-btn-link-disabled:hover,
.ant-btn-link.disabled:hover,
.ant-btn-link[disabled]:hover,
.ant-btn-link-disabled:focus,
.ant-btn-link.disabled:focus,
.ant-btn-link[disabled]:focus,
.ant-btn-link-disabled:active,
.ant-btn-link.disabled:active,
.ant-btn-link[disabled]:active,
.ant-btn-link-disabled.active,
.ant-btn-link.disabled.active,
.ant-btn-link[disabled].active {
  color: rgba(0, 0, 0, 0.25);
  background-color: #f5f5f5;
  border-color: #d9d9d9;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-link-disabled > a:only-child,
.ant-btn-link.disabled > a:only-child,
.ant-btn-link[disabled] > a:only-child,
.ant-btn-link-disabled:hover > a:only-child,
.ant-btn-link.disabled:hover > a:only-child,
.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-link-disabled:focus > a:only-child,
.ant-btn-link.disabled:focus > a:only-child,
.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-link-disabled:active > a:only-child,
.ant-btn-link.disabled:active > a:only-child,
.ant-btn-link[disabled]:active > a:only-child,
.ant-btn-link-disabled.active > a:only-child,
.ant-btn-link.disabled.active > a:only-child,
.ant-btn-link[disabled].active > a:only-child {
  color: currentColor;
}
.ant-btn-link-disabled > a:only-child::after,
.ant-btn-link.disabled > a:only-child::after,
.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-link-disabled:hover > a:only-child::after,
.ant-btn-link.disabled:hover > a:only-child::after,
.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-link-disabled:focus > a:only-child::after,
.ant-btn-link.disabled:focus > a:only-child::after,
.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-link-disabled:active > a:only-child::after,
.ant-btn-link.disabled:active > a:only-child::after,
.ant-btn-link[disabled]:active > a:only-child::after,
.ant-btn-link-disabled.active > a:only-child::after,
.ant-btn-link.disabled.active > a:only-child::after,
.ant-btn-link[disabled].active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
.ant-btn-link:hover,
.ant-btn-link:focus,
.ant-btn-link:active {
  border-color: transparent;
}
.ant-btn-link-disabled,
.ant-btn-link.disabled,
.ant-btn-link[disabled],
.ant-btn-link-disabled:hover,
.ant-btn-link.disabled:hover,
.ant-btn-link[disabled]:hover,
.ant-btn-link-disabled:focus,
.ant-btn-link.disabled:focus,
.ant-btn-link[disabled]:focus,
.ant-btn-link-disabled:active,
.ant-btn-link.disabled:active,
.ant-btn-link[disabled]:active,
.ant-btn-link-disabled.active,
.ant-btn-link.disabled.active,
.ant-btn-link[disabled].active {
  color: rgba(0, 0, 0, 0.25);
  background-color: transparent;
  border-color: transparent;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-link-disabled > a:only-child,
.ant-btn-link.disabled > a:only-child,
.ant-btn-link[disabled] > a:only-child,
.ant-btn-link-disabled:hover > a:only-child,
.ant-btn-link.disabled:hover > a:only-child,
.ant-btn-link[disabled]:hover > a:only-child,
.ant-btn-link-disabled:focus > a:only-child,
.ant-btn-link.disabled:focus > a:only-child,
.ant-btn-link[disabled]:focus > a:only-child,
.ant-btn-link-disabled:active > a:only-child,
.ant-btn-link.disabled:active > a:only-child,
.ant-btn-link[disabled]:active > a:only-child,
.ant-btn-link-disabled.active > a:only-child,
.ant-btn-link.disabled.active > a:only-child,
.ant-btn-link[disabled].active > a:only-child {
  color: currentColor;
}
.ant-btn-link-disabled > a:only-child::after,
.ant-btn-link.disabled > a:only-child::after,
.ant-btn-link[disabled] > a:only-child::after,
.ant-btn-link-disabled:hover > a:only-child::after,
.ant-btn-link.disabled:hover > a:only-child::after,
.ant-btn-link[disabled]:hover > a:only-child::after,
.ant-btn-link-disabled:focus > a:only-child::after,
.ant-btn-link.disabled:focus > a:only-child::after,
.ant-btn-link[disabled]:focus > a:only-child::after,
.ant-btn-link-disabled:active > a:only-child::after,
.ant-btn-link.disabled:active > a:only-child::after,
.ant-btn-link[disabled]:active > a:only-child::after,
.ant-btn-link-disabled.active > a:only-child::after,
.ant-btn-link.disabled.active > a:only-child::after,
.ant-btn-link[disabled].active > a:only-child::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  content: '';
}
</style>