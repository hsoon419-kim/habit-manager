<template>
  <div>
    <v-dialog
      :value="dialog"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title>
          Upload
        </v-card-title>

        <v-card-text>
          <v-file-input
            label="Data file input"
            @change="change"
          ></v-file-input>
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
  import { mapActions } from 'vuex'
  export default {
    model: {
      prop: 'dialog',
      event: 'change'
    },
    props: {
      dialog: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        file: null
      }
    },
    methods: {
      ...mapActions ({
        uploadData: 'UPLOAD_DATA'
      }),
      change (file) {
        this.file = file
      },
      ok () {
        if (this.file !== null) {
          const reader = new FileReader()
          reader.onload = e => this.uploadData(JSON.parse(e.target.result))
          reader.readAsText(this.file)
        }

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