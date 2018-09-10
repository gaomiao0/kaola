<template>
  <div class="cont">
    <common-header></common-header>
    <kl-bigbox class="con"></kl-bigbox>
    <common-footer></common-footer>
  </div>

</template>

<script>
    import CommonHeader from "../components/commonComponents/CommonHeader";
    import CommonFooter from "../components/commonComponents/CommonFooter";
    import KlBigbox from "../components/klIndex/klBigbox";
    // import Swiper from "swiper/dist/js/swiper";
    export default {
        name: "klIndex",
      components: {KlBigbox,CommonHeader,CommonFooter}
    }
</script>

<style scoped>
.cont{
  display: flex;
  flex-direction: column;
}
.con{
  padding-top:0.54rem;
  flex:1;
  overflow-y: scroll;
}
</style>
