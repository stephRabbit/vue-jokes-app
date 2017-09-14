import Vue from 'vue';

// Components
import App from './components/App.vue';
import store from './store';

// Test store
// store.commit('INIT_JOKES', [{test: 'joke'},{tests: 'jokes'}])

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});