import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import klSort from '../pages/klSort'
import klClothShop from "../pages/klClothShop"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/klSort',
      name: 'klSort',
      component: klSort
    },
   {
     path: '/klClothShop',
       name: 'klClothShop',
     component: klClothShop
   }
   /* {
      path: '/gress',
      name: 'gress',
      component: gress
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/shopcarts',
      name: 'shopcarts',
      component: shopcarts
    }*/
  ]
})
