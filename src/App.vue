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
      <v-btn icon>
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    data: () => ({
      drawer: null,
      items: [
        { icon: 'mdi-playlist-check ', text: 'Checklist', link: '/checklist' }
      ],
    }),
    beforeMount () {
      this.initializeData()
    },
    methods: {
      ...mapMutations([
        'setInitData'
      ]),
      initializeData() {
        this.getDataFromLocalStorage()
      },
      getDataFromLocalStorage() {
        let data = localStorage.getItem('habit-manager')
        this.setInitData(data)
      }
    }
  }
</script>

<style>
</style>