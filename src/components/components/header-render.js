// 列头render
export const tableThead = {
  name: 'TableRenderHeader',
  functional: true,
  props: {
    render: [Function, String],
    column: [Object, Array],
    index: Number,
    key: String
  },
  render: (h, ctx) => {
    const params = {
      column: ctx.props.column,
      index: ctx.props.index,
      key: ctx.props.key
    }
    return ctx.props.render(h, params)
  }
}

// 单元格render
export const tableCell = {
  name: 'TableRenderCell',
  functional: true,
  props: {
    render: [Function, String],
    column: [Object, Array],
    index: Number,
    key: String
  },
  render: (h, ctx) => {
    const params = {
      column: ctx.props.column,
      index: ctx.props.index,
      key: ctx.props.key
    }
    console.log(ctx.props)
    if (typeof ctx.props.render === 'function') {
      return ctx.props.render(h, params)
    } else {
      return h('span', ctx.props.render)
    }
  }
}
