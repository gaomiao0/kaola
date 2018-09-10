<template>
    <div class="content">
      <klo-header></klo-header>
      <klo-content class="con" :alldata="alldata"></klo-content>
      <klo-footer></klo-footer>
    </div>
</template>

<script>
    import KloHeader from "../components/klOrder/kloHeader";
    import KloContent from "../components/klOrder/kloContent";
    import KloFooter from "../components/klOrder/kloFooter";
    import {klData} from "../apis/AskData";

    export default {
      name: "klOrder",
      components: {KloFooter, KloContent, KloHeader},
      data(){
        return {
          alldata:{}
        }
      },
      methods:{
        initdata(){
          klData.askKlData((data)=>{
            this.alldata = data.orderdata;
          })
        }
      },
      created(){
        this.initdata()
      }
 }
</script>

<style scoped>
  .content{
    display: flex;
    flex-direction: column;
  }
  .con{
    flex:1;
    overflow-y: scroll;
  }
</style>
