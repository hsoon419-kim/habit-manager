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
          <v-textarea
            solo
            :value="data"
          ></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="$emit('change', false)"
          >
            OK
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
    }
  }
</script>

<style>

</style>