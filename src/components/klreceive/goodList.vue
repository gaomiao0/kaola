<template>
  <div class="success">
    <div class="one">
      <p class="business">
        <span>2018-09-07</span>
        <a class="dele" href="javascript:;">
          <span>交易成功</span>
          <span>|</span>
          <i class="iconfont icon-lajitongshanchu"></i>
        </a>
      </p>
      <p class="prot">
        <a class="prot_img" href="javascript:;">
          <img :src=one.pics />
          <span class="prot_tit">{{one.buytit}}</span>
        </a>
        <span class="price">
        <i>{{one.buyprice}}</i>
        <u>x1</u>
      </span>
      </p>
      <div class="ensure">
        <a class="quality" href="javascript">
          <i class="iconfont icon-zhengpinbaozheng"></i>
          <u>正品保障</u>
          <i class="iconfont icon-youjiantou1"></i>
        </a>
        <p class="total">
          <span class="allnum">共<i>1</i>件</span>
          <span>应付总额:<i class="quality">{{one.total}}</i></span>
        </p>
      </div>
      <p class="services">
        <span class="again">再次购买</span>
        <span class="again">查看物流</span>
        <i class="again numerous">评价有礼</i>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name:"goodList",
    props:["one"]
  }

</script>


<style scoped>
  .success{
    padding:0 0.12rem;
    border-bottom: 0.1rem solid #efefef;
  }
  .business{
    line-height: 0.4rem;
    font-size: 0.12rem;
    display: -webkit-flex;
    justify-content: space-between;
    border-bottom: 1px solid #eff0ef;
  }
  .dele{
    color:#252525;
  }
  .prot{
    padding: 0.1rem 0 0.16rem;
    display: -webkit-flex;
    justify-content: space-between;
    border-bottom: 1px solid #eff0ef;
  }
  .prot_img{
    display: -webkit-flex;
  }
  .prot_img img{
    width: 0.64rem;
    height: 0.64rem;
  }
  .prot_tit{
    font-size: 0.12rem;
    color: #000;
    display: -webkit-flex;
    width: 2rem;
    line-height: 0.24rem;
    padding-left: 0.1rem;
  }
  .price{
    font-size: 0.12rem;
    color: #303030;
    display: -webkit-flex;
    flex-direction: column;
    text-align: right;
  }
  .ensure{
    line-height: 0.4rem;
    font-size: 0.12rem;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .quality{
    color: #ff0000;
  }
  .allnum{
    margin-right: 0.12rem;
  }
  .services{
    font-size: 0.12rem;
    color: #5a5a5a;
    display: -webkit-flex;
    justify-content: flex-end;
    padding: 0.1rem 0;
  }
  .again{
    border:1px solid #c2c0c2;
    padding: 0.04rem 0.14rem;
    -webkit-border-radius: 0.12rem;
    -moz-border-radius: 0.12rem;
    border-radius: 0.12rem;
    margin-left: 0.1rem;
  }
  .numerous{
    background-color: #e71431;
    border:1px solid #e10003;
    color: #fff;
  }

</style>
