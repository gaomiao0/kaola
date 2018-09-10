<template>
  <div class="beautyGuardBox">
    <div class="siftTilte beautyGuardTitle">
      <img :src="num.limg" alt=""/>
      <p>{{num.secp}}</p>
      <img :src="num.rimg" alt=""/>
    </div>
    <div class="beautyGuard same">
      <div class="siftTxtBox"  v-for="same in num.samehot">
        <div class="siftTxtBoxImg">
          <img :src="same.txtimg" alt=""/>
        </div>
        <div class="siftMessg">
          <p>{{same.messg}}</p>
        </div>
        <div class="siftPircCart">
          <div class="siftPric" v-for="pric in same.price">
            <p>{{pric.pri1}}</p>
            <span>{{pric.pri2}}</span>
          </div>
          <div class="siftCart">
            <img :src="same.card" alt=""/>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script  type="text/ecmascript-6">
  export default {
    data(){
      return{
        num:[],
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.$http.get('/api/address').then(response=>{
          this.num = response.data.data.Num
        })
      },
    },
  }
</script>

<style scoped>

</style>
