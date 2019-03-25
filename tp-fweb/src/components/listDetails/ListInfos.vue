<template>
  <v-layout align-center my-1>
    <strong class="mx-3 black--text text--darken-3"> Restantes: {{ remaining }}</strong>
    <v-divider vertical/>
    <strong class="mx-3 pink--text">Complétées: {{ completed }}</strong>
    <v-divider vertical/>
    <v-spacer/>
  </v-layout>
</template>

<script>
  export default {
    name : 'ListInfos',
    props: {
      remaining: {
        type   : Number,
        default: 0
      },
      completed: {
        type   : Number,
        default: 0
      }
    }
  }
</script>
