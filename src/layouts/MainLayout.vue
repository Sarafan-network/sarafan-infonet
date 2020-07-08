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

      <q-list>
      </q-list>
    </q-drawer>
    <q-drawer
      side="right"
      v-model="mapOpen"
      show-if-above
      bordered
      :width=400>
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
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import tagsList from 'components/tags'
import tagsHeader from 'components/tagsHeader'

export default {
  name: 'MainLayout',
  inputTag: '',

  components: {
    tagsList,
    tagsHeader
  },

  data () {
    return {
      splitterMap: 10,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOpen: false,
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
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
