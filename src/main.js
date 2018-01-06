import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'common/stylus/index.styl'
import store from './store'

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.gif')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
