import About       from '@/views/About'
import Dashboard   from '@/views/Dashboard'
import Home        from '@/views/Home'
import ListDetails from '@/views/ListDetails'
import Vue         from 'vue'
import Router      from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path     : '/',
      name     : 'home',
      component: Home
    },
    {
      path     : '/lists/',
      name     : 'dashboard',
      component: Dashboard
    },
    {
      path     : '/lists/:listId',
      name     : 'listDetails',
      component: ListDetails,
      props    : true
    },
    {
      path     : '/about',
      name     : 'about',
      component: About
    }
  ]
})
