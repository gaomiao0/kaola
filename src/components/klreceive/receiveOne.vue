<template>
  <div>
    <notice></notice>
    <good-list :one = buyInfor></good-list>
    <buy-list :first = Infor></buy-list>
  </div>

</template>

<script>
  import GoodList from "./goodList";
  import BuyList from "./buyList";
  import {shopCartsServices} from "../../api/shopCartsServices";
  import Notice from "./notice";
  export default {
    name:"receiveOne",
    components: {Notice, BuyList, GoodList},
    data(){
      return {
        /**
         * 购物车数据
         */
        buyInfor:[],
        Infor:[],
        totalMany:0
      }
    },
    methods:{
      foucs(){
        shopCartsServices.getCartsInfoByUesrId((data)=>{
          this.buyInfor = data.buy[0];
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
