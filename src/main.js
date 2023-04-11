import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Message from './components/Message.vue'
import Location from './components/Location.vue'

Vue.component('app-messages', Message);
Vue.component('app-loc', Location);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
