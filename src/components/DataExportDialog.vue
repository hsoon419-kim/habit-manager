<template>
  <div>
    <v-dialog
      :value="dialog"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title>
          Download
        </v-card-title>

        <v-card-text>
          Please click "OK" to download data file.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="ok"
          >
            OK
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="cancel"
          >
            CANCEL
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'dialog',
      event: 'change'
    },
    props: {
      dialog: {
        type: Boolean,
        default: false
      },
      data: {
        type: String,
        default: ''
      }
    },
    methods: {
      ok () {
        let a = document.createElement('a')
        let csvFile = new Blob([this.data], {type: "text/txt"})

        document.body.appendChild(a)
        a.href = window.URL.createObjectURL(csvFile)
        a.download = 'data.txt'

        a.click()

        document.body.removeChild(a)

        this.$emit('change', false)
      },
      cancel () {
        this.$emit('change', false)
      }
    }
  }
</script>

<style>

</style>