<template>
  <v-container>
    <v-row>

      <!-- Month -->
      <v-col cols="12">
        <v-row>
          <v-col sm="2" cols="12">
            <v-radio-group
              v-model="type"
              row
              >
              <v-radio
                label="All"
                value="ALL"
                ></v-radio>
              <v-radio
                label="Month"
                value="MONTH"
                ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col sm="10" cols="12">
            <month-picker :disabled="type === 'ALL'" v-model="month"></month-picker>
          </v-col>
        </v-row>
      </v-col>

      <!-- Grid -->
      <v-col cols="12">
        <ag-grid-vue
          style="width:100%; height:750px;"
          class="ag-theme-material"
          :columnDefs="columnDefs"
          :rowData="rowData">
        </ag-grid-vue>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import MonthPicker from '../components/MonthPicker'
import moment from 'moment-timezone'

export default {
  components: {
    AgGridVue,
    MonthPicker
  },
  data () {
    return {
      type: 'MONTH',
      month: moment().tz(moment.tz.guess()).format('YYYY-MM'),
      columnDefs: [],
      rowData: []
    }
  },
  watch: {
    type () {
      this.makeGridData()
    },
    month () {
      this.makeGridData()
    }
  },
  mounted () {
    this.makeGridData()
  },
  methods: {
    makeGridData () {
      const habit = this.$store.state.habit

      this.makeColumnDefs(habit)
      this.makeRowData(habit)
    },
    makeColumnDefs (habit) {
      let columnDefs = []

      columnDefs.push({ headerName: 'Date', field: 'Date', pinned: 'left' })

      habit.forEach (x => {
        let group = { headerName: x.name, children: [] }

        x.info.goals.forEach((item, index) => {
          const col = `${x.name}-${index+1}`
          group.children.push({ headerName: item.name, field: col, cellClass: (params) => params.value ? 'cell-class-o' : 'cell-class-x' })
        })

        columnDefs.push(group)
      })

      this.columnDefs = columnDefs
    },
    makeRowData (habit) {
      let rowData = []

      habit.forEach(x => {
        x.records.forEach(y => {
          if (this.type === 'ALL' || y.date.indexOf(this.month) !== -1) {
            let row = rowData.find(o => o.Date === y.date)
            let rowBasic = { Date: y.date }

            if (row === undefined) {
              rowData.push(rowBasic)
              row = rowBasic
            }

            y.goals.forEach((item, index) => {
              row[`${x.name}-${index+1}`] = item
            })
          }
        })

      })

      rowData.sort(function(a, b) {
        return a.Date < b.Date ? -1 : a.Date === b.Date ? 0 : 1
      })

      this.rowData = rowData
    }
  }
}
</script>

<style scoped>
>>> .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border: none;
}
>>> .cell-class-o {
  color: #E8F5E9;
  background-color: #E8F5E9;
}
>>> .cell-class-x {
  color: #FFEBEE;
  background-color: #FFEBEE;
}
</style>