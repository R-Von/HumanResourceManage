<template>
  <page-views>
    <!-- <a-card>
      <div class="table-operator">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="3">
            <a-button type="primary" icon="plus">添加公告</a-button>
          </a-col>
        </a-row>
      </div>  
      <a-table :columns="columns" :dataSource="datas" bordered :rowKey="record=>record.id">
        <template slot="newtype" slot-scope="index,item">
          <div class="staff-status">
            <p v-if="item.newtype===0" class="staff-incumbency">生日祝福</p>  
            <p v-if="item.newtype===1" class="staff-quit">公告</p> 
            <p v-if="item.newtype===2" class="staff-quit">周年纪念</p>   
          </div>
        </template>
        <template slot="operator" slot-scope="index,item">
          <div class="staff-operator">
            <a-button class="edit" type="primary">编辑</a-button>
            <a-button type="danger" ghost>删除</a-button>
          </div>
        </template>
      </a-table>
    </a-card> -->
    <div class="content">
      <a-card>
        <a-form>
          <a-form-item
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
            label="收件人："
          >
            <a-input id="warning" placeholder="请输入收件人姓名" />
          </a-form-item> 

          <a-form-item
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
            label="公告类型"
            has-feedback
          >
            <a-select default-value="1">
              <a-select-option value="1">
                周年纪念
              </a-select-option>
              <a-select-option value="2">
                 公告
              </a-select-option>
              <a-select-option value="3">
                生日祝福
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
            label="标题："
          >
            <a-input id="warning" placeholder="请输入标题" />
          </a-form-item>

          <a-form-item
            label="内容："
            :label-col="{ span: 3 }"
            :wrapper-col="{ span: 12 }"
          >
          <a-textarea
            placeholder="请输入公告内容"
            :autosize="{ minRows: 4, maxRows: 6 }"
          />
          </a-form-item>
          
          <a-form-item
            :wrapper-col="{ span: 12, offset: 5 }"
          >
            <a-button
              type="primary"
              html-type="submit"
            >
              添加
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </page-views>
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'
import { PageViews } from '@/layouts'

/**
 * 定义公告列表数据
 */
interface dataItem{
  id:number,
  title:string,
  content:string,
  sendname:string,
  pubdate:string,
  newtype:number
}

@Component({
  components:{
    PageViews
  }
})

export default class Notice extends Vue{

  columns:any = [
    {
      title: '标题',
      dataIndex: 'title',
      key:'title'
    },
    {
      title: '公告类型',
      className: 'newtype',
      dataIndex: 'newtype',
      scopedSlots: { customRender: 'newtype' },
    },
    {
      title: '发送时间',
      className: 'pubdate',
      dataIndex: 'pubdate'
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
      title: "关于十一放假通知",
      content:"通知，今年十一放假时间为10.1-10.7号，请知悉.",
      sendname:"all",
      pubdate:"2019-09-28",
      newtype: 1
    },
    {
      id:1,
      title: "生日祝福",
      content:"生日快乐，张三！",
      sendname:"张三",
      pubdate:"2019-09-28",
      newtype: 0
    },
    {
      id:2,
      title: "周年纪念",
      content:"祝贺张三同事入职三周年！希望你能和公司继续共同成长",
      sendname:"张三",
      pubdate:"2019-10-20",
      newtype: 2
    }
  ]

  private mounted(){
    console.log('Pay  Index')
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