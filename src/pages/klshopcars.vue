<template>
  <div>
    <div class="header">
      <div class="header_one">
        <h1 class="car">
          购物车
          <i class="iconfont icon-dingwei1"></i>
        </h1>
        <span class="editor">
			编辑
			<i class="iconfont icon-xinxi1"></i>
			<u class="point"></u>
		</span>
      </div>
    </div>
    <div class="prompt">
      <p class="prompt_txt">
        <i class="iconfont icon-v"></i>
        <span class="vip">会员全年预计可省<u>3851元</u></span>
      </p>
      <a class="save" href="javascript:;">
        立即省钱
        <i class="iconfont icon-next"></i>
      </a>
    </div>
    <cars-shop @shopSAll="selectShopAll" @SSingle="selectSingleCheck" :addQal="addQal" :subQal="subQal" :list = carInfo.shops></cars-shop>
    <product-list :another = carInfo.goods></product-list>
    <div class="footer">
      <div class="mail">
        <span>自营商品已包邮</span>
        <a class="stroll" href="javascript:;">
          再逛逛
          <i class="iconfont icon-next"></i>
        </a>
      </div>
      <div class="payment" @change="selectAll()">
        <div class="allcheck">
          <input type="checkbox" v-model="carInfo.checked"> &nbsp;&nbsp;全选
        </div>
        <div class="shop_total">
          <div class="endtotal">
            <strong>总计(不含税):<u>￥<i class="total">{{totalMoney}}</i></u></strong>
            <span class="tax">商品税费:29.01</span>
          </div>
          <router-link to="/klOrder" class="all_total bg_total">
            结算
            <!-- <span>(<i>0</i>)</span> -->
          </router-link>
        </div>
      </div>
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
    import CarsShop from "../components/klshopcars/carsShop";
    import ProductList from "../components/klshopcars/productList";
    import CommonFooter from "../components/commonComponents/CommonFooter";
    import {shopCartsServices} from "../api/shopCartsServices";
    import $ from 'jquery'

    export default {
      name: "klshopcars",
      components: {ProductList, CarsShop,CommonFooter},
      data(){
        return {
          /**
           * 购物车数据
           */
          carInfo:[],
          totalMoney:0
        }
      },
      methods:{
        __counter(shopData){
          this.totalMoney =0;
          shopData.forEach((item,index)=>{
            item.products.forEach((product,idx)=>{
              if(product.checked){
                this.totalMoney += product.qal * product.price;
              }
            })
          })
        },
        /**
         * 整个购物车全选/反选
         */
        selectAll(){
          let isChecked = this.carInfo.checked;
          this.carInfo.shops.forEach((item,index)=>{
            item.checked = isChecked
            item.products.forEach((product,idx)=>{
              product.checked=isChecked
            })
          })
          this.__counter(this.carInfo.shops)
          if(isChecked){
            $('.all_total').addClass('bg_total');
            $('.mail').fadeIn(10);
          }else {
            $('.all_total').removeClass('bg_total');
            $('.mail').fadeOut(10);
          }
        },
        /**
         * 店铺全选
         * @param sid 商铺id
         */
        selectShopAll(sid){
          let isChecked = this.carInfo.shops[sid].checked;
          if(!isChecked){
            this.carInfo.checked=false
          }else{
            this.carInfo.checked=true
          }
          this.carInfo.shops[sid].products.forEach((item,index)=>{
            item.checked = isChecked
          })
          this.__counter(this.carInfo.shops)
          if(isChecked){
            $('.all_total').addClass('bg_total');
            $('.mail').fadeIn(10);
          }else {
            $('.all_total').removeClass('bg_total');
            $('.mail').fadeOut(10);
          }
        },

        /**
         * 针对商品的选择
         * @param sid
         * @param pid
         */
        selectSingleCheck(sid,pid){
          let checked= this.carInfo.shops[sid].products[pid].checked
          this.carInfo.shops[sid].checked = checked
          this.carInfo.checked = checked
          this.__counter(this.carInfo.shops)
          if(checked){
            $('.all_total').addClass('bg_total');
            $('.mail').fadeIn(10);
          }else {
            $('.all_total').removeClass('bg_total');
            $('.mail').fadeOut(10);
          }
        },
        addQal(sid,pid){
          this.carInfo.shops[sid].products[pid].qal++
          this.__counter(this.carInfo.shops)
        },
        subQal(sid,pid){
          if(this.carInfo.shops[sid].products[pid].qal <=1){
            this.carInfo.shops[sid].products[pid].qal=1
          }else{
            this.carInfo.shops[sid].products[pid].qal--
            this.__counter(this.carInfo.shops)
          }

        }

      },
      created(){
        shopCartsServices.getCartsInfoByUesrId((data)=>{
          this.__counter(data.shops);
          this.carInfo = data;
          // console.log(data.shops)
        })
      },
      mounted(){

      },
      updated(){

      }
    }
</script>

<style scoped>
  .header{
    position: fixed;
    top:0;
    left: 0;
    z-index: 100;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 3.75rem;
  }
  .header_one{
    width:3.75rem;
    line-height: 0.4rem;
    background: #fff;
    color: #090909;
    display: -webkit-flex;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid #b9b4b1;
  }
  .header i{
    font-size: 0.18rem;
  }
  .car{
    font-weight: 100;
    font-size: 0.18rem;
  }
  .editor{
    color: #767676;
    font-size: 0.14rem;
    position: absolute;
    right:0.12rem;
  }
  .icon-xinxi1{
    padding-left: 0.12rem;
  }
  .point{
    width: 0.1rem;
    height: 0.1rem;
    background: #fe0000;
    border-radius: 50%;
    position: absolute;
    right:-0.06rem;
    top:0.06rem;
  }
  .prompt{
    line-height: 0.32rem;
    font-size: 0.12rem;
    background: #faf2dd;
    display: -webkit-flex;
    justify-content: space-between;
    padding: 0 0.12rem;
    margin-top: 0.41rem;
  }
  .prompt i{
    vertical-align: middle;
  }
  .icon-v{
    color: #453923;
  }
  .save{
    color: #332a2b;
  }
  .vip{
    color: #645b5c;
  }
  .vip u{
    color: #f6002f;
  }
  .mail{
    line-height: 0.36rem;
    font-size: 0.12rem;
    color: #75706c;
    border-top:1px solid #ebe7db;
    padding: 0 0.12rem;
    background: rgba(251,241,181,.6);
    display:block;
    position: relative;
  }
  .stroll{
    color: #3c382f;
    position: absolute;
    right:0.12rem;
  }
  .payment{
    padding: 0 0 0 0.12rem;
    font-size: 0.12rem;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin-bottom: 0.51rem;
  }
  .allcheck{
    color: #282828;
    display: -webkit-flex;
    align-items: center;
  }
  .shop_total{
    display: -webkit-flex;
  }
  .endtotal{
    color: #303030;
    display: -webkit-flex;
    flex-direction:column;
    line-height: 0.2rem;
  }
  .shop_total u{
    color: #fb003e;
  }
  .tax{
    color: #b0b0b0;
    text-align: right;
  }
  .all_total{
    line-height: 0.44rem;
    color: #fff;
    display: -webkit-flex;
    justify-content: center;
    width: 0.77rem;
    background: #999;
    margin-left: 0.08rem;
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
    background: url("../assets/imgs/d-05.png") no-repeat center;
    border:0px;
  }
  .bg_total{
    background: -webkit-linear-gradient(left, #fc0203 , #ff3162);
  }
</style>
