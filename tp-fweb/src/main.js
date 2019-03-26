import Vue     from 'vue'
import Toasted from 'vue-toasted'
import App     from './App.vue'
import './plugins/vuetify'
import './registerServiceWorker'
import router  from './router'
import store   from './store/index'

Vue.use(Toasted)

Vue.config.productionTip = false

//subscribe to update localStorage on each state update
store.subscribe((mutation, state) => localStorage.setItem('lists', JSON.stringify(state.lists.lists)))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
