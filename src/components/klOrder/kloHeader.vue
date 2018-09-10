<template>
  <div class="header">
    <div class="head">
      <router-link to="/klshopcars" class="iconfont icon-left"></router-link>
      <div class="tit">
        确认订单
      </div>
      <div class="h_right">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "kloHeader"
    }
</script>

<style scoped lang="less">
  .header{
    width:100%;
    background:#fff;
    z-index:100;
    border-bottom:1px solid #e3e3e3;
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
  .head .iconfont{
    font-size:0.2rem;
    font-weight:600;
    color: black;
  }
  .tit{
    font-size: 36/200rem;
    color:#020202;
  }
</style>
