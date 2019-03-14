<template>
  <div class="home">
    <p>{{ messageReverse }}</p>
    
    <ul>
      <li>{{ firstName }}</li>
      <li>{{ lastName }}</li>
      <li>{{ fullName }}</li>
    </ul>
    
    <input v-model="message">
    
    <span :title="title"> Mon span</span>
    
    <p v-if="seen">Affiche si...</p>
    <p v-else>Sinon</p>
    
    <ul>
      <list v-for="item in list" :elem="item" :key="item.id"/>
    </ul>
    
    <button @click="reverseMessage">Retourne moi ça</button>
  </div>
</template>

<script>
  import List from '@/components/List'
  
  export default {
    name      : 'home',
    components: { List },
    
    data () {
      return {
        message  : 'Hello Vue.js',
        title    : 'Affiché le :' + new Date().toLocaleString(),
        seen     : true,
        firstName: 'Antoine',
        lastName : 'Daudenthum',
        list     : [
          { id: 0, text: 'Liste 1' },
          { id: 1, text: 'Liste 2' },
          { id: 2, text: 'Liste 3' }
        ]
      }
    },
    computed: {
      messageReverse () {
        return this.message.split('').reverse().join('')
      },
      
      now () {
        return Date.now()
      },
      
      fullName: {
        get () {
          return this.firstName + ' ' + this.lastName
        },
        
        set (val) {
          let names      = value.split(' ')
          this.firstName = names[0]
          this.lastName  = names[1]
        }
      }
    },
    
    methods: {
      reverseMessage () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  }
</script>
