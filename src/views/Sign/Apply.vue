<template>
<page-views>
  <a-card>
    <!-- 加班申请 -->
    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="addApply()">提交申请</a-button>
    </div>  
    <a-table :columns="columns" :dataSource="datas" bordered :rowKey="record=>record.id">
      <template slot="status" slot-scope="index,item">
        <div class="apply-status">
          <p v-if="item.status===0" class="apply-pending">未审批</p>  
          <p v-if="item.status===1" class="apply-resolve">已同意</p>  
          <p v-if="item.status===2" class="apply-reject">已拒绝</p>  
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
 * 定义加班申请表数据
 */
interface dataItem{
  id:number,
  overtime:string,
  reason:string,
  status:number,
  remarks:string
}



@Component({
  components:{
    PageViews
  }
})
export default class Apply extends Vue{
  columns:any = [
    {
      title: '加班时间',
      dataIndex: 'overtime',
      key:'overtime'
      // scopedSlots: { customRender: 'name' },
    },
    {
      title: '加班理由',
      className: 'reason',
      dataIndex: 'reason'
    },
    {
      title: '状态',
      className: 'status',
      dataIndex: 'status',
      scopedSlots: { customRender: 'status' },
    },
    {
      title: '备注',
      className: 'remarks',
      dataIndex: 'remarks'
    }
  ]

  datas:any = [
    {
      id:1,
      overtime:'19:00--22:00',
      reason:'原因原因',
      status:0,
      remarks:'备注备注备注'
    },
    {
      id:2,
      overtime:'19:00--21:00',
      reason:'原因原因',
      status:1,
      remarks:'备注备注备注'
    },
    {
      id:3,
      overtime:'19:00--20:00',
      reason:'原因原因',
      status:2,
      remarks:'备注备注备注'
    }
  ]


  private mounted(){
    // console.log('Sign Apply')
  }
}
</script>

<style lang="scss" scoped>
.table-operator {
  margin-bottom: 18px;

  button {
    margin-right: 8px;
  }
}
.apply-resolve{
  color:#52c41a
}
.apply-reject{
  color:#f5222d

}
</style>