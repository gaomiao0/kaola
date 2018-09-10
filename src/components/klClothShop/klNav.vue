<template>
<<<<<<< HEAD
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
=======
<div class="nav">
  <a href="">
    <img src="" alt="">
    <span>女装</span>
  </a>
  <a href="">
    <img src="" alt="">
    <span>童装童鞋</span>
  </a>
  <a href="">
    <img src="" alt="">
    <span>男装</span>
  </a>
  <a href="">
    <img src="" alt="">
    <span>运动</span>
  </a>
  <a href="">
    <img src="" alt="">
    <span>鞋靴</span>
  </a>
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
</div>
</template>

<script>
<<<<<<< HEAD
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
=======
    export default {
        name: "klNav"
    }
</script>

<style scoped>
.nav{
  width:100%;
}
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
</style>
