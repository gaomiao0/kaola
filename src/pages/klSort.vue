<template>
  <div class="sort">
    <common-header></common-header>
    <sort-content class="SortContent" :alldata="cendata"></sort-content>
    <common-footer v-show="$route.meta.showFooter"></common-footer>
  </div>
</template>

<script>
    import CommonFooter from "../components/commonComponents/CommonFooter"
    import CommonHeader from "../components/commonComponents/CommonHeader"
    import SortContent from "../components/klSort/SortContent";
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
    }
</script>

<style scoped>
.sort{
   display: flex;
   flex-direction: column;
 }
.SortContent{
  flex:1;
  overflow-y: scroll;
  margin-top:0.54rem;

}
</style>
