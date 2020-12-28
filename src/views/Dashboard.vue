<template>
  <v-container>
    <v-row>
      <v-col sm="3" cols="12" v-for="item in summary" v-bind:key="item.name">
        <v-alert :type="item.result">
          <v-row>
            <v-col cols="6" class="text-h3">
              {{item.name}}
            </v-col>
            <v-col cols="6">
              <v-row no-gutters>
                <v-col cols="12" class="text-center text-h4">
                  {{item.summary}}
                </v-col>
                <v-col cols="12" class="text-center text-subtitle-2">
                  {{item.detail}}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      summary: []
    }
  },
  mounted () {
    const habit = this.$store.getters.GET_HABIT
    
    habit.forEach(x => {
      let total = 0
      let success = 0
      x.records.forEach(y => {
        total = total + 1
        success = y.goals.every(z => z) ? success + 1 : success
      })
      let rate = total > 0 ? Math.round((success / total) * 100 * 100) / 100 : 0
      let result = rate >= 75 ? 'success' : (rate >=50 ? 'warning' : 'error')

      if (x.name === 'Weight') {
        this.summary.push({ name: x.name, result: result, summary: `-`, detail: `-` })
      } else {
        this.summary.push({ name: x.name, result: result, summary: `${rate}%`, detail: `(${success}/${total})` })
      }
    })
  }
}
</script>

<style>
</style>