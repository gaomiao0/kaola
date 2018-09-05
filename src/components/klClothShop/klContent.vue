<template>
  <div class="content">
    <div class="con">
      <kl-swiper></kl-swiper>
      <kl-nav></kl-nav>
    </div>
  </div>
</template>

<script>
    import KlSwiper from "./klSwiper";
    import KlNav from "./klNav";
    export default {
        name: "klContent",
      components: {KlNav, KlSwiper}
    }
</script>

<style scoped>
.content{
  width:100%;
  flex:1;
  overflow-y: scroll;
  margin-top:0.54rem;
}
.con{
 /* display: flex;
  flex-direction: column;*/
}
</style>
