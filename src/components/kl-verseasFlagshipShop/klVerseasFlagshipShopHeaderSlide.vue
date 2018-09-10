 <template >
 <!--轮播图-->
        <div class="banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="fss in DataVerseas.bannerSlide ">
                        <div class="activityPic">
                            <div class="bigSlidePic">
                                <img :src="fss.bigPicSlidePic" alt=""/>
                            </div>
                            <div class="sameSlidPic" >
                                <img v-for="fssa in fss.samePicSlidPic" :src="fssa" alt=""/>
                            </div>
                        </div>
                    </div>
                  <!--<div class="swiper-slide" v-for="fss in DataVerseas.bannerSlide ">-->
                    <!--<div class="activityPic">-->
                      <!--<div class="bigSlidePic">-->
                        <!--<img :src="fss.bigPicSlidePic" alt=""/>-->
                      <!--</div>-->
                      <!--<div class="sameSlidPic" >-->
                        <!--<img v-for="fssa in fss.samePicSlidPic" :src="fssa" alt=""/>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="swiper-slide" v-for="fss in DataVerseas.bannerSlide ">-->
                    <!--<div class="activityPic">-->
                      <!--<div class="bigSlidePic">-->
                        <!--<img :src="fss.bigPicSlidePic" alt=""/>-->
                      <!--</div>-->
                      <!--<div class="sameSlidPic" >-->
                        <!--<img v-for="fssa in fss.samePicSlidPic" :src="fssa" alt=""/>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->

                </div>
            </div>
            <div class="shopSafeguard">
                <div class="qualityShop shopSafeguardBox">
                    <i class="iconfont icon-65"></i>
                    <p>正品保障</p>
                </div>
                <div class="overseasMail shopSafeguardBox">
                    <i class="iconfont icon-icon--"></i>
                    <p>正品保障</p>
                </div>
                <div class="afterSafeguard shopSafeguardBox">
                    <i class="iconfont icon-tuikuan"></i>
                    <p>正品保障</p>
                </div>
                <div class="priceOptimal shopSafeguardBox">
                    <i class="iconfont icon-biaoqian"></i>
                    <p>正品保障</p>
                </div>
            </div>
        </div>
</template>
<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.css';
    export default {
             data(){
            return{
                DataVerseas:[],
            }
        },
        mounted(){
          observer : true;
          observeParents : true;
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,//可选选项，自动滑动
                loop : true,
                direction: 'horizontal',
                spaceBetween : 10,
                loop: true,
                loopAdditionalSlides : 1,
                slidesPerView : 1.2,
                centeredSlides : true,

            });
        },
          created() {
            this.getData()
        },
        methods: {
            getData() {
                this.$http.get('/api/address').then(response=>{
                    this.DataVerseas = response.data.data
                    // console.log(this.DataVerseas.bannerSlide[0].bigPicSlidePic)
                })
            },
        },

    }

</script>

<style scoped>

</style>

