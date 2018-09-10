<template>
  <div class="navbox">
  <div class="nav">
<<<<<<< HEAD
    <ul>
      <li @click="goto(index)" v-for="(n,index) in navdata" :key="index">{{n}}</li>
    </ul>
  </div>
    <p class="bg"></p>
=======

    <ul>
      <li>服饰鞋靴</li>
      <li>环球美食</li>
      <li>全球工厂店</li>
      <li>海外旗舰店</li>
      <li>网易严选</li>
      <li>生鲜</li>
      <li>充值中心</li>
      <li>宠物生活</li>
      <li>服饰鞋靴</li>
      <li>环球美食</li>
      <li>全球工厂店</li>
      <li>海外旗舰店</li>
      <li>网易严选</li>
      <li>生鲜</li>
      <li>充值中心</li>
      <li>宠物生活</li>
    </ul>
  </div>
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
  </div>
</template>

<script>
    export default {
<<<<<<< HEAD
        name: "SortContentNav",
        props:["navdata","index","goto"],
        methods:{
         /*gototo(m){
            $(".bg").animate({
              top:m*0.5+0.3+"rem"
            },100)
         }*/
        }
    }
</script>

<style scoped lang="less">
.navbox{
  border-right: 1px solid #ececec;
  position:relative;
  .bg{
    width:70%;
    height:0.18rem;
    background: #fc4116;
    border-radius: 0.08rem;
    margin:0 auto;
    position:absolute;
    top:0.3rem;
    left: 15%;
    z-index: -1;
  }
=======
        name: "SortContentNav"
    }
</script>

<style scoped>
.navbox{
  border-right: 1px solid #ececec;
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
}
.nav{
  padding-top:0.15rem;
  box-sizing: border-box;
<<<<<<< HEAD
  overflow-y: scroll;
  background: transparent;
=======
  z-index:50;
  overflow-y: scroll;
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
}
.nav ul{
 /* display: flex;
  flex-direction: column;*/
<<<<<<< HEAD
  z-index:999;
}
.nav ul li{
  /*flex-shrink: 1;*/
  z-index:999;
=======
}
.nav ul li{
  /*flex-shrink: 1;*/
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
  height:0.5rem;
  line-height:0.5rem;
  font-size:0.14rem ;
  color:#000000;
  padding:0 0.24rem;
  box-sizing: border-box;
  text-align: center;
}
<<<<<<< HEAD

=======
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
</style>
