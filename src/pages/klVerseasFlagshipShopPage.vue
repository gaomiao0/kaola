<template>
    <div  class="goodsdetail">
        <kl-verseas-flagship-shop-header></kl-verseas-flagship-shop-header>
        <kl-verseas-flagship-shop-content > </kl-verseas-flagship-shop-content>
        <kl-verseas-flagship-shopfooter></kl-verseas-flagship-shopfooter>
    </div>
</template>

<script type="text/ecmascript-6">
  import  klVerseasFlagshipShopHeader from "../components/kl-verseasFlagshipShop/klVerseasFlagshipShopHeader.vue"
  import klVerseasFlagshipShopfooter from "../components/kl-verseasFlagshipShop/klVerseasFlagshipShopFooter.vue"
  import klVerseasFlagshipShopContent from "../components/kl-verseasFlagshipShop/klVerseasFlagshipShopContent.vue"

 export default {

    components:{
        klVerseasFlagshipShopHeader,
        klVerseasFlagshipShopContent,
        klVerseasFlagshipShopfooter
    },
    
  }
</script>

<style scoped>
     html,body{
      height:100%;
    }
    .goodsdetail{
      display: flex;
      height:100%;
      flex-direction: column;
      justify-content: space-between;
    }
</style>
