<template>
  <div class="center">
    <kl-recharge-list></kl-recharge-list>
    <kl-recharge-phone></kl-recharge-phone>
    <kl-rechargetraffic></kl-rechargetraffic>
    <kl-recharge-footer></kl-recharge-footer>
  </div>

</template>


<script type="text/ecmascript-6">
  import klRechargeList from "./klRechargeList.vue"
  import klRechargePhone from "./klRechargePhone.vue"
  import klRechargetraffic from "./klRechargetraffic.vue"
  import klRechargeFooter from "./klRechargeFooter.vue";
  export default  {
    components:{
    klRechargeList,
    klRechargePhone,
    klRechargetraffic,
    klRechargeFooter
  }
  }
</script>

<style scoped>
   /*center*/
  .center{
    width: 100%;
    flex:1;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
  }
</style>
