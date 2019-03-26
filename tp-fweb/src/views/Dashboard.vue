<template>
  <div class="lists">
    <v-text-field
      @keydown.enter="onAddList"
      class="mb-4"
      color="pink"
      v-model="listName">
      <template v-slot:label>
        Pourquoi pas créer une nouvelle <strong>liste ? </strong>
        <v-icon style="vertical-align: middle">playlist_add</v-icon>
      </template>
    </v-text-field>

    <lists :lists="lists" @delete="onDeleteList" @set-favorite="onUpdateFavorite"/>
  </div>
</template>

<script>
  import Lists                        from '@/components/dashboard/Lists'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name      : 'Dashboard',
    components: { Lists },
    data () {
      return {
        listName: '',
        search  : ''
      }
    },

    computed: {
      ...mapGetters({
        lists: 'lists/lists'
      })
    },

    methods: {
      ...mapMutations({
        addList       : 'lists/ADD_LIST',
        deleteList    : 'lists/DELETE_LIST',
        updateFavorite: 'lists/UPDATE_FAVORITE_LIST'
      }),

      onAddList () {
        this.addList(this.listName)
        this.listName = ''
      },

      onDeleteList ({ id }) {
        this.deleteList(id)
      },

      onUpdateFavorite ({ id, favorite }) {
        this.updateFavorite({ id, favorite })
      }
    }
  }
</script>
