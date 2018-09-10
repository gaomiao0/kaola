<template>
    <div class="Cloth" v-if="!loading">
      <klcs-header></klcs-header>
      <kl-content class="CScontent" :alldata="alldata"></kl-content>
      <klcs-footer></klcs-footer>
    </div>
</template>

<script>
    import KlContent from "../components/klClothShop/klContent";
    import KlcsHeader from "../components/klClothShop/klcsHeader";
    import KlcsFooter from "../components/klClothShop/klcsFooter";
    import {klData} from "../apis/AskData";
    // import Swiper from "swiper/dist/js/swiper"
    export default {
      name: "klClothShop",
      components: {KlcsFooter, KlcsHeader, KlContent},
      data(){
          return {
            alldata:{},
            loading: false
          }
      },
      methods:{
          initdata(){
            this.loading=true;
            let that=this;
            klData.askKlData(data=>{
              this.alldata = data.homedata;
             that.loading=false;
              // console.log(this.alldata)
            })
          }
      },
      created(){
          this.initdata()
      }
    }
</script>

<style scoped>
.Cloth{
  display: flex;
  flex-direction: column;
}
.CScontent{
  flex:1;
  overflow-y: scroll;
  margin-top:0.54rem;
  overflow-x: hidden;
}
</style>
