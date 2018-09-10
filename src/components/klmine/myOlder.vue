<template>
  <div id="bigbox">
    <div class="my_older">
      <h2>
        <span class="my_tit">我的订单</span>
        <a class="look_more" href="javascript:;">
          查看更多
          <i class="iconfont icon-next"></i>
        </a>
      </h2>
    </div>
    <div class="older_list">
      <router-link to="/klreceive" class="ol_pay">
        <i class="iconfont icon-fukuan"></i>
        <span>待付款</span>
      </router-link>
      <router-link to="/klreceive" class="ol_pay">
        <i class="iconfont icon-fahuo"></i>
        <span>待发货</span>
      </router-link>
      <router-link to="/klreceive" class="ol_pay">
        <i class="iconfont icon-shouhuo"></i>
        <span>待收货</span>
      </router-link>
      <router-link to="/klreceive" class="ol_pay">
        <i class="iconfont icon-pingjia"></i>
        <span>评价有礼</span>
      </router-link>
      <a class="ol_pay" href="javascript:;">
        <i class="iconfont icon-ziyuan"></i>
        <span>退货退款</span>
      </a>
    </div>
    <div class="starpic">
      <a class="starpic_a" href="javascript:;">
        <img src="../../assets/imgs/d-16.jpg" />
      </a>
    </div>
    <h2 class="my_services">我的服务</h2>
    <div class="services_list">
      <a class="services_list_a" href="javascript:;">
        <i class="iconfont icon-yaoqing"></i>
        <span>邀请好友</span>
        <u>得8元红包</u>
      </a>
      <a class="services_list_a" href="javascript:;">
        <i class="iconfont icon-douzi"></i>
        <span>签到领礼包</span>
        <u>1豆</u>
      </a>
      <a class="services_list_a" href="javascript:;">
        <i class="iconfont icon-youhuiquan1"></i>
        <span>优惠券</span>
        <u>1张</u>
      </a>
      <a class="services_list_a" href="javascript:;">
        <i class="iconfont icon-hongbao"></i>
        <span>红包</span>
        <u>总额0元</u>
      </a>
      <a class="services_list_a" href="javascript:;">
        <i class="iconfont icon-shouye-"></i>
        <span>拼团商城</span>
        <u>9.9元包邮</u>
      </a>
      <a class="services_list_a" href="javascript:;">
      <i class="iconfont icon-tui"></i>
      <span>网易推手</span>
      <u>月入过万</u>
    </a>
      <a class="services_list_a" href="javascript:;">
        <i class="iconfont icon-service"></i>
        <span class="help">帮助与客服</span>
      </a>
      <router-link to="/klrecharge" class="services_list_a" href="javascript:;">
      <i class="iconfont icon-chongzhi"></i>
      <span>充值中心</span>
    </router-link>
      <a class="services_list_a" href="javascript:;">
        <i class="iconfont icon-youhuiquan"></i>
        <span>领券中心</span>
        <u>50元无门槛</u>
      </a>
      <a class="services_list_a" href="javascript:;">
        <i class="iconfont icon-paihangbang"></i>
        <span>排行榜</span>
      </a>
      <a class="services_list_a" href="javascript:;">
      <i class="iconfont icon-icon_lipinka"></i>
      <span>礼品卡</span>
    </a>
      <a class="services_list_a" href="javascript:;"></a>
    </div>
    <div class="my_older">
      <h2>
        <span class="my_tit">品牌动态</span>
        <a class="look_more" href="javascript:;">
          查看更多
          <i class="iconfont icon-next"></i>
        </a>
      </h2>
    </div>
    <ul>
      <li class="judge_li" v-for="v in deliver.list" :key="v.id">
        <a class="comment" href="javascript:;">
          <img :src=v.pic >
          <span class="save">促销</span>
        </a>
        <a class="goods" href="javascript:;" v-for="k in v.imglist" :key="k.id">
          <img :src=k.img />
        </a>
      </li>
    </ul>
    <recommend-for-you :one="deliver"></recommend-for-you>
  </div>
</template>


<script>
  import RecommendForYou from "./recommendForYou";
  export default {
    name: "myOlder",
    props:["deliver"],
    components: {RecommendForYou},
  }
</script>


<style scoped>
  #bigbox{
    background-color: #fff;
    position: absolute;
    top:2.1rem;
    left: 0;
    width: 3.75rem;
  }
  .my_older{
    line-height: 0.47rem;
    padding:0 0.12rem;
  }
  .my_older h2{
    display: -webkit-flex;
    justify-content: space-between;
  }
  .my_tit{
    font-size: 0.16rem;
    color: #010101;
  }
  .look_more{
    font-size: 0.12rem;
    color: #9e9e9e;
  }
  .older_list{
    display: -webkit-flex;
    justify-content: space-between;
    padding: 0.1rem 0.12rem;
  }
  .ol_pay{
    color: #1c1c1c;
    font-size: 0.12rem;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.1rem;
  }
  .ol_pay i{
    font-size: 0.24rem;
    color: #fa1617;
    padding-bottom: 0.1rem;
  }
  .starpic_a img{
    width: 3.75rem;
    height: 0.86rem;
    border-bottom: 0.1rem solid #f5f5f5;
  }
  .my_services{
    font-size: 0.16rem;
    color: #010101;
    /*font-weight: 100;*/
    line-height: 0.47rem;
    padding: 0 0.12rem;
  }
  .services_list{
    display: -webkit-flex;
    padding:0.12rem;
    flex-wrap: wrap;
    border-bottom: 0.1rem solid #f5f5f5;
  }
  .services_list_a{
    display: -webkit-flex;
    flex-direction: column;
    font-size: 0.12rem;
    align-items: center;
    width: 25%;
    margin-bottom: 0.25rem;
  }
  .services_list_a i{
    color: #707070;
    font-size: 0.2rem;
    padding-bottom: 0.08rem;
  }
  .services_list_a span{
    color:#393939;
    line-height: 0.16rem;
  }
  .services_list_a u{
    color:#9a9a9a;
  }
  .services_list_a .help{
    color: #fa2336;
  }
  .my_older{
    line-height: 0.47rem;
    padding:0 0.12rem;
  }
  .my_older h2{
    /*font-weight: 100;*/
    display: -webkit-flex;
    justify-content: space-between;
  }
  .my_tit{
    font-size: 0.16rem;
    color: #010101;
  }
  .look_more{
    font-size: 0.12rem;
    color: #9e9e9e;
  }
  .comment img{
    width: 0.4rem;
    height: 0.4rem;
    padding-bottom: 0.05rem;
  }
  .judge_li{
    padding: 0 0.15rem;
    margin-bottom: 0.28rem;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .comment{
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  .save{
    border:1px solid #eb0029;
    color: #eb0029;
    padding:0 0.04rem 0.02rem;
    border-radius: 0.08rem;
    font-size: 0.12rem;
    width: 0.24rem;
  }
  .goods img{
    width: 0.66rem;
    height: 0.66rem;
  }

</style>
