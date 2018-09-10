<template>
  <div>
    <div class="head">
      <div class="header">
        <router-link to="/klmine" class="back">
            <i class="iconfont icon-left"></i>
        </router-link>
        <h2 class="my_receive">我的订单</h2>
        <a class="back" href="javascript:;">
          <i class="iconfont icon-sousuo-copy"></i>
          <i class="iconfont icon-sandian"></i>
        </a>
      </div>
      <div class="all_list">
        <a href="javascript:;" class="all_list_a" @click="change(0)" :class="{focus:temp==0}">全部</a>
        <a href="javascript:;" class="all_list_a" @click="change(1)" :class="{focus:temp==1}">待付款</a>
        <a href="javascript:;" class="all_list_a" @click="change(2)" :class="{focus:temp==2}">待发货</a>
        <a href="javascript:;" class="all_list_a" @click="change(3)" :class="{focus:temp==3}">待收货</a>
        <a href="javascript:;" class="all_list_a" @click="change(4)" :class="{focus:temp==4}">评价</a>
        <span class="linethrou"></span>
      </div>
    </div>
    <div class="section">
      <receive-one v-show="temp===0"></receive-one>
      <receive-two v-show="temp===1"></receive-two>
      <receive-one v-show="temp===2"></receive-one>
      <receive-two v-show="temp===3"></receive-two>
      <receive-three v-show="temp===4"></receive-three>
    </div>
  </div>

</template>

<script>
  import ReceiveOne from "../components/klreceive/receiveOne";
  import ReceiveTwo from "../components/klreceive/receiveTwo";
  import ReceiveThree from "../components/klreceive/receiveThree";
  import $ from 'jquery'
  export default {
    name:"klreceive",
    components: {ReceiveThree, ReceiveTwo, ReceiveOne},
    data(){
      return {
        temp:2
      }
    },
    methods:{
      change(c){
        this.temp=c;
        let $lines = c*74+18;
        $('.linethrou').animate({"left":$lines+"px"},200);
      }
    }
  }

</script>


<style scoped>
  .head{
    position: fixed;
    top: 0;
    left: 0;
    width: 3.75rem;
    z-index: 200;
    background: #fff;
  }
  .header{
    height: 0.4rem;
    color: #000;
    display: -webkit-flex;
    justify-content: space-between;
    padding: 0 0.16rem;
    border-bottom: 1px solid #eaeaea;
    align-items: center;
  }
  .header a{
    color: #000;
    font-size: 0.16rem;
  }
  .my_receive{
    font-size: 0.16rem;
    font-weight: 100;
  }
  .all_list{
    display: -webkit-flex;
    position: relative;
    justify-content: space-between;
    padding: 0 0.12rem;
    border-bottom: 1px solid #dedede;
  }
  .all_list_a{
    color: #000;
    font-size: 0.14rem;
    padding: 0 0.16rem;
    line-height: 0.44rem;
  }
  .linethrou{
    width: 0.42rem;
    height: 0.02rem;
    background-color: #db0005;
    position: absolute;
    bottom: 0;
    left: 1.66rem;
  }
 .focus{
    color: #db0005;
  }
  .doc_a i{
    color: #db0005;
  }
  .section{
    margin-top: 0.83rem;
  }

</style>
