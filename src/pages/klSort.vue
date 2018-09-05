<template>
  <div class="sort">
    <common-header></common-header>
    <sort-content class="SortContent"></sort-content>
    <common-footer></common-footer>
  </div>
</template>

<script>
    import CommonFooter from "../components/commonComponents/CommonFooter"
    import CommonHeader from "../components/commonComponents/CommonHeader"
    import SortContent from "../components/klSort/SortContent";
    export default {
        name: "klSort",
        components: {SortContent,CommonHeader,CommonFooter}
    }
</script>

<style scoped>
.sort{
   display: flex;
   flex-direction: column;
 }
/*.SortContent{
  flex:1;
  overflow-y: scroll;
}*/
</style>
