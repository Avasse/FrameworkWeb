<template>
  <v-app light>
    <app-nav/>
    <v-content v-if="!loading">
      <v-container :style="containerStyle">
        <router-view/>
      </v-container>
    </v-content>
    <div class="loading" v-else>LOADING</div>
  </v-app>
</template>

<script>
  import AppNav         from '@/components/AppNav'
  import { mapActions } from 'vuex'

  export default {
    name      : 'App',
    components: { AppNav },
    data () {
      return {
        loading: true
      }
    },
    computed  : {
      homePage () {
        return this.$route.name === 'home'
      },

      containerStyle () {
        return {
          maxWidth: this.homePage ? '100vw' : '700px',
          padding : this.homePage ? '0px' : '16px'
        }
      }
    },

    async created () {
      this.loading = true
      await this.fetchLists()
      this.loading = false
    },

    methods: {
      ...mapActions({
        fetchLists: 'lists/fetchLists'
      })
    }
  }
</script>
