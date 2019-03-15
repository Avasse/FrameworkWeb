import About  from '@/views/About.vue'
import Home   from '@/views/Home.vue'
import Lists  from '@/views/ListsView.vue'
import Vue    from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path     : '/',
      name     : 'home',
      component: Home
    },
    {
      path     : '/lists',
      name     : 'lists',
      component: Lists
    },
    {
      path     : '/about',
      name     : 'about',
      component: About
    }
  ]
})
