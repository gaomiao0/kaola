<template>
  <div class="box">
    <kl-list-head :mv=index1.mvp></kl-list-head>
    <kl-list-nav></kl-list-nav>
    <kl-list-sec :lise=index1.lisec></kl-list-sec>

  </div>
</template>

<script>
    import KlListNav from "./klListNav";
    import KlListSec from "./klListSec";
    import {indexServices} from "../../api/mvp";
    import KlListHead from "./klListHead";
    export default {
        name: "klListBox",
      components: {KlListHead, KlListSec, KlListNav},
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
    background: #f7f3f7;
    flex:1;
    /*display: flex;*/
    overflow-y: auto;

  }
</style>
