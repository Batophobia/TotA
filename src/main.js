import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Message from './components/Message.vue'
import Navigation from './components/Navigation.vue'
import Location from './components/Location.vue'
import Inventory from './components/Inventory.vue'

Vue.component('app-messages', Message);
Vue.component('app-nav', Navigation);
Vue.component('app-loc', Location);
Vue.component('app-inv', Inventory);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
