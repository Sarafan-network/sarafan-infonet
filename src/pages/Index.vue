<template>
  <q-page class="">
    <q-input class="" v-model="input" label="" @change="onChange">
      <template v-slot:prepend>
        <q-icon name="input" />
      </template>
    </q-input>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: 'PageIndex',
      input: ''
    }
  },
  methods: {
    onChange () {
      console.log('onChange')
    }
  }
}
</script>
