<template>
  <div class="navbox">
  <div class="nav">
    <ul>
      <li @click="goto(index)" v-for="(n,index) in navdata" :key="index">{{n}}</li>
    </ul>
  </div>
    <p class="bg"></p>
  </div>
</template>

<script>
    export default {
        name: "SortContentNav",
        props:["navdata","index","goto"],
        methods:{
         /*gototo(m){
            $(".bg").animate({
              top:m*0.5+0.3+"rem"
            },100)
         }*/
        }
    }
</script>

<style scoped lang="less">
.navbox{
  border-right: 1px solid #ececec;
  position:relative;
  .bg{
    width:70%;
    height:0.18rem;
    background: #fc4116;
    border-radius: 0.08rem;
    margin:0 auto;
    position:absolute;
    top:0.3rem;
    left: 15%;
    z-index: -1;
  }
}
.nav{
  padding-top:0.15rem;
  box-sizing: border-box;
  overflow-y: scroll;
  background: transparent;
}
.nav ul{
 /* display: flex;
  flex-direction: column;*/
  z-index:999;
}
.nav ul li{
  /*flex-shrink: 1;*/
  z-index:999;
  height:0.5rem;
  line-height:0.5rem;
  font-size:0.14rem ;
  color:#000000;
  padding:0 0.24rem;
  box-sizing: border-box;
  text-align: center;
}

</style>
