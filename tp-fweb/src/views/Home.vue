<template>
  <div class="home">
    <router-link :to="{name: 'lists'}">
      Regarde ta liste ici
    </router-link>
  </div>
</template>

<script>

  export default {
    name: 'Home'
  }
</script>
