<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
        <div>
        </div>
        </q-toolbar-title>

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
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
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
      bordered
      :width=500>
      maps
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',
  inputTag: '',

  //  components: {
  //    EssentialLink
  //  },

  data () {
    return {
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
