<template>

  <div class="chargeFooter">
    <div class="chargeFooterTitle">
      <img :src="recfoo.recfoottiti" alt="">
      <p>{{recfoo.recfoottitp}}</p>
    </div>
    <div class="chargeFooterList">
        <div class="chargeFooterVideo" v-for="cfv in recfoo.recfootv">
          <div class="chargeFooterVideoName">
            <img :src="cfv.recfootvi" alt="">
            <p>{{cfv.recfootvp1}}</p>
          </div>
          <div class="chargeFooterVideoCharge">
              <p>{{cfv.recfootvp2}}</p>
          </div>
        </div>
       
    </div>
  </div>

</template>


<script type="text/ecmascript-6">
  export default {
      data(){
          return{
            recfoo:[],
          }
      },
      created() {
        this.getData()
      },
      methods: {
        getData() {
          this.$http.get('/api/address').then(response=>{
            this.recfoo = response.data.data.recfoot
          })
        },
      },
  }
</script>

<style scoped>
  /*chargeFooter*/
  .chargeFooter{
    width: 100%;
    margin-bottom: 0.15rem;
  }
  .chargeFooterTitle{
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
  .chargeFooterTitle img{
    width: 0.25rem;
    height: 0.25rem;
  }

  /*chargeFooterList*/
  .chargeFooterList{
    width: 100%;
    background: #ffffff;
    box-sizing: border-box;
  }
  .chargeFooterVideo{
    width: 100%;
    padding: 0 0.2rem;
    border-top: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    height: 0.81rem;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  .chargeFooterVideo:last-child{
    border-bottom: 1px solid #eeeeee;
  }
  .chargeFooterVideoName{
    font-size: 0.18rem;
    display: flex;
    align-items: center;
  }
  .chargeFooterVideoName img{
    width: 0.4rem;
    height: 0.37rem;
    margin-right: 0.1rem;
  }
  .chargeFooterVideoCharge p{
    font-size: 0.16rem;
    color: red;
    border-radius: 0.24rem;
    width: 1rem;
    height: 0.42rem;
    line-height: 0.42rem;
    border: 1px solid red;
    text-align: center;
  }
</style>

