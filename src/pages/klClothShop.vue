<template>
    <div>
      <common-header></common-header>
      <kl-content></kl-content>
      <common-footer></common-footer>
    </div>
</template>

<script>
  import CommonFooter from "../components/commonComponents/CommonFooter"
  import CommonHeader from "../components/commonComponents/CommonHeader"
    import KlContent from "../components/klClothShop/klContent";
    export default {
        name: "klClothShop",
      components: {KlContent,CommonHeader,CommonFooter}
    }
</script>

<style scoped>

</style>
