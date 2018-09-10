<template>
     <!-- BlackCardWelfare -->
        <div class="BlackCardWelfare">
          <div class="BlackCardWelfareTitle">
            <span></span>
            <p>{{cwf.cwfstit}}</p>
            <span></span>
          </div>
          <div class="BlackCardWelfareDeailBox" v-for="cwfd in cwf.cwfsd">
            <div class="BlackCardWelfareDeail">
              <div class="BlackCardWelfareDeailTitle" >
                <p>{{cwfd.cwfsdt}}</p>

                <p>{{cwfd.more}}></p>
              </div>
              <div class="BlackCardWelfareDeailPic">
                <img :src="cwfd.cwfsdi" alt="">
              </div>
              <div class="BlackCardWelfareDeailList">
                <div class="BlackCardWelfareDeailListShop" v-for="cwfds in cwfd.cwfsds">
                  <img :src="cwfds.cwfsdsi" alt="">

                  <p>{{cwfds.cwfsdsp1 }}</p>

                  <p>{{cwfds.cwfsdsp2}}</p>

                  <div class="vipPrice" v-for="cwfdsp in cwfds.cwfsdsb">
                    <img :src="cwfdsp.cwfsdsbi" alt="">

                    <p>{{cwfdsp.cwfsdsbip}}</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <!--siftShop-->
          <div class="siftShop">
            <div class="siftShopTitle">
              <span></span>
              <p>{{cwf.sftit}}</p>
              <span></span>
            </div>
            <div class="vipHotSale">
              <div class="vipHotSaleTxt">
                <h2>{{cwf.hsth}}</h2>
                <p>{{cwf.hstp}}</p>
              </div>
              <div class="moreBox">
                <span>{{cwf.moreb}}</span>
              </div>
            </div>
            <div class="siftShopList">
              <div class="siftShopListShop" v-for="slss in cwf.sls">
                <div class="siftShopListShopPic">
                  <img :src="slss.slsi" alt="">
                </div>
                <div class="siftShopListShopTxt">
                  <p>{{slss.slsp}}</p>

                  <div class="siftShopListShopTxtHeat" v-for="slsth in slss.slstb">
                    <img :src="slsth.slstbi" alt="">

                    <p>{{slsth.slstbp}}</p>
                  </div>
                  <div class="siftShopListShopPrice">
                    <p>
                      <span>{{ slss.slsibox1}}</span>
                      <span>{{ slss.slsibox2}}</span>
                    </p>
                    <img :src="slss.slsiboximg" alt="">
                  </div>
                </div>
                <img :src="slss.slsps" alt="" class="hotNotice"/>
              </div>
            </div>
          </div>
          <!--goodAdvertise-->
          <div class="goodAdvertise">
            <div class="goodAdvertiseTitle">
              <h2>{{cwf.goodtit}}</h2>
              <p>{{cwf.goodp}}</p>
            </div>
            <div class="goodAdvertisePic">
              <img :src="cwf.goodi" alt=""/>
              <img :src="cwf.goodimg" alt=""/>
            </div>
          </div>

          <div class="youBlackCard">
              <div class="youBlackCardTitle">
                  <h2>{{cwf.youtit}}</h2>
                  <p>{{cwf.youp}}</p>
              </div>
            <div class="youBlackCardList">
              <div class="youBlackCardListShop" v-for="ycs in cwf.youshop">
                    <div class="youBlackCardListShopPic">
                      <img :src="ycs.youshopi" alt=""/>
                    </div>
                    <div class="youBlackCardListShopTxt">
                      <p>{{ycs.youshoptp1}}</p>
                      <span>{{ycs.youshopts1}}</span>
                      <div class="discount">
                        <img :src="ycs.youshopti1" alt=""/>
                        <p>{{ycs.youshoptp2}}</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>

          <div class="youLike">
            <div class="youLikeTitle">
                <h2>{{cwf.youliketit}}</h2>
            </div>
            <div class="youLikeList">
              <div class="youLikeListShop" v-for="yls in cwf.youlikeshop">
                <div class="youLikeListShopPic">
                  <img :src="yls.youlikeshopi" alt="yls.youlikeshopi"/>
                </div>
                <div class="youLikeListShopTxt">
                  <p>{{yls.youlikeshopp1}}</p>
                  <p>{{yls.youlikeshopp2}}</p>
                  <p>{{yls.youlikeshopp3}}</p>
                  <p>{{yls.youlikeshopp4}}</p>
                  <p>{{yls.youlikeshopp5}}</p>
                </div>
              </div>

            </div>
          </div>
      </div>
