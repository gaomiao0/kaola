<template>
           <!--BlackCardBox-->
        <div class="BlackCardBox">
          <div class="BlackCardSir">
            <div class="BlackCardSirHeader">
              <div class="BlackCardSirHeaderPhone">
                <img :src="vcard.vhi" alt="">
                <p>{{vcard.vhp}}</p>
              </div>
              <div class="BlackCardSirHeaderTxt">
                <p>{{vcard.vhtp}}></p>
              </div>
            </div>
            <div class="BlackCardSirTxt">
              <div class="BlackCardSirTxtBox" v-for=" vcst in vcard.vctb">
                <div class="BlackCardSirTxtPic">
                  <img :src="vcst.vctbi" alt="">
                </div>
                <div class="BlackCardSirTxtContent">
                  <p>{{vcst.vctbt}}</p>

                  <div class="BlackCardSirTxtContentFooter">
                    <p>{{vcst.vctbfp1}}</p>

                    <p>{{vcst.vctbfp2}}</p>
                  </div>
                </div>
              </div>
              <!--<div class="BlackCardSirTxtBox">-->
                <!--<div class="BlackCardSirTxtPic">-->
                  <!--<img src="../../assets/imgs/m-v-10.png" alt="">-->
                <!--</div>-->
                <!--<div class="BlackCardSirTxtContent">-->
                  <!--<p>宠男友必入：每个男人，都需要一只「鱼鹰包」</p>-->

                  <!--<div class="BlackCardSirTxtContentFooter">-->
                    <!--<p>2721人赞</p>-->

                    <!--<p>14小时前</p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            </div>
          </div>
        </div>
</template>


<script>
export default {
  data(){
    return{
      vcard:[],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get('/api/address').then(response=>{
        this.vcard = response.data.data.vcar
      })
    },
  },
}
</script>


<style scoped>
     /* BlackCardBox */
  .BlackCardBox {
    width: 100%;
    background: #fff;
  }

  .BlackCardSir {
    width: 100%;
    height: 1.62rem;
    margin-bottom: 0.28rem;
  }

  .BlackCardSirHeader {
    margin: 0 0.17rem;
    display: flex;
    justify-content: space-between;
    line-height: 0.28rem;
    padding-top: 0.29rem;
    margin-bottom: 0.11rem;
  }

  .BlackCardSirHeaderPhone {
    display: flex;
    font-size: 0.16rem;
    font-weight: bolder;
  }

  .BlackCardSirHeaderPhone img {
    width: 0.28rem;
    height: 0.28rem;
    margin-right: 0.07rem;
  }

  .BlackCardSirHeaderTxt {
    font-size: 0.12rem;
    color: #999999;

  }

  .BlackCardSirTxt {
    width: 100%;
    display: flex;
    overflow-x: auto;
  }

  .BlackCardSirTxtBox {
    display: flex;
    width: 3.2rem;
    flex-shrink: 0;
    margin-left: 0.16rem;
  }

  .BlackCardSirTxtPic img {
    width: 0.9rem;
    height: 0.95rem;

  }

  .BlackCardSirTxtContent {
    font-size: 0.16rem;
    line-height: 0.23rem;
    margin-top: 0.06rem;
    margin-left: 0.08rem;
  }

  .BlackCardSirTxtContentFooter {
    display: flex;
    font-size: 0.12rem;
    margin-top: 0.2rem;
    justify-content: space-between;
  }

</style>

