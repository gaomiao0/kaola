<template>
<div class="swipertwo">
      <div class="splitline"></div>
      <div class="tit">
        <a href="">
          <img src="../../assets/imgs/XcX4hEAy1D3MB9kLc1qcURh6nMcnWwT1807241422_960_200.jpg" alt="">
        </a>
      </div>
    <div class="swiperbox">
      <div class="swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/imgs/Vt4rSwwLfltqxXFlT9kK-9AsUMiqAT1808161727_720_820.jpg"/>

          </div>
          <div class="swiper-slide">
            <img src="../../assets/imgs/wsTeRSntK3wmMyF0VNNi-V1zgUhnDT1808271538_720_820.jpg"/>

          </div>
          <div class="swiper-slide">
            <img src="../../assets/imgs/th8z9ImHMgdaIrn6lPlo-vqGcIvOpT18083101023_720_820.jpg"/>

          </div>
          <div class="swiper-slide">
            <img src="../../assets/imgs/A1rQdP0ODHn2kwmRecnO-SMZZE83oT1808151951_720_820.jpg"/>

          </div>
          <div class="swiper-slide">
            <img src="../../assets/imgs/0J4ePJehOCpc93kbkfX2-hEGFrICGT1808222100_720_820.jpg"/>

          </div>
          <div class="swiper-slide">
            <img src="../../assets/imgs/8dxhTC3V4XHTi5CdIndZ-tyGTCJlRT1808211539_720_820.jpg"/>

          </div>
          <div class="swiper-slide">
            <img src="../../assets/imgs/oz66MqTXsJTVB23yyPIV-1yEgoLghT1809041358_720_820.jpg"/>

          </div>
          <div class="swiper-slide">
            <img src="../../assets/imgs/xTNx7MG5UsN2Kd7GiRMr-N4TOxlGtT1808292056_720_820.jpg"/>

          </div>
        </div>
      </div>
    </div>
  <div class="morefasition">
    <a href="">
      <img src="../../assets/imgs/gfasition.png" alt="">
    </a>
  </div>
</div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper"
    export default {
        name: "klSwiperTwo",
        mounted(){
          new Swiper(".swiper-container2",{
            watchSlidesProgress: true,
            loop: true,
            loopedSlides: 3,
            autoplay: true,
            autoplayDisableOnInteraction:false,
            on: {
              progress: function(progress) {
                for (var i = 0; i < this.slides.length; i++) {
                  var slide = this.slides.eq(i);
                  var slideProgress = this.slides[i].progress;
                  var modify = 1;
                  if (Math.abs(slideProgress) > 1) {
                    modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                  }
                  var translate = slideProgress * modify * 250/200 + 'rem';
                  var scale = 1 - Math.abs(slideProgress) / 5;
                  var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                  slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                  slide.css('zIndex', zIndex);
                  slide.css('opacity', 1);
                  if (Math.abs(slideProgress) > 3) {
                    slide.css('opacity', 0);
                  }
                }
              },
              setTransition: function(transition) {
                for (var i = 0; i < this.slides.length; i++) {
                  var slide = this.slides.eq(i)
                  slide.transition(transition);
                }

              }
            }
          })
        }
    }
</script>

<style scoped lang="less">
.swipertwo{
  width:100%;
  margin-top:560/200rem;
  .splitline{
    background:#f0f0f0;
    height:19/200rem;
    z-index:100;
  }
  .tit {
    img {
      width: 100%;
      height: 154/200rem;
    }
  }
  .swiperbox{
    height:637/200rem;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    .swiper-container2{
      height:100%;
      .swiper-wrapper{
        width:100%;
        transform:translate3d(-2173px,0,0);
        img{
          width:539/200rem;
          height:607/200rem;
        }
      }
    }
  }
  .morefasition{
    img{
      width:100%;
      height:188/200rem;
    }
  }
}
</style>
