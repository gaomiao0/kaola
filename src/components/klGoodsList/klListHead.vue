<template>
<div class="headbox">
  <div class="head">
    <router-link to="klSort" @click="show(0)"><i class="iconfont icon-left"></i></router-link>
    <span>面膜</span>
    <p>
      <a href="#"><i class="iconfont icon-sousuo-copy"></i></a>
      <a href="#"><i class="iconfont icon-liebiao"></i></a>
    </p>
  </div>

  <div class="nav">
    <ul>
      <li>综合</li>
      <li>销量</li>
      <li>价格<span><i class="iconfont icon-shangsanjiao"></i><i class="iconfont icon-xiasanjiao"></i></span></li>
      <li>新品</li>
      <li class="nav_li" @click="show(1)">筛选<i class="iconfont icon-shaixuan"></i>
        </li>

    </ul>

  </div>
  <div class="navhover" v-show="flag ==1 ">
    <div class="nh1"   v-for="mm in mv">
      <div class="nh1_p">
      <p>{{mm.mvp1}}</p>
        <a>更多</a>
      </div>
      <div class="nh1_a" v-for="m in mm.mvp2">
        <a>{{m.mvp21}}</a>
        <a>{{m.mvp22}}</a>
        <a>{{m.mvp23}}</a>
        <a>{{m.mvp24}}</a>
        <a>{{m.mvp25}}</a>
        <a>{{m.mvp26}}</a>

      </div>
    </div>
    <div class="nh2">
      <span>重置</span>
      <span>确定</span>
    </div>
  </div>
</div>

</template>

<script>
  import "../../assets/js/jquery-1.11.3"
    export default {

        name: "klListHead",
      props:["mv"],
      data(){
          return{
            flag:0
          }

      },
      methods:{
        show(f){
          this.flag = f
        }
      }
    }
</script>

<style scoped>
.headbox{
  width: 100%;
  position: fixed;
  background: white;
}
.head{
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
  border-bottom: 0.01rem solid #dedfde;

}
.navhover{
  height: 100%;
  width: 3rem;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  /*display: none;*/
  overflow: scroll;
  z-index: 3;
}
.nh1{
  font-size: 0.14rem;
  padding: 0.1rem;

}
.nh1_a{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.nh1_a a{
  font-size: 0.12rem;
  width: 30%;
  line-height: 0.25rem;
  background: #ccc;
  margin-top: 0.1rem;
}
.nh1_p{
  display: flex;
  justify-content: space-between;
  line-height: 0.3rem;
}
.nav_li{
  position: relative;
}
.nh2{
  display: flex;
  width: 3rem;
  font-size: 0.14rem;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  right: 0;
}
.nh2 span{
  display: block;
  width: 50%;
  line-height: 0.5rem;
  border-top: 0.01rem solid #f7f3f7;
}
.nh2 span:nth-child(1){
  background: white;
  color: black;
}
.nh2 span:nth-child(2){
  background: red;
  color: white;

}
  .head p{
  display: flex;
  }
  .head a{
    display: flex;

  }
  .head a i{
    color: #313031;
    font-size: 0.18rem;
  }
  .head p a:nth-child(1) i{
    margin-right: 0.1rem;
  }
  .head span{
    font-size: 0.14rem;

  }

  .nav{
    height: 0.5rem;
  border-bottom: 0.01rem solid #f7f3f7;
  }
  .nav ul{
    height: 0.5rem;
    display: flex;
    /*flex-direction: column;*/
    justify-content: space-around;
    align-items: center;
  }
  .nav ul li{
    display: flex;
    font-size: 0.14rem;
    color: #313031;
    float: left;
  }
.nav ul li:nth-child(1){
  color: red;
}
  .nav ul li span{
    display: flex;
    flex-direction: column;
  }
.nav ul li span i{
  width: 0.07rem;
  height: 0.07rem;
  color: #9c9a9c;
}

</style>
