<template>
  <v-app>
    <app-nav/>
    <v-content>
      <v-container style="max-width: 700px">
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import AppNav from '@/components/AppNav'

  export default {
    name      : 'App',
    components: { AppNav }
  }
</script>
