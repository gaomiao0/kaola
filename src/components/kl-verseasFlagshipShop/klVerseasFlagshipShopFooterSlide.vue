<template>
        <!--slidePic-->
        <div class="slidePic">
            <div class="slidePicTitle">
                <p>{{footslide.stit}}</p>
            </div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"  v-for=" simg in footslide.simg">
                      <img :src="simg.spic" alt=""/>
                    </div>
                    <!--<div class="swiper-slide">-->
                      <!--<img src="../../assets/imgs/m-slidePic1.png" alt=""/></div>-->
                    <!--<div class="swiper-slide"><img src="../../assets/imgs/m-slidePic1.png" alt=""/></div>-->
                </div>
            </div>
        </div>
</template>

<script type="text/ecmascript-6">

     import Swiper from 'swiper';
      import 'swiper/dist/css/swiper.css';
      export default {
          mounted(){
              var mySwiper = new Swiper('.swiper-container', {
                    autoplay: true,//可选选项，自动滑动
                  loop : true,
                  direction: 'horizontal',
                  spaceBetween : 10,
                  loop: true,
                  loopAdditionalSlides : 1,
                  slidesPerView : 1.2,
                  centeredSlides : true,

              })
          },
        data(){
          return{
            footslide:[],
          }
        },
        created() {
          this.getData()
        },
        methods: {
          getData() {
            this.$http.get('/api/address').then(response=>{
              this.footslide = response.data.data.fslide
            })
          },
        },
      }

</script>

<style scoped>

</style>
