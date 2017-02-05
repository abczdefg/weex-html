// import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Detail from './pages/detail.vue'

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/', redirect: '/detail' },
    { path: '/detail', name: 'detail', component: Detail },
  ]
})
