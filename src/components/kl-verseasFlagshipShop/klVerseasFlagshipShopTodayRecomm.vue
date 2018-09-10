<template>
        <!--活动-->
  <div v-if="!loading">
        <div class="recommend">
            <div class="bigRecomm">
                <img :src="recoms.titlimg" alt=""/>
            </div>
            <div class="smallRecomm" >
                <div class="smallRecommShop" v-for="(sm,index) in recoms.sameShop" :key="index">
                    <img :src="sm.titimg" alt=""/>
                    <div class="smallRecommShopTxt">
                        <p >{{sm.txttit}}</p>
                        <p class="smallRecommShopTxtPirc">{{sm.txtpric}}</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data(){
        return{
          recoms:[],
          loading:false
        }
      },
      methods: {
        getData() {
          this.loading=true;
          let that=this;
          this.$http.get('/api/address').then(response=>{
            this.recoms = response.data.data.rec
              that.loading=false;
            // console.log(this.recoms.rec.sameShop[0].titimg)
          })
        },
      },
      created() {
        this.getData()
      }
    }
</script>
<style scoped>

</style>
