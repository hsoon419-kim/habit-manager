<template>
  <v-container>
    <ag-grid-vue
      style="width:100%; height:850px;"
      class="ag-theme-material"
      :gridOptions="gridOptions"
      :columnDefs="columnDefs"
      :rowData="rowData">
    </ag-grid-vue>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { AgGridVue } from 'ag-grid-vue'

export default {
  components: {
    AgGridVue
  },
  data () {
    return {
      gridOptions: {},
      rowData: []
    }
  },
  computed: {
    ...mapGetters({
      columnDefs: 'GET_VIEW_COLUMN_DEFS',
    })
  },
  mounted () {
    const habit = this.$store.state.habit
    this.rowData = this.makeRowData(habit)
  },
  methods: {
    makeRowData (habit) {
      let rowData = []

      habit.forEach(x => {
        x.records.forEach(y => {
          let row = rowData.find(o => o.Date === y.date)
          let rowBasic = { Date: y.date }

          if (row === undefined) {
            rowData.push(rowBasic)
            row = rowBasic
          }

          y.goals.forEach((item, index) => {
            row[`${x.name}-${index+1}`] = item
          })
        })

      })
      rowData.sort(function(a, b) {
        return a.Date < b.Date ? -1 : a.Date === b.Date ? 0 : 1
      })

      return rowData
    }
  }
}
</script>

<style scoped>
>>> .cell-class-o {
  color: #E8F5E9;
  background-color: #E8F5E9;
}
>>> .cell-class-x {
  color: #FFEBEE;
  background-color: #FFEBEE;
}
</style>