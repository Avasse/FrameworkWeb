<template>
  <div class="autocomplete xs-6">
    <v-text-field
      :value="task"
      @input="$emit('task-change', $event)"
      @keydown.enter="$emit('enter')"
      color="pink"
      label="Ajouter une tache">
      <template v-slot:label>
        Créer une nouvelle <strong>tâche</strong>
        <v-icon style="vertical-align: middle">playlist_add</v-icon>
      </template>
    </v-text-field>

    <v-list v-if="task">
      <v-list-tile :key="id" @click="$emit('task-change', item.name)" v-for="(item, id) in items">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
  export default {
    name : 'ListAutocomplete',
    props: {
      task: {
        type   : String,
        default: ''
      },

      items: {
        type   : Array,
        default: () => []
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-list {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
  }
</style>
