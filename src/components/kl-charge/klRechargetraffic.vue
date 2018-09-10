<template>

  <div class="chargetraffic">
    <div class="chargetrafficTitle">
      <img :src="rectra.rectratit" alt="">
      <p>{{rectra.rectrap}}</p>
    </div>
    <div class="chargetrafficContent">
      <div class="chargetrafficContentInp">
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="chargetrafficContentMoney">
        <p>{{rectra.rectm1}}</p>
        <p>{{rectra.rectm2}}</p>
        <p>{{rectra.rectm3}}</p>
        <p>{{rectra.rectm4}}</p>
        <p>{{rectra.rectm5}}</p>
        <p>{{rectra.rectm6}}</p>
      </div>
      <div class="chargetrafficContentFooter">
        <input type="button" value="立即充值">
      </div>
    </div>
  </div>

</template>


<script type="text/ecmascript-6">
  export default {
          data(){
          return{
            rectra:[],
          }
      },
      created() {
        this.getData()
      },
      methods: {
        getData() {
          this.$http.get('/api/address').then(response=>{
            this.rectra = response.data.data.rectra
          })
        },
      },
  }
</script>

<style scoped>
  /*chargetraffic*/
  .chargetraffic{
    width: 100%;
    margin-bottom: 0.15rem;
  }
  .chargetrafficTitle{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.21rem;
    font-weight: 700;
    line-height: 0.59rem;
    margin-bottom: 5px;
    background: #ffffff;
  }
  .chargetrafficTitle img{
    width: 0.25rem;
    height: 0.25rem;
  }
  .chargetrafficContent{
    width: 100%;
    background: #ffffff;
    box-sizing: border-box;
  }
  .chargetrafficContentInp{
    overflow: hidden;
    height: 1.05rem;
    padding-left: 0.14rem;
    box-sizing: border-box;
  }
  .chargetrafficContentInp input{
    display: block;
    width: 100%;
    height: 1.05rem;
    border: none;
    font-size: 0.28rem;
  }
  .chargetrafficContentMoney{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 0.14rem;
  }
  .chargetrafficContentMoney p{
    width: 0.99rem;
    height: 0.7rem;
    border: 1px solid #999999;
    margin-right: 0.18rem;
    margin-bottom: 0.18rem;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.7rem;
    font-weight: bolder;
    border-radius: 10px;
  }
  .chargetrafficContentFooter{
    padding-bottom: 0.22rem;
  }
  .chargetrafficContentFooter input{
    display: block;
    width: 2.25rem;
    height: 0.54rem;
    margin: 0.27rem auto 0;
    font-size: 0.22rem;
    color: #ffffff;
    font-weight: bolder;
    border-radius: 0.27rem;

  }
</style>
