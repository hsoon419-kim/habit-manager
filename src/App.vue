<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item
            :key="item.text"
            link
            :to="item.link"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <router-link to="/" style="color:white;text-decoration:none;">Habit management</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="exportDialog = true">
        <v-icon>mdi-download</v-icon>
      </v-btn>
      <v-btn icon @click="importDialog = true">
        <v-icon>mdi-upload</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    
    <data-export-dialog
      v-model="exportDialog"
      :data="downloadData">
    </data-export-dialog>
    <data-import-dialog
      v-model="importDialog">
    </data-import-dialog>
  </v-app>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import DataExportDialog from './components/DataExportDialog'
  import DataImportDialog from './components/DataImportDialog'

  export default {
    components: {
      DataExportDialog,
      DataImportDialog
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'mdi-playlist-check', text: 'Checklist', link: '/checklist' },
        { icon: 'mdi-history', text: 'History', link: '/history' },
        { icon: 'mdi-view-dashboard', text: 'Dashboard', link: '/dashboard' },
        { icon: 'mdi-chart-timeline-variant', text: 'Analysis', link: '/analysis' }
      ],
      exportDialog: false,
      importDialog: false
    }),
    computed: {
      ...mapGetters({
        downloadData: 'GET_DATA'
      })
    },
    beforeMount () {
      this.loadData()
    },
    methods: {
      ...mapActions ({
        loadData: 'LOAD_DATA',
        uploadData: 'UPLOAD_DATA'
      })
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-material.css";
</style>