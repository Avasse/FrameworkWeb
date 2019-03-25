<template>
  <div class="list-details" v-if="hasItems">
    <list-autocomplete
      :items="filteredItems"
      :task="newItem"
      @enter="addItem"
      @task-change="editNewItem"/>

    <h2 class="display-1 black--text mt-3">
      <v-btn icon ripple>
        <v-icon @click="$router.push({name: 'listsView'})" color="grey lighten-1">keyboard_arrow_left</v-icon>
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
      lists  : null,
      newItem: ''
    }),

    computed: {
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
        return autocompleteItems.filter(item => item.name.toLowerCase().includes(this.newItem.toLowerCase()))
      },

      hasItems () {
        return this.lists && this.listId !== null && this.lists[this.listId]
      }
    },

    created () {
      try {
        this.lists = JSON.parse(localStorage.getItem('lists'))
      } catch (e) {
        console.error(e)
        this.$router.push({ name: 'listsView' })
      }
    },

    methods: {
      addItem () {
        this.lists[this.listId].items.push({ done: false, name: this.newItem, price: 0 })
        this.newItem = ''
        setLS('lists', this.lists)
      },

      deleteItem (id) {
        this.lists[this.listId].items.splice(id, 1)
        setLS('lists', this.lists)
      },

      editNewItem (newItem) {
        this.newItem = newItem
      },

      editItemPrice ({ id, value }) {
        this.lists[this.listId].items[id].price = parseInt(value)
        setLS('lists', this.lists)
      },

      editItemDone () {
        setLS('lists', this.lists)
      },

      editListBudget (budget) {
        this.lists[this.listId].budget = parseInt(budget)
        setLS('lists', this.lists)
      }
    }
  }
</script>

<style scoped>

</style>
