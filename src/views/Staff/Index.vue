<template>
  <page-views>
    <a-card>
      <!-- 员工列表 -->
      <div class="table-operator">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="3">
            <a-button type="primary" icon="plus" @click="addApply()">添加员工</a-button>
          </a-col>
          <a-col :span="6" :offset="8" style="text-align: right">
            <a-input-search placeholder="请输入员工姓名" style="width: 200px" @search="onSearch" />
          </a-col>
        </a-row>    
      </div>  
      <a-table :columns="columns" :dataSource="datas" bordered :rowKey="record=>record.id">
        <template slot="status" slot-scope="index,item">
          <div class="staff-status">
            <p v-if="item.status===0" class="staff-incumbency">在职</p>  
            <p v-if="item.status===1" class="staff-quit">离职</p>  
          </div>
        </template>
        <template slot="operator" slot-scope="index,item">
          <div class="staff-operator">
            <a-button class="edit" type="primary">编辑</a-button>
            <a-button type="danger" ghost>删除</a-button>
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
 * 定义员工列表数据
 */
interface dataItem{
  id:number,
  name:string,
  addtime:string,
  sex:string,
  status:number,
  birth:string,
  tel:string
}

@Component({
  components:{
    PageViews
  }
})

export default class Staff extends Vue{
  columns:any = [
    {
      title: '姓名',
      dataIndex: 'name',
      key:'name'
      // scopedSlots: { customRender: 'name' },
    },
    {
      title: '性别',
      className: 'sex',
      dataIndex: 'sex'
    },
    {
      title: '入职时间',
      className: 'addtime',
      dataIndex: 'addtime'
    },
    {
      title: '在职状态',
      className: 'status',
      dataIndex: 'status',
      scopedSlots: { customRender: 'status' },
    },
    {
      title: '联系电话',
      className: 'tel',
      dataIndex: 'tel'
    },
    {
      title: '出生年月',
      className: 'birth',
      dataIndex: 'birth'
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
      id:1,
      name: '张三',
      addtime:'2019-08-28',
      sex:'女',
      birth: '1993-08-29',
      status: 0,
      tel: '13800000000'
    },
    {
      id:2,
      name: '王五',
      addtime:'2019-03-04',
      sex:'男',
      status:1,
      birth: '1993-08-29',
      tel: '13800000000'
    },
    {
      id:3,
      name: '李四',
      addtime:'2018-12-12',
      sex:'男',
      status:1,
      birth: '1993-08-29',
      tel: '13800000000'
    }
  ]


  onSearch(value) {
    console.log(value);
  }
  private mounted(){
    console.log('Staff  Index')
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