import Vue from 'vue'
import Router from 'vue-router'
import ScannerHome from '@/pages/scanner'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    redirect: '/scanner'
  }, {
    path: '/scanner',
    name: 'ScannerHome',
    component: ScannerHome
  }]
})
