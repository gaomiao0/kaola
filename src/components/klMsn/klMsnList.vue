<template>
  <div class="box">
   <kl-list-one :msnn=index1.msn></kl-list-one>
  </div>
</template>

<script>
    import KlListOne from "./klListOne";
    import {indexServices} from "../../api/mvp";
    export default {
        name: "klMsnList",
      components: {KlListOne},
      data(){
        return{
          index1:[]

        }

      },
      methods:{
        foucs(){
          indexServices.indexInfoByUserId((data)=>{
            this.index1 = data;
            // console.log(data)
          })
        }
      },
      created(){
        this.foucs();
      },
    }
</script>

<style scoped>
.box{
  /*height: 4rem;*/
  padding-left:0.1rem ;
}
</style>
