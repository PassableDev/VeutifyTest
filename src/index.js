import '@babel/polyfill';
import Vue from 'vue';
import router from 'vue-router';
import App from './App';

import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
Vue.use(Vuetify,{
  iconfont: 'fa'
})



const dataBus = new Vue({});

new Vue({
  el: '#app',
  render: h => h(App),
});