<template>
  <li>{{ elem.text }}</li>
</template>

<script>
  export default {
    name : 'List',
    props: {
      elem: {
        type   : Object,
        default: () => {}
      }
    }
  }
</script>

<style scoped>

</style>
