<template>
  <v-card v-if="items.length > 0">
    <div :key="`${id}-card`" v-for="(item, id) in items">
      <v-divider :key="`${id}-divider`" v-if="id !== 0"/>

      <v-list-tile :key="`${id}-tile`">
        <v-list-tile-action style="width:25%">
          <v-checkbox
            :label="item.name"
            @change="$emit('edit-done', {id})"
            color="pink"
            v-model="item.done"/>
        </v-list-tile-action>
        <v-spacer/>
        <v-text-field
          :disabled="!item.done"
          :value="item.price"
          @input="$emit('edit-price', { id, value: $event })"
          color="pink"
          label="Regular"
          single-line
          suffix="€"
          type="number"/>
        <v-spacer/>
        <v-icon @click="$emit('delete', id)" color="red">highlight_off</v-icon>
      </v-list-tile>
    </div>
  </v-card>
</template>

<script>
  export default {
    name : 'ListItems',
    props: {
      items: {
        type   : Array,
        default: () => []
      }
    }
  }
</script>
