<template>
  <page-views>
    <div class="content">
      <a-card>
        <a-form>
          <a-form-item
            label="姓名："
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
          >
            张三
          </a-form-item>
          <a-form-item
            label="基本工资："
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
          >
          5000
          </a-form-item>
          <a-form-item
            label="收款账户："
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
          >
          6228480000000000000
          </a-form-item>
          <a-form-item
            label="请假扣除："
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
          >
            <span style="color: red">0</span>
          </a-form-item>
          <a-form-item
            label="迟到扣除："
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
          >
            <span style="color: red">50</span>
          </a-form-item>
          <a-form-item
            label="福利扣除："
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
          >
            <span style="color: red">30</span> 
          </a-form-item>
          <a-form-item
            label="加班工资："
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
          >
            <span style="color: green">200</span>
          </a-form-item>
          <a-form-item
            label="其他补贴："
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
          >
            <span style="color: green">100</span>
          </a-form-item>
          <a-form-item
            label="实发工资："
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
          >
            5220
          </a-form-item>
          
          <a-form-item
            :wrapper-col="{ span: 12, offset: 5 }"
          >
            <a-button
              type="primary"
              html-type="submit"
            >
              确认
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>

    <!-- <a-card>
      <div class="table-operator">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="3">
          </a-col>
          <a-col :span="6" :offset="8" style="text-align: right">
            <a-input-search placeholder="请输入员工姓名" style="width: 200px" @search="onSearch" />
          </a-col>
        </a-row>    
      </div>  
      <a-table :columns="columns" :dataSource="datas" bordered :rowKey="record=>record.id">
        <template slot="agree" slot-scope="index,item">
          <div class="staff-status">
            <p v-if="item.is_sure===0" class="staff-incumbency">已确认</p>  
            <p v-if="item.is_sure===1" class="staff-quit">未确认</p>  
          </div>
        </template>
        <template slot="operator" slot-scope="index,item">
          <div class="staff-operator">
            <a-button class="edit" type="primary">编辑</a-button>
          </div>
        </template>
      </a-table>
    </a-card> -->
  </page-views>
  
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'
import { PageViews } from '@/layouts'

@Component({
  components:{
    PageViews
  }
}) 

/**
 * 定义员工列表数据
 */
interface dataItem{
  id: number,
  name:string,
  base_price:number,
  holiday_price:number,
  overtime_price:number,
  late_price:number,
  welfare_price:number,
  other_price:number,
  real_price:number,
  is_sure:number,
  account:string
}

export default class Pay extends Vue{

  columns:any = [
    {
      title: '姓名',
      dataIndex: 'name',
      key:'name'
      // scopedSlots: { customRender: 'name' },
    },
    {
      title: '基本工资',
      className: 'base_price',
      dataIndex: 'base_price'
    },
    {
      title: '请假扣除',
      className: 'holiday_price',
      dataIndex: 'holiday_price'
    },
    {
      title: '迟到扣除',
      className: 'late_price',
      dataIndex: 'late_price'
    },
    {
      title: '福利扣除',
      className: 'welfare_price',
      dataIndex: 'welfare_price'
    },
    {
      title: '加班补贴',
      className: 'overtime_price',
      dataIndex: 'overtime_price'
    },
    {
      title: '其他补贴',
      className: 'other_price',
      dataIndex: 'other_price'
    },
    {
      title: '加班补贴',
      className: 'overtime_price',
      dataIndex: 'overtime_price'
    },
    {
      title: '实发工资',
      className: 'real_price',
      dataIndex: 'real_price'
    },
    {
      title: '是否确认',
      className: 'is_sure',
      dataIndex: 'is_sure',
      scopedSlots: { customRender: 'agree' },
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
      id: 0,
      name: '王五',
      base_price: 6000,
      holiday_price: 0,
      overtime_price:0,
      late_price:0,
      welfare_price:0,
      other_price:10,
      real_price:6010,
      is_sure: 0,
      account:'6448480000000000000'
    },{
      id: 1,
      name: '张三',
      base_price: 5000,
      holiday_price:200,
      overtime_price:200,
      late_price:20,
      welfare_price:20,
      other_price:50,
      real_price:5010,
      is_sure: 1,
      account:'6448480000000000001'
    },
    {
      id: 2,
      name: '李四',
      base_price: 5000,
      holiday_price:200,
      overtime_price:200,
      late_price:20,
      welfare_price:20,
      other_price:50,
      real_price:5010,
      is_sure: 0,
      account:'6448480000000000002'
    },
    {
      id: 3,
      name: '李武',
      base_price: 5050,
      holiday_price:200,
      overtime_price:200,
      late_price:20,
      welfare_price:20,
      other_price:50,
      real_price:5060,
      is_sure: 1,
      account:'6448480000000000003'
    }
  ]


  onSearch(value) {
    console.log(value);
  }
  private mounted(){
    console.log('Staff  Index')
  }
  

  private mounted(){
    console.log('Pay  Index')
    // moment
    
  }
}
</script>

<style lang="scss" scoped>
  .table-operator {
    margin-bottom: 20px;
  }
  .staff-operator, .staff-status {
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