<template>
  <div id="app">
    <div-table
      :has-show-border='true'
      :has-horizontal-border="true"
      :show-header='true'
      :column-cell-class-name="columnCellClassName"
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
            return h('span', '这是render函数1')
          }
        },
        {
          title: '名称',
          key: 'name',
          align: 'center',
          width: '400px'
        },
        {
          title: '成本',
          key: 'product',
          align: 'center',
          width: '50px'
        },
        {
          title: '数量',
          key: 'num',
          align: 'center'
        },
        {
          title: '创建时间',
          key: 'product',
          align: 'center'
        },
        {
          title: '更新时间',
          key: 'num',
          align: 'center'
        },
        {
          title: '排序',
          key: 'product',
          align: 'center'
        },
        {
          title: '操作',
          key: 'action',
          align: 'center'
        }
      ],
      data: [
        {
          date: (h, parmas) => {
            return h('span', '这是render函数渲染的')
          },
          name: '这是一个名称1',
          product: '这是一个成本1',
          num: '这是一个数量1',
          action: (h, parmas) => {
            return h('button', {
              on: {
                click: () => {
                  console.log(parmas)
                }
              }
            }, '删除')
          }
        },
        {
          date: '这是render里的2',
          name: '这是一个名称2',
          product: '这是一个成本2',
          num: '这是一个数量2',
          action: (h, parmas) => {
            return h('button', '删除')
          }
        },
        {
          date: '这是render里的3',
          name: '这是一个名称3',
          product: '这是一个成本3',
          num: '这是一个数量3',
          action: (h, parmas) => {
            return h('button', '删除')
          }
        },
        {
          render: (h, parmas) => {
            const _this = this
            return h('span', {
              style: {
                padding: '10px',
                textAlign: 'center',
                display: 'block',
                width: '100%',
                cursor: 'pointer'
              },
              on: {
                click: function () {
                  _this.data.splice(_this.data.length - 1, 0, {
                    date: '1',
                    name: '2',
                    product: '3',
                    num: '4'
                  })
                }
              }
            }, '添加一条数据')
          }
        }
      ]
    }
  },
  methods: {
    columnCellClassName (item, index) {
    }
  },
  components: {
    divTable
  }
}
</script>
