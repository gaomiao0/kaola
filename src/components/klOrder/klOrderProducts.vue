<template>
  <li class="eachshop">
    <h1>
      <i class="iconfont icon-cangku"></i>
      <span>{{shopslist.tax}}</span>
    </h1>
    <h1>以下商品我们将为你尽快安排发货</h1>
    <ul>
      <li v-for="(m,index) in shopslist.productlist">
        <img :src="m.imgs" alt="">
        <div class="info">
          <p>{{m.tit}}</p>
          <p class="pandnum">
            <span>￥<b class="price">{{m.price}}</b></span>
            <span>×<b>{{m.num}}</b></span>
          </p>
          <p class="tips"><span>{{m.tip1}}</span><span>{{m.tip2}}</span></p>
        </div>
      </li>
    </ul>
    <h2 v-if="shopslist.msg">
      卖家留言:
      <span>给卖家留言，最多100个字</span>
    </h2>
  </li>
</template>

<script>
    export default {
        name: "klOrderProducts",
      props:["shopslist"]
    }
</script>

<style scoped lang="less">
  .eachshop{
    background: #fff;
    margin-bottom: 20/200rem;
  h1{
    font-weight: 100;
    font-size: 24/200rem;
    color:#484848;
    height:79/200rem;
    margin-left:30/200rem ;
    border-bottom:1px solid #f1f1f1;
    display: flex;
    align-items: center;
  .iconfont{
    margin-right:10/200rem;
  }
  }
  h2{
    font-weight: 100;
    font-size: 24/200rem;
    color:#484848;
    height:79/200rem;
    margin-left:30/200rem ;
    display: flex;
    align-items: center;
  .span{
    color:#bebebe;
  }
  }
  ul{
  li{
    display: flex;
    margin-left:30/200rem ;
    border-bottom:1px solid #f1f1f1;
    height:198/200rem;
    align-items: center;
  img{
    width:140/200rem;
    height:140/200rem;
  }
  .info{
    display: flex;
    flex-direction: column;
    padding:0 30/200rem 0 20/200rem;
    box-sizing: border-box;
    overflow-x: hidden;
  p{
    font-size:24/200rem ;
    color:#333333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pandnum{
    display: flex;
    justify-content: space-between;
    margin:10/200rem 0;
  span{
    font-weight:600;
  b{
    font-weight:600;
  }
  }
  }
  .tips{
    display: flex;
  span{
    font-size:18/200rem;
    color:#ff1111;
    padding:0 3px;
    border:1px solid #ff1111;
    border-radius: 20/200rem;
    margin-left: 10/200rem;
  }
  }
  }
  }
  }
  }
</style>
