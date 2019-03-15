<template>
  <v-list>
    <div :key="`${i}-list-item`" class="list" v-for="(list, i) in lists">
      <v-divider :key="`${i}-divider`" v-if="i !== 0"></v-divider>

      <v-list-tile :key="`${i}-list-tile`">
        <v-list-tile-action>
          <v-icon :color="list.favorite ? 'pink' : ''" @click="list.favorite = !list.favorite">star</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title v-text="list.name">{{ list.name }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon color="grey lighten-1">keyboard_arrow_right</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </div>
  </v-list>
</template>

<script>
  export default {
    name : 'Lists',
    props: {
      lists: {
        type   : Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>
