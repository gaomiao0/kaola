<template>
        <!-- vipSift -->
        <div class="vipSift">
          <div class="vipSiftTitle">
            <a href="" v-for="vst in vsift.vsitit">{{vst.vsa}}</a>
            <!--<a href="">会员权益</a>-->
            <!--<a href="">精品商品</a>-->
          </div>
          <div class="vipSiftDetails">
            <div class="newWerfare">
              <div class="newWerfareTitle">
                <span></span>
                <p>{{vsift.vsftit}}</p>
                <span></span>
              </div>
              <div class="vipActivity">
                <p class="vipActivityP">{{vsift.vap}}</p>

                <div class="vipActivityRecommend">
                  <div class="swiper-container" id="vipActivityRecommendSlide">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <p class="vipActivityRecommendP">
                          <span class="vipActivityGoing">进行中</span>
                          <span class="vipActivityTime">9.5-9.6</span>
                        </p>
                        <p>工厂店会员活动日：会员特供福利放送</p>
                      </div>
                      <div class="swiper-slide">
                        <p class="vipActivityRecommendP">
                          <span class="vipActivityGoing">进行中</span>
                          <span class="vipActivityTime">9.5-9.6</span>
                        </p>
                        <p>工厂店会员活动日：会员特供福利放送</p>
                      </div>
                      <div class="swiper-slide">
                        <p class="vipActivityRecommendP">
                          <span class="vipActivityGoing">进行中</span>
                          <span class="vipActivityTime">9.5-9.6</span>
                        </p>
                        <p>工厂店会员活动日：会员特供福利放送</p>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="more">
                  <p>{{vsift.more}}</p>

                </div>
              </div>
              <div class="newWerfarePic" v-for="newpic in vsift.newp">
                <img :src="newpic.newp1" alt="">
              </div>
              <!--<div class="newWerfarePic">-->
                <!--<img src="../../assets/imgs/m-v-8.png" alt="">-->
              <!--</div>-->
              <div class="treasureBox">
                <div class="treasureTitle">
                  <div class="treasureTitleBox">
                    <h2>镇店之宝</h2>

                    <p>会员尊享 每日5折</p>
                  </div>
                  <div class="moreBox">
                    <span>{{vsift.more}}</span>
                  </div>
                </div>
                <div class="treasursDay">
                  <div class="treasurYesterDay treasursDaySame" v-for="tred in vsift.trd">
                    <h2>{{tred.trdh}}</h2>
                    <p>{{tred.trdp}}</p>
                  </div>
                  <!--<div class="treasurToDay pitch treasursDaySame">-->
                    <!--<h2>09.06</h2>-->
                    <!--<p>今日首推</p>-->
                  <!--</div>-->
                  <!--<div class="treasurtomorrow treasursDaySame">-->
                    <!--<h2>09.07</h2>-->
                    <!--<p>明日预告</p>-->
                  <!--</div>-->
                </div>
                <div class="treasurRecommShopBox">
                  <div class="swiper-container" id="treasurRecommShopSlide">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="treasurRecommShopBoxDay">
                          <div class="treasurRecommShopTile">
                            <img src="../../assets/imgs/m-v-22.png" alt="">
                          </div>
                          <div class="treasurRecommShop">
                            <div class="treasurRecommShopPic">
                              <img src="../../assets/imgs/m-v-23.png" alt="">
                            </div>
                            <div class="treasurRecommShopTxt">
                              <p>
                                赋活芳香无火香薰
                              </p>

                              <p>
                                工厂好货 | 超划算
                              </p>

                              <p>
                                抢购中，已售51.5%
                              </p>

                              <div class="treasurRecommShopTxtPrice">
                                <p>￥29<span>￥59</span></p>

                                <p>4.9折抢</p>
                              </div>
                            </div>
                          </div>
                          <div class="treasurRecommShopFooter">
                            <p>推荐语：遇见芳香，怦然心动。天然植物萃取... 更多 ></p>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="treasurRecommShopBoxDay">
                          <div class="treasurRecommShopTile">
                            <img src="../../assets/imgs/m-v-22.png" alt="">
                          </div>
                          <div class="treasurRecommShop">
                            <div class="treasurRecommShopPic">
                              <img src="../../assets/imgs/m-v-23.png" alt="">
                            </div>
                            <div class="treasurRecommShopTxt">
                              <p>
                                赋活芳香无火香薰
                              </p>

                              <p>
                                工厂好货 | 超划算
                              </p>

                              <p>
                                抢购中，已售51.5%
                              </p>

                              <div class="treasurRecommShopTxtPrice">
                                <p>￥29<span>￥59</span></p>

                                <p>4.9折抢</p>
                              </div>
                            </div>
                          </div>
                          <div class="treasurRecommShopFooter">
                            <p>推荐语：遇见芳香，怦然心动。天然植物萃取... 更多 ></p>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="treasurRecommShopBoxDay">
                          <div class="treasurRecommShopTile">
                            <img src="../../assets/imgs/m-v-22.png" alt="">
                          </div>
                          <div class="treasurRecommShop">
                            <div class="treasurRecommShopPic">
                              <img src="../../assets/imgs/m-v-23.png" alt="">
                            </div>
                            <div class="treasurRecommShopTxt">
                              <p>
                                赋活芳香无火香薰
                              </p>

                              <p>
                                工厂好货 | 超划算
                              </p>

                              <p>
                                抢购中，已售51.5%
                              </p>

                              <div class="treasurRecommShopTxtPrice">
                                <p>￥29<span>￥59</span></p>

                                <p>4.9折抢</p>
                              </div>
                            </div>
                          </div>
                          <div class="treasurRecommShopFooter">
                            <p>推荐语：遇见芳香，怦然心动。天然植物萃取... 更多 ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="upDate">{{vsift.uptxt}}</p>
        </div>
