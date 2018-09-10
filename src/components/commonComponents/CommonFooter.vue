<template>
<div class="footer">
  <div class="foot">
<<<<<<< HEAD
    <a href="javascript:;" :class="{on:'/'===$route.path}" @click="goto('/')">
=======
    <a href="javascript:;" :class="{on:'/klClothShop'===$route.path}" @click="goto('/klClothShop')">
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
      <i class="iconfont icon-taikongcangtubiao-"></i>
      <span>首页</span>
    </a>
    <a href="javascript:;" :class="{on:'/klSort'===$route.path}" @click="goto('/klSort')">
      <i class="iconfont icon-sousuo-copy"></i>
      <span>分类</span>
    </a>
    <a href="javascript:;" :class="{on:'/gress'===$route.path}" @click="goto('/gress')">
      <i class="iconfont icon-xiaocao"></i>
      <span>种草社区</span>
    </a>
<<<<<<< HEAD
    <a href="javascript:;" :class="{on:'/klshopcars'===$route.path}" @click="goto('/klshopcars')">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" :class="{on:'/klmine'===$route.path}" @click="goto('/klmine')">
=======
    <a href="javascript:;" :class="{on:'/shopcarts'===$route.path}" @click="goto('/shopcarts')">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" :class="{on:'/mine'===$route.path}" @click="goto('/mine')">
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
      <i class="iconfont icon-wode"></i>
      <span>我的考拉</span>
    </a>
  </div>
</div>
</template>

<script>
    export default {
        name: "Footer",
        methods:{
            goto(path){
              this.$router.replace(path)
            }
        }
    }
</script>

<style scoped lang="less">
.footer{
  width:100%;
  position:fixed;
  bottom:0;
  left: 0;
  z-index:100;
  background:#fff;
  .foot{
    height:103/200rem;
    display: flex;
    align-items: center;
    border-top:1px solid #e8e8e8;
    a{
      flex:1;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size:20/200rem ;
      color:#000;
      padding:0.08rem 0;
      box-sizing: border-box;
      .iconfont{
        font-size:0.22rem ;
      }
    }
    .on{
      color:#ff0000;
    }
  }
}

</style>
