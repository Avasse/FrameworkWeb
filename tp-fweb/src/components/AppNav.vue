<template>
  <v-tabs centered fixed-tabs icons-and-text>
    <v-tabs-slider color="pink"/>
    <v-tab
      :key="tab.id"
      :to="tab.route"
      exact
      v-for="tab of tabs">
      {{ tab.name }}
      <v-icon>{{ tab.icon }}</v-icon>
    </v-tab>

  </v-tabs>
</template>

<script>
  export default {
    name: 'AppNav',
    data () {
      return {
        tabs: [
          { id: 0, name: 'Home', route: { name: 'home' }, icon: 'home' },
          { id: 1, name: 'Mes Listes', route: { name: 'dashboard' }, icon: 'list_alt' },
          { id: 2, name: 'A propos', route: { name: 'about' }, icon: 'fingerprint' }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
