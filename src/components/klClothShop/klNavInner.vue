<template>
  <a href="">
    <img :src="inner.simg" alt="">
    <span>{{inner.navtit}}</span>
    <span class="hastip" v-if="inner.navtip">{{inner.navtip}}</span>
  </a>
</template>

<script>
    export default {
        name: "klNavInner",
      props:["inner"]
    }
</script>

<style scoped lang="less">
  a{
    width:20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:21/200rem;
    color:#000;
    margin-bottom: 33/200rem;
    position:relative;
  img{
    width:145/200rem;
    height:133/200rem;
  }
  }
  .hastip{
    display: block;
    position:absolute;
    right:-60/200rem;
    top:0;
    font-size: 16/200rem;
    color:#fff;
    background: url("../../assets/imgs/znq_bg.png") no-repeat;
    background-size:100/200rem 40/200rem;
    width:100/200rem;
    height:40/200rem;
    text-align: center;
    z-index:100;
  }
</style>
