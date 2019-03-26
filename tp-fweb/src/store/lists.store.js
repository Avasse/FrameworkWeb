import { defaultLists, setLS } from '@/utils/utils'

const state = {
  lists: []
}

const mutations = {
  SET_LISTS (state, lists) {
    state.lists = lists
  },
  
  ADD_LIST (state, name) {
    state.lists.push({ name, budget: 0, favorite: false, items: [], updated_at: Date.now() })
  },
  
  DELETE_LIST (state, id) {
    state.lists.splice(id, 1)
  },
  
  UPDATE_FAVORITE_LIST (state, { id, favorite }) {
    state.lists[id].favorite   = state
    state.lists[id].updated_at = Date.now()
  },
  
  ADD_LIST_ITEM (state, { listId, name }) {
    state.lists[listId].items.push({ done: false, name, price: 0 })
    state.lists[listId].updated_at = Date.now()
  },
  
  DELETE_LIST_ITEM (state, { listId, itemId }) {
    state.lists[listId].items.splice(itemId, 1)
    state.lists[listId].updated_at = Date.now()
  },
  
  UPDATE_LIST_ITEM_PRICE (state, { listId, itemId, price }) {
    state.lists[listId].items[itemId].price = parseInt(price && price >= 0 ? price : 0)
    state.lists[listId].updated_at          = Date.now()
  },
  
  UPDATE_LIST_ITEM_DONE (state, { listId, itemId, done }) {
    state.lists[listId].updated_at = Date.now()
  },
  
  UPDATE_LIST_BUDGET (state, { listId, budget }) {
    state.lists[listId].budget     = parseInt(budget && budget >= 0 ? budget : 0)
    state.lists[listId].updated_at = Date.now()
  }
}

const actions = {
  async fetchLists ({ commit }) {
    try {
      const LSLists = JSON.parse(localStorage.getItem('lists'))
      const lists   = LSLists && LSLists.length > 0 ? LSLists : defaultLists
      commit('SET_LISTS', lists)
    } catch (e) {
      console.error(e)
      commit('SET_LISTS', defaultLists)
    }
  }
}

const getters = {
  lists: state => state.lists,
  
  lastUpdatedListId: state => {
    const lastUpdatedList = state.lists.reduce((last, list) => list.updated_at > last.updated_at ? list : last)
    return state.lists.findIndex(list => list.name === lastUpdatedList.name)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
