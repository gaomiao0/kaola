<template>

         <!--分类-->
      <section>
        <a href="#" v-for="sec in secData.sect">
          <img :src="sec.img" alt=""/>
          <span>{{sec.title}}</span>
        </a>
      </section>

</template>

<script type="text/ecmascript-6">
    export default{
      data(){
        return{
          secData:[],
        }
      },
      created() {
        this.getData()
      },
      methods: {
        getData() {
          this.$http.get('/api/address').then(response=>{
            this.secData = response.data.data
            // console.log(this.secData.sect[0])
          })
        },
      },
    }

</script>

<style scoped>

</style>
