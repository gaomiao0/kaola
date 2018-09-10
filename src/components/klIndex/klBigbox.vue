<template>
    <div class="box">
      <kl-swiper :swep=index1.swiper></kl-swiper>
      <kl-nav :av=index1.navlist></kl-nav>
      <kl-section :six=index1.sex></kl-section>
      <kl-art :artic=index1.art></kl-art>
      <kl-list :lista=index1.list></kl-list>
      <kl-sum :su=index1.sum></kl-sum>
    </div>
</template>

<script>
    import KlSwiper from "./klSwiper";
    import KlNav from "./klNav";
    import KlSection from "./klSection";
    import KlArt from "./klArt";
    import KlList from "./klList";
    import KlSum from "./klSum";
    import {indexServices} from "../../api/mvp";
    export default {
        name: "klBigbox",
      components: {KlSum, KlList, KlArt, KlSection, KlNav, KlSwiper},
      data(){
        return{
          index1:[]

        }

        },
      methods:{
        foucs(){
          indexServices.indexInfoByUserId((data)=>{
            this.index1 = data;
            // console.log(data)
          })
        }
      },
      created(){
        this.foucs();
      },

    }

</script>

<style scoped>
  .box{
    flex: 1;
    overflow-y: auto;
    background: #f5f5f9;
  }

</style>
