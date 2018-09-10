<template>

    <div class="chargePhone">
        <div class="chargePhoneTitle">
          <img :src="rcphone.rcptiti" alt="">
          <p>{{rcphone.rcptitp}}</p>
        </div>
      <div class="chargePhoneContent">
        <div class="chargePhoneContentInp">
          <input type="text" placeholder="请输入手机号码">
        </div>
        <div class="chargePhoneContentMoney">
            <p>{{rcphone.rcpcm1}}</p>
            <p>{{rcphone.rcpcm2}}</p>
            <p>{{rcphone.rcpcm3}}</p>
          <p>{{rcphone.rcpcm4}}</p>
          <p>{{rcphone.rcpcm5}}</p>
          <p>{{rcphone.rcpcm6}}</p>
        </div>
        <div class="chargePhoneContentFooter">
          <input type="button" value="立即充值">
        </div>
      </div>
    </div>

</template>


<script type="text/ecmascript-6">
  export default {
       data(){
          return{
            rcphone:[],
          }
      },
      created() {
        this.getData()
      },
      methods: {
        getData() {
          this.$http.get('/api/address').then(response=>{
            this.rcphone = response.data.data.rcphone
          })
        },
      },
  }
</script>

<style scoped>
  /*chargePhone*/
  .chargePhone{
    width: 100%;
    margin-bottom: 0.15rem;
  }
  .chargePhoneTitle{
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
  .chargePhoneTitle img{
    width: 0.25rem;
    height: 0.25rem;
  }
  .chargePhoneContent{
    width: 100%;
    background: #ffffff;
    box-sizing: border-box;
  }
  .chargePhoneContentInp{
    overflow: hidden;
    height: 1.05rem;
    padding-left: 0.14rem;
    box-sizing: border-box;
  }
  .chargePhoneContentInp input{
    display: block;
    width: 100%;
    height: 1.05rem;
    border: none;
    font-size: 0.28rem;
  }
  .chargePhoneContentMoney{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 0.14rem;
  }
  .chargePhoneContentMoney p{
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
  .chargePhoneContentFooter{
    padding-bottom: 0.22rem;
  }
  .chargePhoneContentFooter input{
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
