<template>
  <div class="divTable" :class="[divTable, hasBorder]">
    <!-- header -->
    <div class="divTable-thead" @click="tableHeaderClick" @dblclick="tableHeaderDblclick" :style="columnsStyle" v-if="showHeader">
      <div
        class="divTable-thead__th"
        :class="textAlgin(item)"
        :style="divStyle(item)"
        v-for="(item, index) in columns"
        :key="index">
        <div class="divTable-thead__tr" v-if="!item.render">
          <div class="divTable-table__cell">
            <span>{{item.title}}</span>
          </div>
        </div>
        <div class="divTable-table__cell" v-else>
          <table-thead class="divTable-thead__tr" :render="item.render" />
        </div>
      </div>
    </div>
    <!-- container -->
    <div class="divTable-main">
      <div class="divTable-main__noData" v-if="!data.length">暂无数据</div>
      <template v-else>
        <div
          class="divTable-main__tr"
          v-for="(list, listIndex) in data"
          :style="trStyle(listIndex)"
          @click="tableTrClick(list, listIndex)"
          @dblclick="tableTrDblclick(list, listIndex)"
          :key="listIndex">
          <div
            class="divTable-main__td"
            :style="divStyle(item)"
            v-for="(item, itemIndex) in columns"
            :class="textAlgin(item)"
            :key="itemIndex">
              <div class="divTable-table__cell">
                <span>{{tdKeyRender(data[listIndex], [item.key])}}</span>
              </div>
            </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import tableThead from './components/header-render.js'
import { defaultCoreCipherList } from 'constants';
export default {
  components: {
    tableThead
  },
  computed: {
    columnsStyle () {
      let style = {}
      style.height = this.headerHeight + 'px'
      return style
    },
    divTable () {
      let Class = this.hasShowBorder ? 'divTable-border' : ''
      return Class
    },
    hasBorder () {
      let Class = ''
      if (!this.hasShowBorder) {
        return ''
      }
      if (this.hasHorizontalBorder && this.hasVerticalBorder) {
        return 'divTable-horivert__border'
      }
      Class += this.hasHorizontalBorder ? 'divTable-hori__border ' : ''
      Class += this.hasVerticalBorder ? 'divTable-vert__border ' : ''
      return Class
    }
  },
  methods: {
    tableTrClick (list, index) {
      this.$emit('row-click', list, index)
    },
    tableTrDblclick (list, index) {
      this.$emit('row-dblclick', list, index)
    },
    tableHeaderClick (list, index) {
      this.$emit('header-click', list, index)
    },
    tableHeaderDblclick (list, index) {
      this.$emit('header-dblclick', list, index)
    },
    trStyle (index) {
      let style = {}
      style['background'] = index % 2 === 0 ? this.evenBgColor : this.oddBgColor
      return style
    },
    textAlgin (key) {
      if (key.align) {
        return 'divTable-th__' + key.align
      }
    },
    divStyle (item) {
      const type = ['width', 'minWidth', 'maxWidth']
      const flexNoe = ['width', 'minWidth', 'maxWidth']
      let sObj = {}
      type.map((list, index) => {
        if (list in item) {
          sObj[list] = item[list]
          if (flexNoe.includes(list)) {
            sObj['flex'] = 'none'
          }
        }
      })
      return sObj
    },
    tdKeyRender (item, key) {
      try {
        return item[key]
      } catch (error) {
        return ''
      }
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    hasHorizontalBorder: {
      type: Boolean,
      default: false
    },
    hasVerticalBorder: {
      type: Boolean,
      default: false
    },
    hasShowBorder: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    oddBgColor: {
      type: String,
      default: '#f8f9fb'
    },
    evenBgColor: {
      type: String,
      default: '#fff'
    },
    headerHeight: {
      type: Number,
      default: 40
    }
  }
}
</script>

<style lang='scss'>
$priClass: 'divTable';
$themes-bj-color: #f8f9fb; // 背景颜色
$themes-active-bj-color: #eef4fd; // hover背景颜色
$themes-border-color: #eceaea; // 边框颜色
$themes-font-size: 13px; // 字体大小
$themes-color: #4b5263; // 主题颜色

.#{$priClass} {
  *{
    box-sizing: border-box;
  }
  &-border {
    border:1px solid $themes-border-color;
  }
  &-hori__border{
    .divTable-main__tr:not(:nth-last-child(1)) {
      border-bottom: 1px solid $themes-border-color;
    }
  }
  &-vert__border{
    .divTable-main__td:not(:nth-last-child(1)) {
      border-right: 1px solid $themes-border-color;
    }
  }
  &-horivert__border{
    .divTable-main__tr:not(:nth-last-child(1)) {
      border-bottom: 1px solid $themes-border-color;
    }
    .divTable-main__td:not(:nth-last-child(1)), .divTable-thead__th:not(:nth-last-child(1)) {
      border-right: 1px solid $themes-border-color;
    }
  }
  &-th__left {
    text-align: left;
    .divTable-table__cell{
      text-align: left;
    }
  }
  &-th__center {
    text-align: center;
    .divTable-table__cell{
      text-align: center;
    }
  }
  &-th__right {
    text-align: right;
    .divTable-table__cell{
      text-align: right;
    }
  }
  &-table__cell{
    display: table;
    height:100%;
    width: 100%;
    text-align: left;
    span{
      display: table-cell;
      vertical-align: middle;
    }
  }
  // header
  &-thead {
    display: flex;
    background: $themes-bj-color;
    &__th {
      flex:1;
      font-size: $themes-font-size;
      padding: 10px;
      color: $themes-color;
      font-weight: 600;
    }
    &__tr{
      height:100%;
    }
  }
  // container
  &-main {
    &__noData {
      text-align: center;
      padding: 30px;
      font-size: 17px;
      letter-spacing: 2px;
      color: $themes-color;
    }
    &__tr{
      display:flex;
      transition: .3s;
      &:hover{
        background: $themes-active-bj-color !important;
      }
    }
    &__td{
      font-size: 12px;
      flex:1;
      padding: 15px 10px;
      color: $themes-color;
    }
  }
}
</style>
