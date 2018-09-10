<template>
  <div>
<kl-msn-head></kl-msn-head>
    <kl-msn-list></kl-msn-list>
  </div>
</template>

<script>
    import KlMsnHead from "../components/klMsn/klMsnHead";
    import KlMsnList from "../components/klMsn/klMsnList";
    export default {
        name: "klMsn",
      components: {KlMsnList, KlMsnHead}
    }
</script>

<style scoped>

</style>
