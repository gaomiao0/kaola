<template>
      <div class="center">
            <kl-verseas-flagship-shop-header-slide></kl-verseas-flagship-shop-header-slide>
            <kl-verseas-flagship-shop-classify></kl-verseas-flagship-shop-classify>
            <kl-verseas-flagship-shop-today-recomm></kl-verseas-flagship-shop-today-recomm>
            <kl-verseas-flagship-shop-famous-recomm></kl-verseas-flagship-shop-famous-recomm>
            <kl-verseas-flagship-shop-global-hot-announcement></kl-verseas-flagship-shop-global-hot-announcement>
            <kl-verseas-flagship-shop-footer-slide></kl-verseas-flagship-shop-footer-slide>
      </div>
</template>

<script type="text/ecmascript-6">
import klVerseasFlagshipShopHeaderSlide from "./klVerseasFlagshipShopHeaderSlide.vue"
import klVerseasFlagshipShopClassify from "./klVerseasFlagshipShopClassify.vue"
import klVerseasFlagshipShopTodayRecomm from "./klVerseasFlagshipShopTodayRecomm.vue"
import klVerseasFlagshipShopFamousRecomm from "./klVerseasFlagshipShopFamousRecomm.vue"
import klVerseasFlagshipShopGlobalHotAnnouncement from "./klVerseasFlagshipShopGlobalHotAnnouncement.vue"
import klVerseasFlagshipShopFooterSlide from "./klVerseasFlagshipShopFooterSlide.vue"
  export default {
      components:{
                klVerseasFlagshipShopHeaderSlide,
                klVerseasFlagshipShopClassify,
                klVerseasFlagshipShopTodayRecomm,
                klVerseasFlagshipShopFamousRecomm,
                klVerseasFlagshipShopGlobalHotAnnouncement,
                klVerseasFlagshipShopFooterSlide
      },
      props:{
            contentData:{
                  type:Array,
            }
      }
  
  }
</script>

<style scoped>

</style>