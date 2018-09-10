<template>
  <div>
  <div class="nav">
    <kl-nav-inner :inner="v" v-for="(v,index) in navbox.navlist" :key="index"></kl-nav-inner>
  </div>
    <div class="fashion">
      <a href="" class="bigimg">
        <img :src="navbox.fashion.bannerimgs" alt="">
      </a>
      <div class="fashion_list">
        <a href=""  v-for="(f,index) in navbox.fashion.smallimgs" :key="index">
          <img :src="f.imgs" alt="">
        </a>
      </div>
    </div>
</div>
</template>

<script>
    import KlNavInner from "./klNavInner";
    export default {
        name: "klNav",
      components: {KlNavInner},
      props:["navbox"]
    }
</script>

<style scoped lang="less">
.nav{
  width:100%;
  padding:0 15/200rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  }

.splitline{
  height:18/200rem;
  background: #f1f1f1;
}
  .fashion{
    display: flex;
    flex-direction: column;
    background: #ecb8af;
    padding:18/200rem 0;
    box-sizing: border-box;
    .bigimg{
      width:100%;
      margin-bottom: 22/200rem;
      img{
        width:720/200rem;
        height:166/200rem;
        margin:0 auto;
      }
    }
    .fashion_list{
      display: flex;
      overflow-x: scroll;
      a{
        margin-left: 22/200rem;
        img{
          width:200/200rem;
          height:200/200rem;
        }
      }
    }
  }
</style>
