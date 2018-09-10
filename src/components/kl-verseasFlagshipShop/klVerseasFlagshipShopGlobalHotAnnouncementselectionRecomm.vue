<template>
    <div class="selectionRecommBox">
                        <div class="siftTilte selectionRecomm">
                            <img :src="hot.limg" alt=""/>
                            <p>{{hot.secp}}</p>
                            <img :src="hot.rimg" alt=""/>
                        </div>
                            <div class="siftTxt same">
                                <div class="siftTxtBox" v-for="same in hot.samehot">
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

<script>
    export default {
      data(){
        return{
          hot:[],
        }
      },
      created() {
        this.getData()
      },
      methods: {
        getData() {
          this.$http.get('/api/address').then(response=>{
            this.hot = response.data.data.Hot
          })
        },
      },
    }
</script>

<style scoped>

</style>

