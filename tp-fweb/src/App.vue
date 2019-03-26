<template>
  <v-app light>
    <app-nav/>
    <v-content>
      <v-container :style="containerStyle">
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import AppNav from '@/components/AppNav'

  export default {
    name      : 'App',
    components: { AppNav },
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
    }
  }
</script>
