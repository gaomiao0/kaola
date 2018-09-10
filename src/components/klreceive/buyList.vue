<template>
  <div>
    <p class="line">
      <span class="line_s"></span>
      <span class="want">你可能还想买</span>
    </p>
    <div class="buy_list">
      <div class="buy_good" v-for="s in first" :key="s.id">
        <a class="bg_pic" href="javascript:;">
          <img class="goodpic" :src=s.img />
          <img class="save" :src=s.pospic  v-if="s.pospic"/>
        </a>
        <a class="bg_tit" href="javascript:;">{{s.listtit}}</a>
        <a class="message" href="javascript:;">
          <img :src=s.headpic />
          <span>{{s.messg}}</span>
        </a>
        <a class="myself" href="javascript:;">
          <span class="count">{{s.value}}</span>
          <span class="personal distance" v-if="s.myself">{{s.myself}}</span>
          <span class="activ distance" v-if="s.spacil">{{s.spacil}}</span>
          <span class="activ distance" v-if="s.time">{{s.time}}</span>
          <span class="activ distance" v-if="s.activ">{{s.activ}}</span>
          <span class="activ distance" v-if="s.geld">{{s.geld}}</span>
        </a>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name:"buyList",
    props:["first"]

  }

</script>

<style scoped>
  .line{
    line-height: 0.42rem;
    display: -webkit-flex;
    position: relative;
  }
  .line_s{
    width: 3.2rem;
    height: 0.01rem;
    border-top: 1px solid #ececec;
    position: absolute;
    top:0.22rem;
    left: 0.26rem;
  }
  .want{
    font-size: 0.14rem;
    padding: 0 0.1rem;
    background: #fff;
    z-index: 10;
    margin:0 auto
  }
  .buy_list{
    padding: 0 0.1rem;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .buy_good{
    width: 49%;
    border-bottom: 1px solid #f5f5f5;
    margin-top: 0.08rem;
  }
  .bg_pic{
    display: -webkit-flex;
    position: relative;
  }
  .goodpic{
    width: 1.76rem;
    height: 1.76rem;
  }
  .save{
    width: 0.32rem;
    height: 0.36rem;
    position: absolute;
    top:0;
    right: 0;
  }
  .bg_tit{
    width: 1.7rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 0.12rem;
    color: #1e1e1e;
    margin: 0.06rem 0;
  }
  .message{
    font-size: 0.12rem;
    color: #595959;
    display: -webkit-flex;
    line-height: 0.18rem;
    width: 1.66rem;
    height: 0.4rem;
    background: #f5f5f5;
    border-radius: 0.04rem;
    overflow: hidden;
    padding: 0 0.04rem;
    margin-bottom: 0.06rem;
  }
  .message img{
    height: 0.14rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    padding: 0.04rem 0.02rem 0 0;
  }
  .myself{
    display: -webkit-flex;
    font-size: 0.12rem;
    margin-bottom: 0.2rem;
  }
  .count{
    font-size: 0.16rem;
    color: #e70005;
  }
  .personal{
    color: #e70005;
    border: 1px solid #e70005;
    border-radius: 0.02rem;
    padding: 0 0.02rem;
  }
  .activ{
    padding: 0 0.04rem;
    border-radius: 0.02rem;
    color: #f7b3bd;
    background: #dd1f43;
    line-height: 0.18rem;
  }
  .distance{
    margin:0 0.05rem;
  }

</style>
