<template>

  <header>
    <router-link to="/klmine" class="leftArrow">
      <i class="iconfont icon-left"></i>
    </router-link>
    <div class="OverseasFlagshipShopTitle">
      <p>
        充值中心
      </p>
    </div>
    <div class="shareAndFeature">
      <i class="iconfont icon-fenxiang"></i>
      <i class="iconfont icon-sandian"></i>
    </div>
  </header>

</template>


<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped>
  /*header*/
  header{
    width: 100%;
    display: flex;
    align-items: center;
    line-height: 0.5rem;
    background: #ffffff;
    font-size: 0.19rem;
    color: #000000;
    justify-content: space-between;
    border-bottom: 1px solid #c0c0be;
    box-sizing: border-box;
  }
  .leftArrow{
    width: 0.45rem;
    padding-left: 0.17rem;
    font-size: 0.19rem;
    color: #000000;

  }

  .shareAndFeature{
    padding-right: 0.21rem;
    box-sizing: border-box;
  }
  .shareAndFeature i:first-child{
    padding-right: 0.25rem;
  }

</style>

