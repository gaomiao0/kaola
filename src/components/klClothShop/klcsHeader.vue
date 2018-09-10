<template>
  <div class="header">
    <div class="head">
      <router-link to="/" class="a">
        <i class="iconfont icon-left"></i>
      </router-link>
      <div class="tit">
        考拉服饰馆
      </div>
      <div class="h_right">
      <i class="iconfont icon-fenxiang"></i>
      <span>●</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "klcsHeader"
    }
</script>

<style scoped lang="less">
  .header{
    background:#fff;
    z-index:100;
    width:100%;
    position:fixed;
    top:0;
    left:0;
  }

  .head{
    height:0.54rem;
    background: #fff;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding:0 0.175rem;
    box-sizing: border-box;

  }
  .a{
    color:#020202;
    display: flex;
    line-height:0.54rem;
    font-size:0.2rem;

  }
  .head .iconfont{
    font-size:0.2rem;
    font-weight:600;
  }
  .tit{
    font-size: 36/200rem;
    color:#020202;
  }
  .h_right{
    display: flex;
    height:100%;
    align-items: center;
    span{
      font-size: 50/200rem;
      color:#020202;
      margin-left:30/200rem;
    }
  }
</style>
