<template>
  <div>
    <div class="shop_group">
      <ul>
        <li v-for="(v,sid) in list" :key="v.id">
          <div class="depot">
            <input type="checkbox" class="shopcheck" v-model="v.checked" @change="shopSelAll(sid)">
            <h2 class="wareroom">
              <i class="iconfont icon-cangku"></i>
              <span>{{v.shopName}}</span>
            </h2>
          </div>
          <ul class="shop_ul" >
            <li class="shop_ul_li" v-for="(d,pid) in v.products" :key="d.id">
              <div class="mobile">
                <p class="mobile_txt">
                  <span class="rebate" v-if="d.activity">{{d.activity}}</span>
                  <span class="enjoy">{{d.tittext}}</span>
                </p>
                  <a class="club" href="javascript:;" v-if="d.golink">
                    {{d.golink}}
                    <i class="iconfont icon-next"></i>
                  </a>
              </div>

              <div class="goods">
                <div class="inp">
                  <input type="checkbox" class="goodscheck" v-model="d.checked" @change="shopSingle(sid,pid)">
                </div>
                <div class="pic">
                  <a class="pic_a" href="javascript:;">
                    <img :src=d.pic />
                  </a>
                </div>
                <div class="alltxt">
                  <h4 class="all_tit">{{d.title}}</h4>
                  <div class="shop_msg">
                    税费预计:￥<i class="pike">{{d.pike}}</i>
                  </div>
                  <div class="shop_price">
                    <div class="shop_pices">￥<b>{{d.price}}</b></div>
                    <div class="amount">
                      <a href="javascript:;" class="minus" @click="subQal(sid,pid)">-</a>
                      <span class="num">{{d.qal}}</span>
                      <a href="javascript:;" class="plus" @click="addQal(sid,pid)">+</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "carsShop",
    props:["list","addQal","subQal"],
    methods:{
      shopSelAll(sid){
        this.$emit("shopSAll",sid)
      },
      shopSingle(sid,pid){
        this.$emit("SSingle",sid,pid)
      }
    }
  }
</script>

<style scoped>
  .rebate{
    color: #f5edff;
    font-size: 0.12rem;
    background: -webkit-linear-gradient(left, #ff1100 , #ff2a6c);
    padding: 0.02rem 0.05rem;
    border-radius: 0.15rem;
    display: -webkit-flex;
    margin: 0.08rem 0.08rem 0.08rem 0;
  }
  .enjoy{
    color: #848484;
    font-size: 0.12rem;
    line-height: 0.36rem;
  }
  .club{
    font-size: 0.12rem;
    color: #ff0223;
  }
  .mobile{
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .mobile_txt{
    display: -webkit-flex;
  }
  .icon-next{
    vertical-align: middle;
  }
  .shop_ul{
    border-bottom: 0.1rem solid #f7f3f7;
  }
  .shop_ul_li{
    background: #fff;
    padding: 0 0.12rem;
  }
  .goods{
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #f4f4f4;
  }
  .pic_a img{
    width: 0.8rem;
    height: 0.8rem;
  }
  .inp{
    display: -webkit-flex;
  }
  .alltxt{
    padding: 0 0 0 0.12rem;
    font-size: 0.12rem;
  }
  .all_tit{
    color: #000;
    font-weight: 100;
    line-height: 0.2rem;
  }
  .shop_msg{
    color: #9e9e9e;
    line-height: 0.18rem;
  }
  .shop_price{
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .shop_pices{
    color: #ff0b00;
  }
  .amount{
    border:1px solid #cecece;
    border-radius: 0.04rem;
  }
  .amount a{
    color: #848484;
    padding: 0.04rem;
    font-size: 0.14rem;
  }
  .num{
    color: #000;
    border-left: 1px solid #cecece;
    border-right: 1px solid #cecece;
    padding:0 0.14rem;
  }
  .listgoods_pic_a img{
    width: 1.74rem;
    height: 1.74rem;
    border-radius: 0.06rem;
  }
  .headpic img{
    width: 0.17rem;
    height: 0.17rem;
    border-radius: 50%;
  }
  .depot{
    line-height: 0.36rem;
    background: #fafafa;
    display: -webkit-flex;
    align-items: center;
    padding: 0 0.12rem;
  }
  input[type='checkbox']{
    width: 0.18rem;
    height: 0.18rem;
    -webkit-appearance: none;
    border: 1px solid #999;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    margin-right: 0.12rem;
  }
  input[type=checkbox]:checked{
    background: url("../../assets/imgs/d-05.png") no-repeat center;
    border:0px;
  }
  .wareroom{
    color: #323232;
    font-size: 0.14rem;
    font-weight: 100;
  }
  .icon-cangku{
    padding: 0 0.06rem 0 0;
  }
</style>
