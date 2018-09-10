<template>

  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="s in swep">
        <img :src=s.pic />
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper"
    export default {
        name: "klSwiper",
      props:["swep"],
        mounted(){
            new Swiper('.swiper-container', {
              spaceBetween: 30,
              centeredSlides: true,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
          }
    }
</script>

<style scoped>
  /*轮播图开始*/
  .swiper-slide img{
    width: 100%;
    height: 1.9rem;
  }

  .swiper-container {
    width: 100%;
    height: 1.9rem;

  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

</style>
