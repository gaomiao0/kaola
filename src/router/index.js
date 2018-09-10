import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import klshopcars from '../pages/klshopcars'
import klmine from '../pages/klmine'
import klreceive from '../pages/klreceive'
import klSort from '../pages/klSort'
import klClothShop from "../pages/klClothShop"
import klOrder from "../pages/klOrder"
import klIndex from '../pages/klIndex'
import klGoodsList from '../pages/klGoodsList'
import klMsn from '../pages/klMsn'
import klVerseasFlagshipShopPage from '../pages/klVerseasFlagshipShopPage.vue'
import klVipCenterPages from '../pages/klVipCenterPages.vue'
import klrecharge from '../pages/klrecharge.vue'
=======
import index from '../pages/index'
import klSort from '../pages/klSort'
import klClothShop from "../pages/klClothShop"
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f


Vue.use(Router);

export default new Router({
   // mode:'history',
  routes: [
    {
<<<<<<< HEAD
      path: '/klshopcars',
      name: 'klshopcars',
      component: klshopcars
    },
    {
      path: '/klmine',
      name: 'klmine',
      component: klmine
    },
    {
      path: '/klreceive',
      name: 'klreceive',
      component: klreceive
=======
      path: '/index',
      name: 'index',
      component: index
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
    },
    {
      path: '/klSort',
      name: 'klSort',
<<<<<<< HEAD
      component: klSort,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/klClothShop',
      name: 'klClothShop',
      component: klClothShop,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/klOrder',
      name: 'klOrder',
      component: klOrder,
    },
    {
      path: '/',
      name: 'klIndex',
      component: klIndex
    },{
      path: '/klGoodsList',
      name: 'klGoodsList',
      component: klGoodsList
    },{
      path: '/klMsn',
      name: 'klMsn',
      component: klMsn
    },
     {
      path: '/klVerseasFlagshipShopPage',
      name: 'klverseas',
      component: klVerseasFlagshipShopPage,
      // meta:{
      //   showFooter:true
      // }
    },
    {
      path: '/klVipCenterPages',
      name: 'klvip',
      component: klVipCenterPages,
      // meta:{
      //   showFooter:true
      // }
    },
    {
      path: '/klrecharge',
      name: 'klrecharge',
      component: klrecharge,
      // meta:{
      //   showFooter:true
      // }
    }
=======
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
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
  ]
})
