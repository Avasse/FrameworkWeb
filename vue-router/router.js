const Test = {
  template: `<div> TEST </div>`
}

const Toto = {
  template: `<div> Toto </div>`
}

const routes = [
  { path: '/test', component: Test },
  { path: '/toto', component: Toto }
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router
}).$mount('#app')