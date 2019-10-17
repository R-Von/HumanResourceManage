<template>
  <page-views>
    <!-- <a-table :columns="columns" :dataSource="data">
      <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :color="tag==='loser' ? 'volcano' : (tag.length > 5 ? 'geekblue' : 'green')"
          :key="tag"
        >
          {{tag.toUpperCase()}}
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a href="javascript:;">Invite 一 {{record.name}}</a>
        <a-divider type="vertical" />
        <a href="javascript:;">Delete</a>
        <a-divider type="vertical" />
        <a href="javascript:;" class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </span>
    </a-table> -->
  </page-views>
  
</template>

<script lang="ts">
import { Vue , Component } from 'vue-property-decorator'

@Component



export default class Staff extends Vue{
//  columns:any = [
//     {
//       dataIndex: 'name',
//       key: 'name',
//       slots: { title: 'customTitle' },
//       scopedSlots: { customRender: 'name' },
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//     {
//       title: 'Tags',
//       key: 'tags',
//       dataIndex: 'tags',
//       scopedSlots: { customRender: 'tags' },
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       scopedSlots: { customRender: 'action' },
//     },
//   ];

//  data:any = [
//     {
//       key: '1',
//       name: 'John Brown',
//       age: 32,
//       address: 'New York No. 1 Lake Park',
//       tags: ['nice', 'developer'],
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       age: 42,
//       address: 'London No. 1 Lake Park',
//       tags: ['loser'],
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       age: 32,
//       address: 'Sidney No. 1 Lake Park',
//       tags: ['cool', 'teacher'],
//     },
//   ];

  private mounted(){
    console.log('Staff  Index')
  }
}
</script>

<style lang="scss" scoped>

</style>