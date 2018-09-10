<template>

                <!--globalHotSell-->
        <div class="globalHotSell">
            <div class="globalHotSellTitle">
                <h2>{{globa.gtit}}</h2>
                <p>{{globa.gp}}</p>
            </div>
            <div class="globalHotSellType">
                <div class="globalHotSellTypeBox" v-for="tyb in globa.tbox">
                    <img :src="tyb.tboximg" alt=""/>
                    <p>{{tyb.tboxtxt}}</p>
                </div>
            </div>
           <div class="sift">
                <kl-verseas-flagship-shop-global-hot-announcementselection-recomm></kl-verseas-flagship-shop-global-hot-announcementselection-recomm>
                <kl-verseas-flagship-shop-global-hot-announcementselection-recommbeauty-guard></kl-verseas-flagship-shop-global-hot-announcementselection-recommbeauty-guard>
                <kl-verseas-flagship-shop-global-hot-announcement-numerical></kl-verseas-flagship-shop-global-hot-announcement-numerical>
                <kl-verseas-flagship-shop-global-hot-announcement-mother-care></kl-verseas-flagship-shop-global-hot-announcement-mother-care>
                <kl-verseas-flagship-shop-global-hot-announcement-globe-food></kl-verseas-flagship-shop-global-hot-announcement-globe-food>
            </div>
        </div>

</template>

<script type="text/ecmascript-6">
import klVerseasFlagshipShopGlobalHotAnnouncementselectionRecomm from "./klVerseasFlagshipShopGlobalHotAnnouncementselectionRecomm.vue"
import klVerseasFlagshipShopGlobalHotAnnouncementselectionRecommbeautyGuard from "./klVerseasFlagshipShopGlobalHotAnnouncementselectionRecommbeautyGuard.vue"
import klVerseasFlagshipShopGlobalHotAnnouncementNumerical from "./klVerseasFlagshipShopGlobalHotAnnouncementNumerical.vue"
import klVerseasFlagshipShopGlobalHotAnnouncementMotherCare from "./klVerseasFlagshipShopGlobalHotAnnouncementMotherCare.vue"
import klVerseasFlagshipShopGlobalHotAnnouncementGlobeFood from "./klVerseasFlagshipShopGlobalHotAnnouncementGlobeFood.vue"
        export default {
          data(){
            return{
              globa:[],
            }
          },
            components:{
                klVerseasFlagshipShopGlobalHotAnnouncementselectionRecomm,
                klVerseasFlagshipShopGlobalHotAnnouncementselectionRecommbeautyGuard,
                klVerseasFlagshipShopGlobalHotAnnouncementNumerical,
                klVerseasFlagshipShopGlobalHotAnnouncementMotherCare,
                klVerseasFlagshipShopGlobalHotAnnouncementGlobeFood
            },

          created() {
            this.getData()
          },
          methods: {
            getData() {
              this.$http.get('/api/address').then(response=>{
                this.globa = response.data.data.glo

              })
            },
          },
        }
</script>

<style scoped>

</style>
