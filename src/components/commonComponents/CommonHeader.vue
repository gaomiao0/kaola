<template>
<div class="header">
  <div class="head">
    <i class="iconfont icon-saoyisao"></i>
    <div class="search">
      <i class="iconfont icon-sousuo-copy"></i>
      <input type="text" placeholder="初秋美衣×1">
    </div>
<<<<<<< HEAD
    <router-link to="/klMsn" class="iconfont icon-xinxi"></router-link>
=======
    <div class="iconfont icon-xinxi"></div>
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
  </div>
</div>
</template>

<script>
    export default {
        name: "SortHeader",
        data(){
            return{msg:'分类页头部'}
         }
    }
</script>

<style scoped>
.header{
  background:#fff;
  position: fixed;
  left: 0;
  top:0;
  width:100%;
  border-bottom: 1px solid #ececec;
  z-index:100;
}
.head{
  height:0.54rem;
  background: #fff;
  color:#d50000;
  display: flex;
  align-items: center;
  padding:0 0.175rem;
  box-sizing: border-box;
}
.head .iconfont{
  font-size:0.24rem;
  font-weight:600;
<<<<<<< HEAD
  color:#d50000
=======
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
}
.search{
  flex: 1;
  height:100%;
  border:2px solid #d50000;
  height:0.285rem;
  display: flex;
  align-items: center;
  margin:0 0.12rem;
  padding-left:0.09rem ;
  box-sizing: border-box;
  border-radius:0.1425rem ;
  overflow: hidden;
}
.search .iconfont{
  font-size:0.16rem;
}
  input{
    height:100%;
    flex: 1;
    font-size:0.12rem ;
    color:#7c7c7c;
    line-height:0.285rem ;
    margin-left: 0.1rem;
  }
</style>
