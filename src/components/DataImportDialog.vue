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
            v-model="data"
          ></v-textarea>
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
        data: ''
      }
    },
    methods: {
      ...mapActions ({
        uploadData: 'UPLOAD_DATA'
      }),
      ok () {
        this.uploadData(JSON.parse(this.data))
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