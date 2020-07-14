<template>
  <q-page class="">
    <q-input outlined class="" v-model="input" @change="onChange"
      placeholder="input text here"
      filled
      autogrow>
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
