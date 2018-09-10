<template>
  <div class="sort">
    <common-header></common-header>
<<<<<<< HEAD
    <sort-content class="SortContent" :alldata="cendata"></sort-content>
    <common-footer v-show="$route.meta.showFooter"></common-footer>
=======
    <sort-content class="SortContent"></sort-content>
    <common-footer></common-footer>
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
  </div>
</template>

<script>
    import CommonFooter from "../components/commonComponents/CommonFooter"
    import CommonHeader from "../components/commonComponents/CommonHeader"
    import SortContent from "../components/klSort/SortContent";
<<<<<<< HEAD
    import {klData} from "../apis/AskData"
    export default {
        name: "klSort",
        components: {SortContent,CommonHeader,CommonFooter},
      data() {
        return {
          cendata: {}
        }
      },
      methods: {
        askdata() {
          klData.askKlData((data)=>{
            this.cendata = data;
            // console.log(this.cendata)
          })
        }
      },
      created(){
          this.askdata()

      }
=======
    export default {
        name: "klSort",
        components: {SortContent,CommonHeader,CommonFooter}
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
    }
</script>

<style scoped>
.sort{
   display: flex;
   flex-direction: column;
 }
<<<<<<< HEAD
.SortContent{
  flex:1;
  overflow-y: scroll;
  margin-top:0.54rem;

}
=======
/*.SortContent{
  flex:1;
  overflow-y: scroll;
}*/
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
</style>
