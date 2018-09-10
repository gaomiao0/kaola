<template>
  <div class="bigbox">
    <!--<kl-list-head></kl-list-head>-->
    <kl-list-box></kl-list-box>
  </div>

</template>

<script>
  import KlListHead from "../components/klGoodsList/klListHead";
  import KlListBox from "../components/klGoodsList/klListBox";
  export default {
    name: "klGoodsList",
    components: {KlListBox, KlListHead}
  }
</script>

<style scoped>

</style>
