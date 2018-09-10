<template>
  <div>
    <div class="artbox">
    <div class="art" >
      <span @click="show(0)">考拉自营</span>
      <span class="artspan" @click="show(1)">品牌<i class="iconfont icon-xiasanjiao"></i></span>
      <span class="artspan" @click="show(2)">分类<i class="iconfont icon-xiasanjiao"></i></span>
      <span class="artspan" @click="show(3)">适合肤质<i class="iconfont icon-xiasanjiao"></i></span>
    </div>
      <div class="arthover">
        <div class="ah1" v-show="flag ==1 ">
          <a v-for="a in classify">{{a.name}}</a>
          <div class="ah2" v-show="flag ==1">
            <span>重置</span>
            <span>确定</span>
          </div>
        </div>
        <div class="ah1 ah4" v-show="flag ==2">
          <a v-for="b in subClassify">{{b.name}}</a>
          <div class="ah2" v-show="flag ==2">
            <span>重置</span>
            <span>确定</span>
          </div>
        </div>
        <div class="ah1 ah3" v-show="flag ==3">
          <a v-for="c in business">{{c.name}}</a>
          <div class="ah2" v-show="flag ==3">
            <span>重置</span>
            <span>确定</span>
          </div>
        </div>

      </div>
  </div>
  </div>
</template>
<!--<script src="../../../node_modules/vue/dist/vue.js"></script>-->
<script>
  import "../../assets/js/jquery-1.11.3"
    export default {
        name: "klListNav",

      data(){
          return{
            flag:0,

            classify:[
              {"name":"迪奥"},
              {"name":"迪奥"},
              {"name":"迪奥"},
              {"name":"迪奥"},
              {"name":"迪奥"}, {"name":"迪奥"},
              {"name":"迪奥"}, {"name":"迪奥"}, {"name":"迪奥"},
              {"name":"迪奥"}, {"name":"迪奥"}, {"name":"迪奥"}, {"name":"迪奥"},
              {"name":"迪奥"},
              {"name":"迪奥"},
              {"name":"迪奥"},
              {"name":"迪奥"},
              {"name":"迪奥"}, {"name":"迪奥"},
              {"name":"迪奥"}, {"name":"迪奥"}, {"name":"迪奥"},
              {"name":"迪奥"}, {"name":"迪奥"}, {"name":"迪奥"}, {"name":"迪奥"},
              {"name":"迪奥"}, {"name":"迪奥"}, {"name":"迪奥"}, {"name":"迪奥"}
            ],
            subClassify:[
              {"name":"兰蔻"},

              {"name":"兰蔻"}, {"name":"兰蔻"}, {"name":"兰蔻"}, {"name":"兰蔻"},
              {"name":"兰蔻"}, {"name":"兰蔻"}, {"name":"兰蔻"}, {"name":"兰蔻"},
              {"name":"兰蔻"}, {"name":"兰蔻"}, {"name":"兰蔻"}, {"name":"兰蔻"},
              {"name":"兰蔻"}, {"name":"兰蔻"}, {"name":"兰蔻"}, {"name":"兰蔻"},
              {"name":"兰蔻"}, {"name":"兰蔻"}, {"name":"兰蔻"}, {"name":"兰蔻"}

            ],
            business:[
              {"name":"古驰"},
              {"name":"古驰"},
              {"name":"古驰"},
              {"name":"古驰"},
              {"name":"古驰"}, {"name":"古驰"},
              {"name":"古驰"}, {"name":"古驰"}, {"name":"古驰"},
              {"name":"古驰"}, {"name":"古驰"}, {"name":"古驰"}, {"name":"古驰"},
              {"name":"古驰"}, {"name":"古驰"}, {"name":"古驰"}, {"name":"古驰"},
              {"name":"古驰"}, {"name":"古驰"}, {"name":"古驰"}, {"name":"古驰"}
            ]
        }
      },
      // mounted(){
      //
      //     for(let i=0;i<$(".artspan").length;i++){
      //       var a=1;
      //       $(".artspan")[i].onclick=function(){
      //         // $(".artspan").css("background","pink");
      //         if(a==1){
      //           $(".arthover").css("display","block");
      //
      //             a=2;
      //         }else if(a==2){
      //           $(".arthover").css("display","none");
      //           $("this").css("border","none");
      //           a=1;
      //         }
      //
      //
      //       }
      //     }
      //
      // },
      methods:{
        show(f){
          this.flag = f
        }
      }

    }
</script>

<style scoped>
  .artbox{
    /*position: relative;*/
  }
  .arthover{
    /*height: 4rem;*/
    background: white;
    /*display: none;*/
    /*position: relative;*/
    overflow: scroll;
    z-index: 1;
    position: fixed;

  }
  .ah1{
    height: 2rem;
    display: flex;
    flex-wrap: wrap;
    padding: 0.1rem;
    overflow: scroll;

  }
  /*.ah4{*/
    /*height: 0.5rem;*/
    /*width: 100%;*/
  /*}*/

  .ah1 a{
    text-align: left;
    display: block;
    width: 50%;
    line-height: 0.3rem;
    font-size: 0.14rem;
    margin-bottom: 0.05rem;
  }
  .ah2{
    /*height: .44rem;*/
    /*padding: 0 .07rem 0 .2rem;*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .14rem;
    color: #06C1AE;
    border-bottom: 1px solid #EFEDE9;
    border-top: 1px solid #EFEDE9;
  position: fixed;
    top: 3.5rem;
    width: 100%;

  }
 .ah2 span:nth-child(1){
   width: 50%;
   line-height: 0.5rem;
   background: white;
   color: black;
 }
.ah2 span:nth-child(2){
  width: 50%;
  line-height: 0.5rem;
  background: red;
  color: white;
}
.art{
  background: #ffffff;
  height: 0.5rem;
  /*background: pink;*/
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.01rem solid #dedfde;
  margin-top: 1rem;
}
  .art span{
    display: flex;
    width: 0.8rem;
    line-height: 0.32rem;
    background: #f7f7f7;
    font-size: 0.14rem;
    border-radius: 0.05rem;
    justify-content: center;
  }
  .art span i{
    margin-left: 0.05rem;
  }
</style>
