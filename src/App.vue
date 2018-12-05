<template>
  <div id="app">
    <div-table
      :has-show-border='true'
      :has-horizontal-border="true"
      :show-header='true'
      :has-vertical-border="true"
      :data="data"
      :columns='columns'></div-table>
  </div>
</template>

<script>
import divTable from './components/index'
export default {
  name: 'App',
  data () {
    return {
      columns: [
        {
          title: '日期',
          align: 'center',
          key: 'date',
          width: '200px',
          minWidth: '300px',
          maxWidth: '300px',
          render: (h, parmas) => {
            return h('span', '这是render函数')
          }
        },
        {
          title: '名称',
          key: 'name',
          align: 'center'
        },
        {
          title: '成本',
          key: 'product',
          align: 'center'
        },
        {
          title: '数量',
          key: 'num',
          align: 'center'
        }
      ],
      data: [
        {
          date: '这是render里的1这是render里的1这是render里的1这是render里的1这是render里的1这是render里的1这是render里的1这是render里的1这是render里的1这是render里的1这是render里的1这是render里的1这是render里的1',
          name: '这是一个名称1',
          product: '这是一个成本1',
          num: '这是一个数量1'
        },
        {
          date: '这是render里的2',
          name: '这是一个名称2',
          product: '这是一个成本2',
          num: '这是一个数量2'
        },
        {
          date: '这是render里的3',
          name: '这是一个名称3',
          product: '这是一个成本3',
          num: '这是一个数量3'
        }
      ]
    }
  },
  components: {
    divTable
  }
}
</script>
