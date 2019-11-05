<template>
  <page-views>
    <a-card>
      <!-- 请假列表 -->
      <div class="table-operator">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="3">
            <a-button type="primary" icon="plus" @click="addApply()">请假申请</a-button>
          </a-col>
          <!-- <a-col :span="6" :offset="8" style="text-align: right">
            <a-input-search placeholder="请输入员工姓名" style="width: 200px" @search="onSearch" />
          </a-col> -->
        </a-row>    
      </div>  
      <a-table :columns="columns" :dataSource="datas" bordered :rowKey="record=>record.id">
        <template slot="type" slot-scope="index,item">
          <div class="staff-status">
            <p v-if="item.holidaytype===0" class="staff-quit">事假</p>  
            <p v-if="item.holidaytype===1" class="staff-quit">病假</p>
            <p v-if="item.holidaytype===2" class="staff-incumbency">年假</p>
            <p v-if="item.holidaytype===3" class="staff-incumbency">婚假</p>
          </div>
        </template>
        <template slot="status" slot-scope="index,item">
          <div class="staff-status">
            <p v-if="item.status===0" class="staff-incumbency">未审批</p>  
            <p v-if="item.status===1" class="">已同意</p>
            <p v-if="item.status===2" class="staff-quit">已拒绝</p>  
          </div>
        </template>
        <template slot="operator" slot-scope="index,item">
          <div class="staff-operator">
            <a-button type="danger" class="edit" ghost>编辑</a-button>
            <a-button v-if="item.status===1" type="primary">同意</a-button>
          </div>
        </template>
      </a-table>
    </a-card>
  </page-views>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'
import { PageViews } from '@/layouts'

/**
 * 定义请假列表数据
 */
interface dataItem{
  id:number,
  name:string,
  holidaytime:string,
  applytime:string,
  reason:string,
  holidaytype:number,
  status:number
}

@Component({
  components:{
    PageViews
  }
})

export default class Holiday extends Vue{
  private mounted(){
    console.log('Holiday  Index')
  }

  columns:any = [
    {
      title: '姓名',
      dataIndex: 'name',
      key:'name'
      // scopedSlots: { customRender: 'name' },
    },
    {
      title: '请假时间',
      className: 'holidaytime',
      dataIndex: 'holidaytime'
    },
    {
      title: '申请提交时间',
      className: 'applytime',
      dataIndex: 'applytime'
    },
    {
      title: '请假理由',
      className: 'reason',
      dataIndex: 'reason'
    },
    {
      title: '请假类型',
      className: 'holidaytype',
      dataIndex: 'holidaytype',
      scopedSlots: { customRender: 'type' }
    },{
      title: '是否同意',
      className: 'status',
      dataIndex: 'status',
      scopedSlots: { customRender: 'status' }
    },
    {
      title: '操作',
      className: 'operator',
      dataIndex: 'operator',
      scopedSlots: { customRender: 'operator' },
    }
  ]

  datas:any = [
    {
      id:0,
      name: '李四',
      holidaytime:'2019-08-28 - 2019-09-01',
      applytime:'2019-08-28',
      reason: '理由理由理由',
      status: 1,
      holidaytype: 0
    },{
      id:1,
      name: '张三',
      holidaytime:'2019-08-28 - 2019-09-01',
      applytime:'2019-08-28',
      reason: '理由理由理由',
      status: 1,
      holidaytype: 0
    },{
      id:2,
      name: '李四',
      holidaytime:'2019-08-28 - 2019-09-01',
      applytime:'2019-08-28',
      reason: '理由理由理由',
      status: 0,
      holidaytype: 2
    },{
      id:3,
      name: '王武',
      holidaytime:'2019-08-28 - 2019-09-01',
      applytime:'2019-08-28',
      reason: '理由理由理由',
      status: 1,
      holidaytype: 0
    },{
      id:4,
      name: '陈六',
      holidaytime:'2019-08-28 - 2019-09-01',
      applytime:'2019-08-28',
      reason: '理由理由理由',
      status: 0,
      holidaytype: 0
    }
  ]
}
</script>

<style lang="scss" scoped>
  .table-operator {
    margin-bottom: 20px;
  }
  .staff-status {
    text-align: center;
  }
  .edit {
    margin-right: 10px;
  }
  .staff-incumbency { 
    color: #52c41a;
  }
  .staff-quit {
    color: #f5222d;
  }
</style>