</template>

<script>
export default {
  data(){
    return{
      cwf:[],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get('/api/address').then(response=>{
        this.cwf = response.data.data.cwfs
      })
    },
  },
}
</script>

<style scoped>


  /* BlackCardWelfare */
  .BlackCardWelfare {
    width: 100%;
    background: #fff;
  }

  .BlackCardWelfareTitle {
    display: flex;
    font-size: 0.2rem;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
    line-height: 0.48rem;
  }

  .BlackCardWelfareTitle p {
    margin: 0 0.19rem;
  }

  .BlackCardWelfareTitle span {
    width: 1.03rem;
    height: 3px;
    background: #cdcdcd;
  }

  .BlackCardWelfareDeail {
    padding-bottom: 0.21rem;
  }

  .BlackCardWelfareDeailTitle {
    font-size: 0.12rem;
    color: #999999;
    display: flex;
    margin: 0 0.17rem;
    justify-content: space-between;
    align-items: center;
    line-height: 0.6rem;
  }

  .BlackCardWelfareDeailTitle p:first-child {
    font-size: 0.18rem;
    font-weight: bolder;
    color: #000;
  }

  .BlackCardWelfareDeailPic img {
    width: 3.71rem;
    height: 0.92rem;
    margin: 0 auto 0.12rem;
  }

  .BlackCardWelfareDeailList {
    width: 100%;
    display: flex;
    overflow-x: auto;
  }

  .BlackCardWelfareDeailListShop:first-child {
    margin-left: 0.17rem;
  }

  .BlackCardWelfareDeailListShop {
    margin-right: 0.05rem;
  }

  .BlackCardWelfareDeailListShop img:first-child {
    width: 1.19rem;
    height: 1.19rem;
    margin-bottom: 0.1rem;
  }

  .BlackCardWelfareDeailListShop p:nth-child(2) {
    font-size: 0.14rem;

  }

  .BlackCardWelfareDeailListShop p:nth-child(3) {
    font-size: 0.14rem;
    font-weight: bolder;
  }

  .vipPrice {
    font-size: 0.12rem;
    color: #aa9872;
    display: flex;
    align-items: center;
    margin-top: 0.09rem;
  }

  .vipPrice img:first-child {
    width: 0.12rem;
    height: 0.12rem;
    margin: 0;
  }

  /*siftShop*/
  .siftShop {
    width: 100%;
    background: #ffffff;
  }

  .siftShopTitle {
    display: flex;
    font-size: 0.24rem;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
    line-height: 0.48rem;
  }

  .siftShopTitle span {
    width: 1.03rem;
    height: 3px;
    background: #cdcdcd;
  }

  .siftShopTitle p {
    margin: 0 0.19rem;
  }

  .vipHotSale {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.14rem;
  }

  .vipHotSaleTxt {
    margin-left: 1.1rem;
    text-align: center;
    margin-top: 0.1rem;
  }

  .vipHotSaleTxt p {
    margin: 0.05rem 0 0.28rem;
  }

  /*siftShopList*/
  .siftShopList {
    margin: 0 0.16rem;
  }

  .siftShopListShop {
    width: 100%;
    height: 1.07rem;
    border: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    border-radius: 6px;
    margin-bottom: 0.1rem;
    position: relative;
  }

  .hotNotice {
    width: 0.23rem;
    height: 0.31rem;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
  }

  .siftShopListShopPic img {
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 0.19rem;
  }

  .siftShopListShopTxt {
    font-size: 0.14rem;
    width: 100%;
    margin-left: 0.12rem;
    padding-right: 0.39rem;
    height: 100%;
    box-sizing: border-box;
    padding-top: 0.13rem;
  }

  .siftShopListShopTxtHeat {
    width: 0.82rem;
    font-size: 0.1rem;
    height: 0.16rem;
    line-height: 0.16rem;
    position: relative;
    color: #ffffff;
    background: #d1af65;
    padding-left: 0.2rem;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 0.08rem;
    margin-bottom: 0.25rem;
  }

  .siftShopListShopTxtHeat img {
    width: 0.17rem;
    height: 0.19rem;
    position: absolute;
    left: 0;
    top: -4px
  }

  .siftShopListShopPrice {
    display: flex;
    font-size: 0.12rem;
    align-items: flex-end;
  }

  .siftShopListShopPrice span:first-child {
    color: #9b9b9b;
  }

  .siftShopListShopPrice img {
    width: 0.12rem;
    height: 0.12rem;
    margin-left: 0.04rem;
  }

  .goodAdvertise{
    width: 100%;
  }
  .goodAdvertiseTitle{
    font-size: 0.12rem ;
    color: #9d9d9d;
    text-align: center;
    padding-bottom: 0.23rem;
  }
  .goodAdvertiseTitle h2{
    font-size: 0.16rem;
    color: #000;
    padding: 0.18rem 0 0.06rem;
  }
  .goodAdvertisePic{
    margin: 0 0.16rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.11rem;
  }
  .goodAdvertisePic img{
    width: 1.83rem;
    height: 1.23rem;
  }

  /*youBlackCard*/
  .youBlackCard{
    width:100% ;
  }
  .youBlackCardTitle{
    font-size: 0.12rem ;
    color: #9d9d9d;
    text-align: center;
    padding-bottom: 0.23rem;
  }
  .youBlackCardTitle h2{
    font-size: 0.16rem;
    color: #000;
    padding: 0.18rem 0 0.06rem;
  }
  .youBlackCardList{
    width: 100%;
    display: flex;
    overflow-x: auto;
    padding-left: 0.16rem;
    box-sizing: border-box;
  }
  .youBlackCardListShop{
    margin-right: 0.05rem;
  }
  .youBlackCardListShopPic img{
    width: 1.19rem;
    height: 1.18rem;
    margin-bottom: 0.12rem;
  }
  .youBlackCardListShopTxt{
    font-size: 0.12rem;
  }
  .youBlackCardListShopTxt span{
    font-weight: bolder;
    margin: 0.05rem 0 0.07rem;
  }
  .discount{
    display: flex;
    color: #ba9c56;
    align-items: center;
    padding-bottom: 0.34rem;
  }
  .discount img{
    width: 0.12rem;
    height: 0.12rem;
  }

  .youLike{
    width: 100%;
    background: #f0f0f0;
  }
  .youLikeTitle{
    font-size: 0.14rem;
    line-height: 0.62rem;
    text-align: center;
  }
  .youLikeList{
    margin: 0 0.05rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .youLikeListShop{
    width: 1.8rem;
    margin-bottom: 0.05rem;
  }
  .youLikeListShopPic img{
    width: 1.8rem;
    height: 1.94rem;
  }
  .youLikeListShopTxt{
    margin-top: 1px;
    padding: 0 0.24rem 0 0.11rem;
    background: #ffffff;
  }
  .youLikeListShopTxt p:nth-child(1){
    font-size: 0.14rem;
    padding: 0.08rem 0;
  }
  .youLikeListShopTxt p:nth-child(2){
    font-size: .13rem;
    color: #a1a1a1;
    letter-spacing: 0.01rem;
  }
  .youLikeListShopTxt p:nth-child(3){
    width: 0.7rem;
    font-size: 0.1rem;
    color: #fff;
    background: #000;
    margin-top: 0.12rem;
    text-align: center;
    border-radius: 0.1rem;

  }
  .youLikeListShopTxt p:nth-child(4){
    font-size: .13rem;
    font-weight: bolder;
    margin: 0.1rem 0;
  }
  .youLikeListShopTxt p:nth-child(5){
  font-size: 0.1rem;
    text-decoration: line-through;
    color: #9e9e9e;
    padding-bottom: 0.1rem;
  }
</style>
