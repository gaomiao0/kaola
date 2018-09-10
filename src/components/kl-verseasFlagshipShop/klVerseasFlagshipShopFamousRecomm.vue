<template>

        <!--famousRecomm-->
        <div class="famousRecomm" v-if="!loading">
            <div class="famousRecommTitle">
                <h2>{{fam.tittxt}}</h2>
                <p>{{fam.titp}}</p>
            </div>
            <div class="famousRecommShopBox" >
                <div class="famousRecommShop" v-for="(shopimg,index) in fam.famshop" :key="index">
                    <img :src="shopimg.famimg" alt=""/>
                </div>
            </div>
        </div>

</template>

<script type="text/ecmascript-6">
    export default {
      data(){
        return{
          fam:[],
          loading:false
        }
      },
      created() {
        this.getData()
      },
      methods: {
        getData(){
          this.loading=true;
          let that=this;
          this.$http.get('/api/address').then(response=>{
            this.fam = response.data.data.famous
            that.loading=false;
            // console.log(this.fam.famous.tittxt)
          })
        },
      },
    }
</script>


<style scoped>


</style>