</template>


<script type="text/ecmascript-6">
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';
    export default{
        mounted(){
            var mySwiper = new Swiper('#treasurRecommShopSlide', {
                autoplay: false,//可选选项，自动滑动
                direction: 'horizontal',
                spaceBetween : 10,
                loopAdditionalSlides : 1,
                slidesPerView : 1.2,
                centeredSlides : true,
            })
            var mySwiper = new Swiper('#vipActivityRecommendSlide', {
                autoplay: true,//可选选项，自动滑动
                direction: 'vertical',
                loop:true,
            })
        },
      data(){
        return{
          vsift:[],
        }
      },
      created() {
        this.getData()
      },
      methods: {
        getData() {
          this.$http.get('/api/address').then(response=>{
            this.vsift = response.data.data.vsif
          })
        },
      },
    }
</script>

<style scoped>

    /* vipSift */
  .vipSift {
    width: 100%;
    background: #fff
  }

  .vipSiftTitle {
    width: 100%;
    height: 0.73rem;
    display: flex;
    border-bottom: 1px solid #f4f4f4;
  }

  .vipSiftTitle a {
    width: 33.3333%;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.62rem;
    padding-top: 0.13rem;
    color: #000000;
  }

  .vipSiftTitle .ckeck {
    color: #c6aa78;
    border-bottom: 4px solid #c6aa78;
  }

  /* newWerfare */
  .newWerfare {
    width: 100%;

  }

  .newWerfareTitle {
    width: 100%;
    height: 0.69rem;
    display: flex;
    font-size: 0.2rem;
    justify-content: space-around;
    align-items: center;
    font-weight: bolder;
  }

  .vipSiftDetails {
    width: 100%;
  }

  .newWerfareTitle span {
    width: 1.1rem;
    height: 3px;
    background: #cdcdcd;
  }

  .vipActivity {
    width: 3.7rem;
    height: 0.58rem;
    border: 1px solid #cdcdcd;
    display: flex;
    border-radius: 5px;
    margin: 0 0 0.23rem 0.16rem;
    align-items: center;
  }

  .vipActivityP {
    width: 0.8rem;
    font-size: 0.15rem;
    padding: 0 0.2rem;
    font-weight: bolder;
    box-sizing: border-box;
    text-align: center;
    border-right: 1px solid #f0f0f0;
  }

  .vipActivityRecommend {
    margin: 0.15rem 0.11rem 0 0.16rem;
    height: 100%;
    overflow: hidden;
  }
  #vipActivityRecommendSlide{
    height: 100%;
  }

  .vipActivityRecommend p {
    font-size: 0.12rem;
    margin-bottom: 5px;
  }

  .vipActivityRecommendP span {
    font-size: 0.1rem;
  }

  .vipActivityGoing {
    padding: 0 0.06rem;
    background: #c09547;
    color: #fff;
    border-radius: 12px
  }

  .more {
    font-size: 0.12rem;
    color: #999999;
  }

  /* newWerfarePic */
  .newWerfarePic img {
    width: 3.71rem;
    height: 0.73rem;
    margin: 0 0 0.23rem 0.16rem;
  }

  .treasureBox {
    width: 100%;
  }

  .treasureTitle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.14rem;
    border-bottom: 1px solid #f0f0f0;
    margin-top: 0.05rem;
    padding-bottom: 0.1rem
  }

  .treasureTitleBox {
    margin-left: 1.5rem;
    text-align: center;
  }

  .treasureTitleBox h2 {
    line-height: 0.25rem;
  }

  .treasureTitleBox p {
    font-size: 0.12rem;
    line-height: 0.2rem;
    letter-spacing: 0.02rem
  }

  .moreBox {
    margin-right: 0.16rem
  }

  .treasursDay {
    width: 100%;
    background: #f7f7f7;
    font-size: 0.18rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    color: #999999;
  }

  .treasursDaySame {
    padding: 0.12rem 0;
  }

  .treasursDaySame h2 {
    font-weight: 100;
    font-size: 0.18rem;
  }

  .pitch {
    color: #000;
    border-bottom: 4px solid #000000;
  }

  .treasurRecommShopBox {
    width: 100%;
    overflow-x: auto;
    display: flex;
    background: #f7f7f7;
  }

  .treasurRecommShopBoxDay {
    width: 3.32rem;
    height: 1.87rem;
    flex-shrink: 0;
    margin: 0.16rem auto 0;
    background: #fff;
    margin-bottom: 5px;
    box-shadow: 5px 0px 10px #e8e8e8, 0px 15px 10px #e8e8e8, -5px 0 3px #e8e8e8, -0px -5px 3px #e8e8e8;
  }

  .treasurRecommShopTile img {
    width: 0.61rem;
    height: 0.18rem;
    margin-bottom: 2px;

  }

  .treasurRecommShop {
    width: 100%;
    display: flex;
    font-size: 0.16rem;
  }

  .treasurRecommShopPic img {
    width: 1.02rem;
    height: 1.02rem;
    margin-right: 0.14rem;
  }

  .treasurRecommShopTxt {
    width: 100%;
  }

  .treasurRecommShopTxt p:nth-child(1) {
    letter-spacing: 0.02rem;
  }

  .treasurRecommShopTxt p:nth-child(2) {
    font-size: 0.14rem;
    color: #7b7b7b;
  }

  .treasurRecommShopTxt p:nth-child(3) {
    font-size: 0.1rem;
    width: 1.26rem;
    height: 0.17rem;
    line-height: 0.17rem;
    border: 1 xp solid #cfb270;
    background: #f2e7d1;
    color: #cfb270;
    padding-left: 0.08rem;
    border-radius: 0.08rem;
    margin-top: 0.1rem;

  }

  .treasurRecommShopTxtPrice {
    width: 100%;
    height: 0.28rem;
    display: flex;
    margin-top: 0.21rem;
    align-items: center;
    justify-content: space-between;
    font-size: 0.12rem;
  }

  .treasurRecommShopTxtPrice p:first-child {
    font-weight: bolder;
  }

  .treasurRecommShopTxtPrice p span {
    font-weight: 100;
    color: #bbbbbb;
    font-size: 0.1rem;
    margin-left: 0.06rem;
  }

  .treasurRecommShopTxtPrice p:last-child {
    height: 100%;
    padding: 0 0.13rem;
    line-height: 0.28rem;
    text-align: center;
    background: #000;
    color: #fff;
    font-size: 0.1rem;
    border-radius: 0.15rem;
    margin-right: 0.19rem;
  }

  .treasurRecommShopFooter {
    font-size: 0.1rem;
    line-height: 0.4rem;
    background: #fbfbfb;
    margin-top: 1px;
    color: #707070;
    text-align: center;
  }

  .upDate {
    font-size: 0.12rem;
    line-height: 0.4rem;
    color: #a2a2a2;
    text-align: center;
    background: #f7f7f7;
  }

</style>
