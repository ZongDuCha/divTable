<template>
  <div class="divTable">
    <!-- header -->
    <div class="divTable-thead" :class="[horizontalBorder, divTable]" v-if="!showHeader">
      <div
        class="divTable-thead__th"
        :class="textAlgin(item)"
        :style="divStyle(item)"
        v-for="(item, index) in columns"
        :key="index">
        <span class="divTable-thead__tr" v-if="!item.render">{{item.title}}</span>
        <table-thead class="divTable-thead__tr" :render="item.render" v-else/>
      </div>
    </div>
    <!-- container -->
      <div class="divTable-main" :class="[divTable]">
        <div class="divTable-main_noData" v-if="!data.length">暂无数据</div>
        <template v-else>
          <div class=""></div>
        </template>
      </div>
  </div>
</template>

<script>
import tableThead from './components/header-render.js'
export default {
  components: {
    tableThead
  },
  computed: {
    divTable () {
      let Class = this.hasShowBorder ? 'divTable-border' : ''
      return Class
    },
    horizontalBorder () {
      return 'divTable-hori__border'
    }
  },
  methods: {
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
    hasShowBorder: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang='scss'>
$priClass: 'divTable';
$themes-bj-color: #f8f9fb; // 背景颜色
$themes-border-color: #eceaea; // 边框颜色
$themes-font-size: 13px; // 字体大小
$themes-color: #4b5263; // 主题颜色

.#{$priClass} {
  &-border {
    border:1px solid $themes-border-color;
  }
  &-th__left {
    text-align: left;
  }
  &-th__center {
    text-align: center;
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
    &__th{
      border-left:1px solid $themes-border-color;
      &:nth-child(1) {
        border-left: none;
      }
    }
  }
  // container
  &-main {
    &_noData {
      text-align: center;
      padding: 30px;
      font-size: 17px;
      letter-spacing: 2px;
      color: $themes-color;
    }
  }
}
</style>
