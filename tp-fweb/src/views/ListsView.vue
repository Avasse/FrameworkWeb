<template>
  <div class="lists">
    <v-text-field
      @keydown.enter="addList"
      class="mb-4"
      color="pink"
      v-model="listName">
      <template v-slot:label>
        Pourquoi pas créer une nouvelle <strong>liste ? </strong>
        <v-icon style="vertical-align: middle">playlist_add</v-icon>
      </template>
    </v-text-field>

    <lists :lists="lists" @delete="deleteList" @set-favorite="updateFavorite"/>
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
        lists   : [],
        search  : ''
      }
    },

    created () {
      try {
        const LSLists = JSON.parse(localStorage.getItem('lists'))
        this.lists    = LSLists && LSLists.length > 0 ? LSLists : defaultLists
        setLS('lists', this.lists)
      } catch (e) {
        console.error(e)
        this.lists = defaultLists
      }
    },

    methods: {
      addList () {
        this.lists.push({ name: this.listName, budget: 0, favorite: false, items: [], updated_at: Date.now() })
        setLS('lists', this.lists)
        this.listName = ''
      },

      deleteList ({ id }) {
        this.lists.splice(id, 1)
        setLS('lists', this.lists)
      },

      updateFavorite ({ id, state }) {
        this.lists[id].favorite   = state
        this.lists[id].updated_at = Date.now()
        setLS('lists', this.lists)
      }
    }
  }
</script>
