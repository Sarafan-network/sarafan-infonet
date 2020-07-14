<template>
  <div class="q-sm">
    <q-chip removable>
      tag1
    </q-chip>
    <q-chip removable>
      tag2
    </q-chip>
    <q-input dense standout v-model="text" class="q-ml-sm float-right"
      placeholder="filter/add tags" outlined />
  </div>
</template>

<script>
export default {
  name: 'tagsHeader',
  data () {
    return {}
  }
}
</script>
