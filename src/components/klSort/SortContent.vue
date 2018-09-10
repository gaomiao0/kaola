<template>
  <div class="content">
    <div class="con">
<<<<<<< HEAD
      <div class="navbox">
        <div class="nav">
          <ul>
            <li @click="goto(index)" v-for="(n,index) in alldata.nav" :key="index">
              {{n}}
            </li>
          </ul>
        </div>
        <p class="bg"></p>
      </div>
        <sort-content-lists :conlist="alldata.conlists1" v-if="flag==0"></sort-content-lists>
        <sort-content-lists :conlist="alldata.conlists2" v-else-if="flag==1" class="rig"></sort-content-lists>
        <sort-content-lists :conlist="alldata.conlists1" v-if="flag==2"></sort-content-lists>
        <sort-content-lists :conlist="alldata.conlists2" v-else-if="flag==3" class="rig"></sort-content-lists>
=======
        <sort-content-nav></sort-content-nav>
      <sort-content-lists></sort-content-lists>
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f

    </div>
  </div>
</template>

<script>
    import SortContentNav from "./SortContentNav";
    import SortContentLists from "./SortContentLists";
    export default {
        name: "SortContent",
<<<<<<< HEAD
        components: {SortContentLists, SortContentNav},
        data(){
          return{
            flag:1
          }
        },
        methods: {
          goto(idx) {
            this.flag = idx
            $(".bg").animate({
              top:idx*0.5+0.3+"rem"
            },100)
          }
        },
        props: {
          alldata: {
            type: Object,
            required: true
          }
        }
    }
</script>

<style scoped lang="less">
.content{
  flex: 1;
  width:100%;
  /*background: #fff;*/
}
.con{
    display: flex;
    position: relative;
    sort-content-lists {
      position: absolute;
      left: 0;
      top:0;
    }
  }
.navbox{
  border-right: 1px solid #ececec;
  position:relative;
  .bg{
    width:70%;
    height:0.20rem;
    background: #d50000;
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
  padding:0 0.24rem;
  box-sizing: border-box;
  text-align: center;
  font-size:0.14rem ;
  color:#000000;

}
=======
      components: {SortContentLists, SortContentNav}
    }
</script>

<style scoped>
.content{
  flex: 1;
  margin-top:0.54rem;
  width:100%;

}
  .con{
    display: flex;
  }
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
</style>
