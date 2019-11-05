<template>
  <div class="home">
    <table>
      <thead>
        <tr>
          <template v-for="item in thead">
            <td :key="item.code">{{item.name}}</td>
          </template>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item,index) in tbody">
          <tr :key="index">
            <template v-for="th in thead">
              <td :key="th.code">{{item[th.code]}}</td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default{
  data(){
    return {
      thead:[
        {
          name:'数据A',
          code:"dataA"
        },
        {
          name:'数据B',
          code:"dataB"
        }, 
        {
          name:'数据C',
          code:"dataC"
        },
      ],
      tbody:[
        {
          dataA:"11",
          dataB:"12",
          dataC:"13",
          dataD:"14"
        },
        {
          dataA:"21",
          dataB:"22",
          dataC:"23",
          dataD:"24"
        },
        {
          dataA:"31",
          dataB:"32",
          dataC:"33",
          dataD:"34"
        }
      ]
    }
  }


}
</script>
