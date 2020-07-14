<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-bar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <div class="float-left">
        <tagsHeader/>
        </div>
        <q-space />
        <div>
        <q-btn
          flat
          dense
          round
          icon="room"
          aria-label="Menu"
          @click="mapOpen = !mapOpen"
        />
        </div>
      </q-bar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      show-if-above
      content-class="bg-grey-1"
    >

<!-- VK Widget -->
<div id="vk_auth"></div>

      <SLeftMenu/>
    </q-drawer>
    <q-drawer
      side="right"
      v-model="mapOpen"
      show-if-above
      bordered
      :width=400>
      <Smap/>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import tagsHeader from 'components/tagsHeader'
import Smap from 'components/map'
import SLeftMenu from 'components/leftMenu'

export default {
  name: 'MainLayout',
  inputTag: '',

  components: {
    tagsHeader,
    Smap,
    SLeftMenu
  },

  data () {
    return {
      mapOpen: false,
      leftDrawerOpen: false
    }
  },
  methods: {},
  mounted () {
    console.log('mounted')
    const VK = window.VK
    VK.Widgets.Auth('vk_auth', { onAuth: function (data) { alert('user ' + data.uid + ' authorized') } })
    // VK.Widgets.Auth("vk_auth", {"onAuth":function(data) {alert('user '+data['uid']+' authorized');}});
  }
}
</script>
<style lang="scss" scoped>
.input-tag {
  float: left;
}
</style>
