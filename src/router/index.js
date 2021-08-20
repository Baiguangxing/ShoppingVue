import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../views/Test.vue'
import Cart from '../views/Cart.vue'
import Goods from '../views/Goods.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Goods',
    component: Goods
  },

  {
    path:"/test",
    name:Test,
    component:Test
  },
  {
    path:"/cart",
    name:Cart,
    component:Cart
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
