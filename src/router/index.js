import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import CreateReceipt from '@/containers/CreateReceipt'
import Receipt from '@/containers/Receipt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/createReceipt',
      component: CreateReceipt
    },
    {
      path: '/receipt/:id',
      component: Receipt
    }
  ]
})
