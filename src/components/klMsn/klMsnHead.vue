<template>
    <div class="head">
        <router-link to="/"><i class="iconfont icon-left"></i></router-link>
        <span>消息中心</span>
        <a><i class="iconfont icon-shezhi"></i></a>
    </div>
</template>

<script>
    export default {
        name: "klMsnHead"
    }
</script>

<style scoped>
  .head{
    height: 0.5rem;
    font-size: 0.16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1rem;
    border-bottom: 0.01rem solid #dddddd;
  }
  .head a i{
    font-size: 0.2rem;
    font-weight: 600;
  }
  .head span{
  display: block;
  }
</style>
