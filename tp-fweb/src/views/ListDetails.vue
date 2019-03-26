<template>
  <div class="list-details" v-if="hasItems">
    <list-autocomplete
      :items="filteredItems"
      :task="newItemName"
      @enter="addItem"
      @task-change="editNewItemName"/>

    <h2 class="display-1 black--text mt-3">
      <v-btn icon ripple>
        <v-icon @click="$router.push({name: 'dashboard'})" color="grey lighten-1">keyboard_arrow_left</v-icon>
      </v-btn>
      {{ 'Liste ' + currentList.name + ' | Tâches: ' + currentList.items.length }}
    </h2>

    <v-divider class="mt-3"/>
    <list-infos :completed="completedTasks" :remaining="remainingTasks"/>
    <v-divider class="mb-3"/>

    <list-items
      :items="currentList.items"
      @delete="deleteItem"
      @edit-done="editItemDone"
      @edit-price="editItemPrice"/>
    <v-divider class="mt-3 mb-3"/>

    <v-layout row>
      <v-flex align-self-center xs2>
        <v-text-field
          :value="currentList.budget"
          @input="editListBudget($event)"
          label="Budget"
          suffix="€"
          type="number"/>
      </v-flex>

      <v-divider class="ml-3" inset vertical/>

      <v-flex align-self-center xs3>
        <strong class="mx-3 black--text text--darken-3">Budget: {{ currentList.budget + '€' }}</strong>
      </v-flex>

      <v-divider inset vertical/>

      <v-flex align-self-center xs3><strong class="mx-3 pink--text">Prix total: {{ totalPrice + '€' }}</strong></v-flex>

      <v-divider inset vertical/>

      <v-flex align-self-center xs3>
        <strong class="mx-3 red--text text--darken-3" v-if="totalPrice > currentList.budget">
          <v-icon class="mx-3 red--text text--darken-3">warning</v-icon>
          Budget dépassé
        </strong>
      </v-flex>
    </v-layout>
  </div>
  <div class="loader" v-else>Loading</div>
</template>

<script>
  import ListAutocomplete             from '@/components/listDetails/ListAutocomplete'
  import ListInfos                    from '@/components/listDetails/ListInfos'
  import ListItems                    from '@/components/listDetails/ListItems'
  import { autocompleteItems, setLS } from '@/utils/utils'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name      : 'ListDetails',
    components: { ListItems, ListInfos, ListAutocomplete },
    props     : {
      listId: {
        type   : Number,
        default: 0
      }
    },

    data: () => ({
      newItemName: ''
    }),

    computed: {
      ...mapGetters({
        lists: 'lists/lists'
      }),

      currentList () {
        return this.lists ? this.lists[this.listId] : null
      },

      completedTasks () {
        return this.currentList.items.filter(item => item.done).length
      },

      progress () {
        return this.completedTasks / this.currentList.items.length * 100
      },

      remainingTasks () {
        return this.currentList.items.length - this.completedTasks
      },

      totalPrice () {
        return this.currentList.items.reduce((acc, item) => item.done ? acc + parseInt(item.price) : acc, 0)
      },

      filteredItems () {
        return autocompleteItems.filter(item => item.name.toLowerCase().includes(this.newItemName.toLowerCase()))
      },

      hasItems () {
        return this.lists && this.listId !== null && this.lists[this.listId]
      }
    },

    methods: {
      ...mapMutations({
        addListItem        : 'lists/ADD_LIST_ITEM',
        deleteListItem     : 'lists/DELETE_LIST_ITEM',
        updateListItemPrice: 'lists/UPDATE_LIST_ITEM_PRICE',
        updateListItemDone : 'lists/UPDATE_LIST_ITEM_DONE',
        updateListBudget   : 'lists/UPDATE_LIST_BUDGET'
      }),

      addItem () {
        this.addListItem({ listId: this.listId, name: this.newItemName })
        this.newItemName = ''
      },

      deleteItem (id) {
        this.deleteListItem({ listId: this.listId, itemId: id })
      },

      editNewItemName (newItemName) {
        this.newItemName = newItemName
      },

      editItemPrice ({ id, value }) {
        this.updateListItemPrice({ listId: this.listId, itemId: id, price: value })
      },

      editItemDone ({ id, done }) {
        this.updateListItemDone({ listId: this.listId, itemId: id, done })
      },

      editListBudget (budget) {
        this.updateListBudget({ listId: this.listId, budget })
      }
    }
  }
</script>

<style scoped>

</style>
