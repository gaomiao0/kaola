<template>
  <div>
    <notice></notice>
    <div class="one">
      <p class="circle">
        <img src="../../assets/imgs/d-22.jpg" />
      </p>
      <p class="txt">啊哦，您还没有相关的订单~</p>
    </div>
    <buy-list :first = Infor></buy-list>
  </div>

</template>

<script>
  import BuyList from "./buyList";
  import {shopCartsServices} from "../../api/shopCartsServices";
  import Notice from "./notice";
  export default {
    name:"receiveTwo",
    components: {Notice, BuyList},
    data(){
      return {
        /**
         * 购物车数据
         */
        Infor:[],
        totalMany:0
      }
    },
    methods:{
      foucs(){
        shopCartsServices.getCartsInfoByUesrId((data)=>{
          this.Infor = data.buy[0].buymore;
          // console.log(data.buy)
        })
      }
    },
    created(){
      this.foucs();
    }
  }

</script>

<style scoped>
  .circle img{
    width: 0.9rem;
    height: 0.9rem;
    margin:0 auto;
  }
  .one{
    padding: 1.24rem 0;
    border-bottom: 0.1rem solid #efefef;
  }
  .txt{
    font-size: 0.14rem;
    color: #444;
    text-align: center;
    padding-top: 0.18rem;
  }


</style>
