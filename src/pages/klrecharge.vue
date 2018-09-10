<template>
  <div  class="goodsdetail">
    <kl-rechargeheader></kl-rechargeheader>
    <kl-recharge-center></kl-recharge-center>
  </div>
</template>


<script type="text/ecmascript-6">
  import klRechargeheader from "../components/kl-charge/klRechargeheader.vue";
  import klRechargeCenter from "../components//kl-charge/klRechargeCenter.vue";
  
  export default {
    components: {
      klRechargeheader,
      klRechargeCenter,
    }
  };
</script>

<style scoped>
  html,body{
    height:100%;
  }
  .goodsdetail{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }

</style>
