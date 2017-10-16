<template lang="pug">
  section.information
    h2 参考確率
    table.table
      thead.table-head
        tr.table-tr
          th.table-th 強化値
          th.table-th 確率
          th.table-th アデナ
          th.table-th スクロール数
          th.table-th マーブル数
      tbody.table-body
        tr.table-tr(v-for="data in masterData")
          td.table-td(v-text="data.level")
          td.table-td(v-text="percentFormat(data.probability)")
          td.table-td(v-text="numberWithDelimiter(data.adenaQuantity)")
          td.table-td(v-text="data.scrollQuantity")
          td.table-td(v-text="data.marbleQuantity")
</template>

<script>
import { masterData } from '@/data'

export default {
  name: 'Information',
  data () {
    return {
      masterData: masterData // masterData
    }
  },
  
  methods: {
    percentFormat(value) {
      return `${value * 100}%`
    },
    numberWithDelimiter(value) {
      return value.toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  
  &-th {
    background-color: #c6c6c6;
    text-align: center;
  }
  
  &-td {
    text-align: right;
  }
  
  &-td, &-th {
    border: 1px solid #c6c6c6;
    padding: 2px 8px;
  }
}
</style>
