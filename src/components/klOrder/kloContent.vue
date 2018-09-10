<template>
    <div class="cen">
      <div class="address">
        <span>新建收货地址</span>
        <i class="iconfont icon-youjiantou1"></i>
      </div>
      <div class="splitline">

      </div>
      <ul class="prolist">
        <kl-order-products :shopslist="a" v-for="(a,index) in alldata.shoplist" :key="index"></kl-order-products>
      </ul>
      <div class="youhui">
        <h3>
        <span>
          优惠券
        </span>
          <span>
          暂无可用
          <i class="iconfont icon-youjiantou1"></i>
        </span>
        </h3>
        <h3>
        <span>
          红包
        </span>
          <span>
          暂无可用
          <i class="iconfont icon-youjiantou1"></i>
        </span>
        </h3>
        <h3>
        <span>
          发票
        </span>
          <span>
          暂不需要
          <i class="iconfont icon-youjiantou1"></i>
        </span>
        </h3>
      </div>
      <div class="splitline">

      </div>
      <div class="feiyong">
        <div class="taxbox">
          <h3 class="viph3">
            <p>
            <span>商品金额</span>
            <span>￥<b>{{alldata.totalprice}}</b></span>
            </p>
            <p class="vip">
              <span><i class="iconfont icon-v"></i>
              开通黑卡会员，全年省
                <b>{{alldata.vipPrice}}</b>元
              </span>
              <a href="">
                立即省钱
                <i class="iconfont icon-youjiantou1"></i>
              </a>
            </p>
          </h3>
          <h3>
            <span>运费</span>
            <span>+￥<b>{{alldata.yunfei}}</b></span>
          </h3>
          <h3>
            <span>税费</span>
            <span>+￥<b>{{alldata.taxfei}}</b></span>
          </h3>
        </div>
        <p>
          提交订单细则表示您同意
          <a href="">《用户购买协议》</a>
        </p>
      </div>
    </div>
</template>

<script>
    import KlOrderProducts from "./klOrderProducts";
    export default {
        name: "kloContent",
      components: {KlOrderProducts},
      props:["alldata"]
    }
</script>

<style scoped lang="less">
  .cen{
    width:100%;
    margin-top:0.54rem;
    .address{
      display: flex;
      padding:0 30/200rem;
      box-sizing: border-box;
      font-size:28/200rem ;
      color:#313031;
      height:133/200rem;
      background:url(../../assets/imgs/gaddress.png) no-repeat;
      background-size:100% 133/200rem;
      justify-content: space-between;
      align-items: center;
      font-weight:600;
    }
    .splitline{
      height:22/200rem;
      background: #f7f3f7;
    }
    .prolist{
      background: #f7f3f7;
      border:1px solid transparent;

    }
      h3{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30/200rem 0 0;
      box-sizing: border-box;
      background: #fff;
    }
    .youhui{
      margin-left: 30/200rem;
      background:#f7f3f7 ;
      margin-bottom: 20/200rem;
      h3{
        font-size: 28/200rem;
        color:#313031;
        height:92/200rem;
        border-bottom: 1px solid #f7f3f7;
        span:last-child{
          font-size:24/200rem ;
          font-weight: 100;
        }
      }
      h3:last-child{
        border-bottom: 0px;
      }
    }
    .feiyong{
      padding:14/200rem 0 0;
      .taxbox{
        border-bottom: 1px solid #f7f3f7;
        margin-left: 30/200rem;
        .viph3{
          display: block;
          height:100%;
          font-size:24/200rem ;
          color:#313031;
          p{
            display: flex;
            height:62/200rem;
            align-items: center;
            justify-content: space-between;
            margin-left: -30/200rem;
            color:#313031;
            border-bottom: 0px;
          }
          .vip{
            font-size: 20/200rem;
            color:#313031;
            background:#f7ebde;
            margin-left:0/200rem;
            position: relative;
            :after{
              content:"";
              display: block;
              width:0;
              height:0;
              border:5px solid transparent;
              border-bottom-color:#f7ebde ;
              position:absolute;
              right:10px;
              top:-10px;
              z-index:50;
            }
            a{
              font-size:20/200rem;
              color:#e71c39;
            }

          }
        }
      }
      h3{
        font-size:24/200rem ;
        color:#313031;
        height:56/200rem;
      }
      p{
        font-size:22/200rem;
        color:#9c9a9c;
        display: flex;
        align-items: center;
        height:70/200rem;
        border-bottom: 1px solid #f7f3f7;
        padding-left: 30/200rem;
        a{
          font-size:22/200rem ;
          color:#393c39;
        }
      }

    }

  }
</style>
