<template>
    <div class="center">
        <!-- openVip -->
        <div class="openVip">
          <img src="../../assets/imgs/m-v-1.png" alt="">
        </div>

      <kl-vip-introduce></kl-vip-introduce>

        <!-- openCardPic -->
        <div class="openCardPic">
          <img src="../../assets/imgs/m-v-6.png" alt="">
        </div>

      <kl-vip-sift></kl-vip-sift>

      <kl-black-card></kl-black-card>
    <kl-vip-black-card-welfare></kl-vip-black-card-welfare>

    </div>

</template>


<script type="text/ecmascript-6">
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';
  import klVipIntroduce from './klVipIntroduce.vue'
  import klVipSift from './klVipSift.vue'
  import klBlackCard from './klBlackCard.vue'
  import klVipBlackCardWelfare from  './klVipBlackCardWelfare.vue'
  export default {
    components:{
      klVipIntroduce,
      klVipSift,
      klBlackCard,
      klVipBlackCardWelfare,
    },

  }
</script>

<style scoped>
  /* openVip */
  .openVip img {
    width: 100%
  }

  /* openCardPic */
  .openCardPic img {
    width: 100%;
    height: 0.85rem;
  }

  /*center*/
  .center{
    width: 100%;
    flex:1;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
  }



</style>
