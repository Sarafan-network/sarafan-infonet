/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Vue from 'vue'
import Gun from 'gun'
import VueGun from 'vue-gun'
// import vueGun from 'vue-gun'
var gun = new Gun({
  file: './data.json'
})
// Vue.prototype.$gun = gun
// import SEA from 'gun/sea' // Required for SEA functions and user authentication
Vue.use(VueGun, {
  gun: gun // must be passed in at `gun` key
})
