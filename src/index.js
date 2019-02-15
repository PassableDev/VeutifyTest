import '@babel/polyfill';
import Vue from 'vue';
import router from 'vue-router';
import App from './App';

import '@fortawesome/fontawesome-free/js/regular'

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify,{
  iconfont: 'fa'
})

const dataBus = new Vue({});

new Vue({
  el: '#app',
  render: h => h(App),
});