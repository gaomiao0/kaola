<template>
  <div class="content">
    <div class="con">
<<<<<<< HEAD
      <kl-swiper :swipone = "alldata.swipone"></kl-swiper>
      <kl-nav :navbox = "alldata.navbox"></kl-nav>
      <kl-new-products :newpros = "alldata.newpros"></kl-new-products>
      <kl-new-class :newclass="alldata.newclass"></kl-new-class>
      <kl-big-rank :bigrank="alldata.bigrank"></kl-big-rank>
      <kl-rank-select :ranksel="alldata.ranksel"></kl-rank-select>
      <kl-swiper-two></kl-swiper-two>
      <kl-hot-product :hotpros="alldata.hotpros" id="searchBar" :class="searchBarFixed===true?'isFixed':''"></kl-hot-product>
=======
      <kl-swiper></kl-swiper>
      <kl-nav></kl-nav>
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
    </div>
  </div>
</template>

<script>
    import KlSwiper from "./klSwiper";
    import KlNav from "./klNav";
<<<<<<< HEAD
    import KlNewProducts from "./klNewProducts";
    import KlNewClass from "./klNewClass";
    import KlBigRank from "./klBigRank";
    import KlRankSelect from "./klRankSelect";
    import KlSwiperTwo from "./klSwiperTwo";
    import KlHotProduct from "./klHotProduct";
    export default {
        name: "klContent",
        components: {KlHotProduct, KlSwiperTwo, KlRankSelect, KlBigRank, KlNewClass, KlNewProducts, KlNav, KlSwiper},
        props:["alldata"],
        data(){
          return{
            searchBarFixed:false
          }
        },
        methods:{
          handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(scrollTop)
            var offsetTop = document.querySelector('#searchBar').offsetTop
            if (scrollTop > offsetTop) {
              this.searchBarFixed = true
            } else {
              this.searchBarFixed = false
            }
          }
        },
        mounted () {
          window.addEventListener('scroll', this.handleScroll)

        },

      destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
</script>

<style scoped lang="less">
.content{
  flex:1;
  width:100%;
  overflow-y: scroll;
=======
    export default {
        name: "klContent",
      components: {KlNav, KlSwiper}
    }
</script>

<style scoped>
.content{
  width:100%;
  flex:1;
  overflow-y: scroll;
  margin-top:0.54rem;
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
}
.con{
 /* display: flex;
  flex-direction: column;*/
}
<<<<<<< HEAD

    .isFixed{
      position:fixed;
      top:0;
      z-index:999;
    }

=======
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
</style>
