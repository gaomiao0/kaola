<template>
    <div>
      <div class="by">
        <img src="../../assets/imgs/l4.png" />
      </div>


      <div class="nav" >
        <router-link to="/klClothShop" v-for="(n,index) in av" :key="index">
          <img :src=n.pic />
          <span>{{n.navname}}</span>
        </router-link>
      </div>

      <div class="gif_img">
        <router-link to="/klVipCenterPages"><img src="../../assets/imgs/l15.gif" /></router-link>
        <router-link to="/klVipCenterPages"><img src="../../assets/imgs/l16.gif"/></router-link>
      </div>

      <div class="gif_img">
        <router-link to="/klVerseasFlagshipShopPage"><img src="../../assets/imgs/l17.png" /></router-link>
        <router-link to="/klVerseasFlagshipShopPage"><img src="../../assets/imgs/l18.png"/></router-link>
      </div>

    </div>
</template>

<script>
    export default {
        name: "klNav",
      props:["av"]
    }
</script>

<style scoped>
  .by img{
    display: block;
    height: 0.5rem;
    width: 100%;
  }


  .nav{
    background: white;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 0.1rem;
  }
  .nav img{
    width: 0.6rem;
    height: 0.6rem;
    margin: 0.1rem auto;
    border-radius: 50%;


  }
  .nav a{
    color: #313431;
    text-align: center;
    width: 20%;
    font-size: 0.12rem;
    display: flex;
    flex-direction: column;
  }
  .gif_img{
    height: 0.85rem;


  }
  .gif_img a{
    display: block;
    width: 50%;
    height: 0.85rem;
    float: left;
  }
  .gif_img img{
    display: block;
    width: 100%;
    height: 0.85rem;

  }
</style>
