<template>
        <!-- vipIntroduce -->
        <div class="vipIntroduce">
          <div class="swiper-container " id="vipIntroduceSlide">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="vint in vslid">
                <div class="vipIntroduceBox">
                  <a href="" v-for="vinta in vint.vslide">
                    <img :src="vinta.vlipic" alt="">
                    <p>{{vinta.vpric}}</p>
                    <span>{{vinta.vtxt}}</span>
                  </a>
                  <!--<a href="">-->
                    <!--<img src="../../assets/imgs/m-v-2.png" alt="">-->

                    <!--<p>会员96折</p>-->
                    <!--<span>超9成商品</span>-->
                  <!--</a>-->
                  <!--<a href="">-->
                    <!--<img src="../../assets/imgs/m-v-2.png" alt="">-->

                    <!--<p>会员96折</p>-->
                    <!--<span>超9成商品</span>-->
                  <!--</a>-->
                  <!--<a href="">-->
                    <!--<img src="../../assets/imgs/m-v-2.png" alt="">-->

                    <!--<p>会员96折</p>-->
                    <!--<span>超9成商品</span>-->
                  <!--</a>-->
                </div>
              </div>
              <!--<div class="swiper-slide">-->
                <!--<div class="vipIntroduceBox">-->
                  <!--<a href="">-->
                    <!--<img src="../../assets/imgs/m-v-2.png" alt="">-->

                    <!--<p>会员96折</p>-->
                    <!--<span>超9成商品</span>-->
                  <!--</a>-->
                  <!--<a href="">-->
                    <!--<img src="../../assets/imgs/m-v-2.png" alt="">-->

                    <!--<p>会员96折</p>-->
                    <!--<span>超9成商品</span>-->
                  <!--</a>-->
                  <!--<a href="">-->
                    <!--<img src="../../assets/imgs/m-v-2.png" alt="">-->

                    <!--<p>会员96折</p>-->
                    <!--<span>超9成商品</span>-->
                  <!--</a>-->
                  <!--<a href="">-->
                    <!--<img src="../../assets/imgs/m-v-2.png" alt="">-->

                    <!--<p>会员96折</p>-->
                    <!--<span>超9成商品</span>-->
                  <!--</a>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="swiper-slide">-->
                <!--<div class="vipIntroduceBox">-->
                  <!--<a href="">-->
                    <!--<img src="../../assets/imgs/m-v-2.png" alt="">-->

                    <!--<p>会员96折</p>-->
                    <!--<span>超9成商品</span>-->
                  <!--</a>-->
                  <!--<a href="">-->
                    <!--<img src="../../assets/imgs/m-v-2.png" alt="">-->

                    <!--<p>会员96折</p>-->
                    <!--<span>超9成商品</span>-->
                  <!--</a>-->
                  <!--<a href="">-->
                    <!--<img src="../../assets/imgs/m-v-2.png" alt="">-->

                    <!--<p>会员96折</p>-->
                    <!--<span>超9成商品</span>-->
                  <!--</a>-->
                  <!--<a href="">-->
                    <!--<img src="../../assets/imgs/m-v-2.png" alt="">-->

                    <!--<p>会员96折</p>-->
                    <!--<span>超9成商品</span>-->
                  <!--</a>-->
                <!--</div>-->
              <!--</div>-->
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
</template>


<script type="text/ecmascript-6">
    import Swiper from 'swiper';
    // import 'swiper/dist/css/swiper.css';
    export default{
    mounted(){
      new Swiper('#vipIntroduceSlide', {
        autoplay: false,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      })
    },
      data(){
        return{
          vslid:[],
        }
      },
      created() {
        this.getData()
      },
      methods: {
        getData() {
          this.$http.get('/api/address').then(response=>{
            this.vslid = response.data.data.vsli
          })
        },
      },
}
</script>

<style scoped>
  @import 'swiper/dist/css/swiper.css';
      /* vipIntroduce */
  .vipIntroduce {
    width: 100%;
    background: #fff
  }


  .vipIntroduceBox {
    display: flex;
    width: 100%;
    height: 100%;
    padding-top: 0.16rem;
    padding-bottom: 0.44rem;
  }

  .vipIntroduceBox a {
    width: 25%;
    font-size: 0.12rem;
    line-height: 0.2rem;
    text-align: center;
    color: #000;
  }

  .vipIntroduceBox a span {
    color: #888888
  }

  .vipIntroduceBox img {
    width: 0.33rem;
    height: 0.33rem;
    margin: 0 auto 0.08rem;

  }


</style>

<style>
  /*@import "swiper/dist/css/swiper.css";*/
</style>
