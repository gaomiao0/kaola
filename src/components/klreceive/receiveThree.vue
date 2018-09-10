<template>
  <div>
    <div class="assess">
      <a class="ass_pic" href="javascript:;">
        <img src="../../assets/imgs/d-24.jpg" />
      </a>
      <p class="choice">
        <span class="appraise" v-for="(n,index) in navLists" :class="{ before:changeColor == index}" @click="wait(index)" :key="n.id">{{n.text}}</span>
        <span class="bomline"></span>
      </p>
      <p class="page" v-show="changeColor===0">
        <img src="../../assets/imgs/d-23.jpg" />
        <span class="page_no">暂无待评价商品</span>
        <a class="look" href="javascript:;">
          <span>看看我的评价</span>
          <i class="iconfont icon-youjiantou1"></i>
        </a>
      </p>
      <p class="page" v-show="changeColor===1">
        <img src="../../assets/imgs/d-23.jpg" />
        <span class="page_no">暂无已评价商品</span>
        <a class="look" href="javascript:;">
          <span>去评价</span>
          <i class="iconfont icon-youjiantou1"></i>
        </a>
      </p>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery'
  export default {
    name:"receiveThree",
    data(){
      return {
        changeColor:0,
        navLists:[
          {
            "text":"待评价"
          },
          {
            "text":"已评价"
          }
        ]
      }
    },
    methods:{
      wait:function(index){
        this.changeColor = index;
        let $lines = index*190+72;
        $('.bomline').animate({"left":$lines+"px"},200);
      }
    }
  }

</script>

<style scoped>
  .ass_pic img{
    width: 3.75rem;
    height: 1.34rem;
  }
  .choice{
    line-height: 0.44rem;
    border-top:1px solid #f6f6f6 ;
    border-bottom:1px solid #f6f6f6 ;
    padding: 0 0.72rem;
    display: -webkit-flex;
    justify-content: space-between;
    position: relative;
  }
  .appraise{
    font-size: 0.14rem;
    color: #a9a9a9;
  }
  .bomline{
    position: absolute;
    bottom: 0;
    left: 0.72rem;
    width: 0.42rem;
    height: 0.02rem;
    background: #0e0e0e;
  }
  .before{
    color: #0e0e0e;
  }
  .page{
    padding: 1.08rem 0 0;
  }
  .page img{
    width: 0.9rem;
    height: 0.9rem;
    margin: 0 auto;
  }
  .page_no{
    color: #acacac;
    font-size: 0.12rem;
    display: -webkit-flex;
    justify-content: center;
    padding: 0.12rem 0 0.14rem;
  }
  .look{
    font-size: 0.12rem;
    color: #2c2c2c;
    border: 1px solid #acacac;
    border-radius: 0.12rem;
    padding: 0.04rem 0.06rem;
    width: 0.94rem;
    display: -webkit-flex;
    margin:0 auto;
    justify-content: center;
  }


</style>
