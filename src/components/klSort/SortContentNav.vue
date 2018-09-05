<template>
  <div class="navbox">
  <div class="nav">

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
  </div>
</template>

<script>
    export default {
        name: "SortContentNav"
    }
</script>

<style scoped>
.navbox{
  border-right: 1px solid #ececec;
}
.nav{
  padding-top:0.15rem;
  box-sizing: border-box;
  z-index:50;
  overflow-y: scroll;
}
.nav ul{
 /* display: flex;
  flex-direction: column;*/
}
.nav ul li{
  /*flex-shrink: 1;*/
  height:0.5rem;
  line-height:0.5rem;
  font-size:0.14rem ;
  color:#000000;
  padding:0 0.24rem;
  box-sizing: border-box;
  text-align: center;
}
</style>
