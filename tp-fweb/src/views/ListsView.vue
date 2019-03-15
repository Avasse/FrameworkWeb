<template>
  <div class="lists">
    <v-text-field @keydown.enter="insertList" color="pink" v-model="listName">
      <template v-slot:label>
        Pourquoi pas créer une nouvelle <strong>liste ? </strong>
        <v-icon style="vertical-align: middle">playlist_add</v-icon>
      </template>
    </v-text-field>
    <lists :lists="lists" @delete="deleteList"/>
  </div>
</template>

<script>
  import Lists                   from '@/components/listsView/Lists'
  import { defaultLists, setLS } from '@/utils/utils'

  export default {
    name      : 'ListsView',
    components: { Lists },
    data () {
      return {
        listName: '',
        lists   : []
      }
    },

    created () {
      const LSLists = JSON.parse(localStorage.getItem('lists'))
      this.lists    = LSLists ? LSLists : defaultLists
    },

    methods: {
      insertList () {
        this.lists.push({ name: this.listName, budget: 0, favorite: false, items: [] })
        setLS('lists', this.list)
      },

      deleteList ({ id }) {
        this.lists.splice(id, 1)
        setLS('lists', this.list)
      }
    }
  }
</script>

<style scoped lang="scss">
  .v-list {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
</style>
