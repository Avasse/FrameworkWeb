<template>
  <div class="lists">
    <v-text-field label="Rechercher une liste..." solo v-model="search"/>

    <v-list>
      <div :key="`${id}-list-item`" class="list" v-for="(list, id) in filteredList">
        <v-divider :key="`${id}-divider`" v-if="id !== 0"/>

        <v-list-tile :key="`${id}-list-tile`">
          <v-list-tile-action>
            <v-icon
              :color="list.favorite ? 'pink' : ''"
              @click="$emit('set-favorite', { id: getListIdByName(list.name), state: !list.favorite})">
              star
            </v-icon>
          </v-list-tile-action>

          <v-list-tile-content @click="goToListDetails(list.name)">
            <v-list-tile-title v-text="list.name"/>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon @click="goToListDetails(list.name)" color="grey lighten-1">
                keyboard_arrow_right
              </v-icon>
            </v-btn>
          </v-list-tile-action>

          <v-divider class="ml-4" inset vertical/>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon @click="$emit('delete', { id: getListIdByName(list.name) })" color="red lighten-1">
                delete_forever
              </v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </div>
    </v-list>
  </div>
</template>

<script>
  export default {
    name : 'Lists',
    props: {
      lists: {
        type   : Array,
        default: () => []
      }
    },

    data () {
      return {
        search: ''
      }
    },

    computed: {
      filteredList () {
        return this.lists
                   .filter(list => list.name.toLowerCase().includes(this.search.toLowerCase()))
                   .sort(list => list.favorite ? -1 : 1)
      }
    },

    methods: {
      goToListDetails (name) {
        const listId = this.getListIdByName(name)
        this.$router.push({ name: 'listDetails', params: { listId } })
      },

      getListIdByName (name) {
        return this.lists.findIndex(list => list.name === name)
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-list {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    margin-top: -1em;
  }

  .v-list__tile__content {
    cursor: pointer;
  }
</style>
