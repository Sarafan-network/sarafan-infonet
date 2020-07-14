<template>
  <q-splitter
    horizontal
    v-model="splitterMap"
    style="height:100%">
    <template v-slot:before>
      <tagsList/>
    </template>
    <template v-slot:after>
    <l-map ref="myMap">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>
    </template>
  </q-splitter>
</template>
<script>
import tagsList from 'components/tags'

export default {
  name: 'Smap',
  components: {
    tagsList
  },
  data () {
    return {
      splitterMap: 10,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  }
}
</script>
