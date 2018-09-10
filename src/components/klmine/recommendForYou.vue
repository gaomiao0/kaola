<template>
  <div class="smallbox">
    <h2 class="think">猜你喜欢</h2>
    <div class="guesslist">
      <div class="listgoods" v-for="n in one.goodslist" :key="n.id">
        <div class="listgoods_pic">
          <a class="listgoods_pic_a" href="javascript:;">
            <img :src=n.pic />
          </a>
          <img class="sign" :src=n.imgs  v-if="n.imgs"/>
        </div>
        <div class="listgoods_tit">
          <h4 class="tit_h4">{{n.title}}</h4>
          <div class="selfmark">
            <span class="mark">自营</span>
            <span class="mark">包税</span>
            <span class="balance">{{n.percentage}}</span>
          </div>
          <div class="price">
            <strong class="newprice">{{n.newprice}}</strong>
            <span class="oldprice">{{n.oldprice}}</span>
          </div>
          <div class="opinion">
            <a class="headpic" href="javascript:;">
              <img :src=n.img />
            </a>
            <p class="headpic_txt">{{n.message}}</p>
            <i class="trangle"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "recommendForYou",
    props:["one"]
  }
</script>


<style scoped>
  .smallbox{
    background: #efefef;
    padding:0 0.1rem;
    margin-bottom: 0.6rem;
  }
  .think{
    line-height: 0.48rem;
    text-align: center;
    font-size: 0.18rem;
    color: #000;
  }
  .guesslist{
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
  }
  .listgoods{
    background: #fff;
    border-radius: 0.06rem;
    width: 49%;
    margin-bottom: 0.1rem;
  }
  .listgoods_pic{
    position: relative;
    border-bottom: 1px solid #f3f3f3;
  }
  .listgoods_pic_a img{
    width: 1.74rem;
    height: 1.74rem;
    border-radius: 0.06rem;
  }
  .sign{
    position: absolute;
    top:0.04rem;
    right: 0.04rem;
    width: 0.32rem;
    height: 0.37rem;
  }
  .listgoods_tit{
    font-size: 0.12rem;
    padding: 0 0.06rem 0.1rem;
  }
  .tit_h4{
    color: #353535;
    line-height: 0.18rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    padding-bottom: 0.04rem;
  }
  .mark{
    border:1px solid #e00904;
    color: #e00904;
    border-radius: 0.06rem;
    padding: 0 0.02rem;
  }
  .balance{
    color: #8f8f8f;
  }
  .price{
    line-height: 0.26rem;
  }
  .newprice{
    color: #ff0c10;
    font-size: 0.14rem;
  }
  .oldprice{
    color: #878787;
    text-decoration: line-through;
  }
  .headpic img{
    width: 0.17rem;
    height: 0.17rem;
    border-radius: 50%;
  }
  .opinion{
    display: -webkit-flex;
    position: relative;
  }
  .headpic_txt{
    width: 1.28rem;
    height: 0.34rem;
    background: #f2f2f2;
    border-radius: 0.08rem;
    margin-left: 0.02rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #8b8b8b;
    padding: 0 0.06rem;
  }
  .trangle{
    width: 0;
    border:0.06rem solid transparent;
    border-top-color: #f2f2f2;
    position: absolute;
    top:0;
    left:0.13rem;
  }

</style>
