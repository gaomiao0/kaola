<template>
<div class="banner">
  <div class="swiper-container">
    <div class="swiper-wrapper">
<<<<<<< HEAD
      <!--<div class="swiper-slide" v-for="s in swipone">
        <img :src="s.imgs"/>
      </div>-->
=======
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
      <div class="swiper-slide">
        <img src="../../assets/imgs/gs1.png"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/imgs/FS1UN086MISonHcOC2vH_960_480T1807241513_960_480.jpg"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/imgs/kBvJhQ85SNSsKbbKTdXg_960_480T1807241513_960_480.jpg"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/imgs/h9kTXG2h6J1xxczBOQzJ_960_481T1807241513_960_480.jpg"/>
      </div>
      <div class="swiper-slide">
        <img src="../../assets/imgs/70wU46OrBuTts0lykxGu_960_480T1805171751_960_480.jpg"/>
      </div>
<<<<<<< HEAD

=======
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</div>
</template>

<script>
    import Swiper from 'swiper/dist/js/swiper'
    export default {
        name: "klSwiper",
        mounted(){
          new Swiper (".swiper-container", {
<<<<<<< HEAD
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay:true,
          })
        },
      props:["swipone"]
=======
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true,
            autoplay:true,
          })
        }
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
    }
</script>

<style scoped lang="less">
.banner{
  width:100%;
  height:376/200rem;
      .swiper-container{
          height:100%;
              .swiper-pagination{
                  bottom:-30/200rem;
                  .swiper-pagination-bullet{
                      width:9/200rem;
                      height:9/200rem;
                      border-radius: 0;
                      background:#bbbcb9;
                      opacity: 1;
                  }
                  .swiper-pagination-bullet-active{
                      color:#666667;
                      width:38/200rem;
                      height:9/200rem;
                  }
              }
              img{
                width:100%;
                height:376/200rem;
              }
      }
}
</style>
