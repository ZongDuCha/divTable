<template>
  <div id="app">
    <div-table
      :has-showBorder='true'
      :show-header='false'
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
          date: '这是日期',
          name: '这是一个名称',
          product: '这是一个成本',
          num: '这是一个数量'
        }
      ]
    }
  },
  components: {
    divTable
  }
}
</script>
