import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import ReceiptHome from '@/containers/receipt/ReceiptHome'
import CreateReceipt from '@/containers/receipt/CreateReceipt'
import Receipt from '@/containers/receipt/Receipt'
import GameHome from '@/containers/game/GameHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/receiptList',
      component: ReceiptHome
    },
    {
      path: '/createReceipt',
      component: CreateReceipt
    },
    {
      path: '/receipt/:id',
      component: Receipt
    }, {
      path: '/game',
      component: GameHome
    }
  ]
})
