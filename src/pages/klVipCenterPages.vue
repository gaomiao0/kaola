<template>
    <div  class="goodsdetail">
        <kl-vip-center-header></kl-vip-center-header>
        <kl-vip-center-content></kl-vip-center-content>
        <kl-vip-center-footer></kl-vip-center-footer>
    </div>
</template>


<script type="text/ecmascript-6">
import klVipCenterHeader from "../components/kl-vipCenter/klVipCenterHeader.vue";
import klVipCenterContent from "../components//kl-vipCenter/klVipCenterContent";
import klVipCenterFooter from "../components/kl-vipCenter/klVipCenterFooter";
export default {
  components: {
    klVipCenterHeader,
    klVipCenterContent,
    klVipCenterFooter
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
