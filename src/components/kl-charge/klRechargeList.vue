<template>
  <div class="rechargeList">
    <a href="" v-for="rcla in rcl">
      <img :src="rcla.rgli" alt="">
      <span>{{rcla.rgls}}</span>
    </a>
    <!-- <a href=""><img src="../../assets/imgs/m-c-1.png" alt=""><span>游戏</span></a>
    <a href=""><img src="../../assets/imgs/m-c-1.png" alt=""><span>视频充值</span></a>
    <a href=""><img src="../../assets/imgs/m-c-1.png" alt=""><span>油卡充值</span></a>
    <a href=""><img src="../../assets/imgs/m-c-1.png" alt=""><span>网易白金卡</span></a> -->
  </div>


</template>


<script type="text/ecmascript-6">
  export default {
        data(){
          return{
            rcl:[],
          }
      },
      created() {
        this.getData()
      },
      methods: {
        getData() {
          this.$http.get('/api/address').then(response=>{
            this.rcl = response.data.data.rgl
          })
        },
      },
  }
</script>

<style scoped>
  .rechargeList{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    background: #ffffff;
    padding: 0.24rem 0 0.14rem;
    margin-bottom: 0.16rem;
  }
  .rechargeList a{
    width: 25%;
    flex-shrink: 0;
    color: #000000;
    font-size:0.16rem;
    margin-bottom: 0.21rem;
  }
  .rechargeList a img{
    width: 0.55rem;
    height: 0.55rem;
    margin: 0 auto;
  }
  .rechargeList span{
    display: block;
    text-align: center;
  }
</style>
