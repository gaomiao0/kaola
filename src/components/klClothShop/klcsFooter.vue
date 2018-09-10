<template>
  <div class="footer">
    <div class="foot">
      <a href="javascript:;">
        <i class="iconfont icon-cangku"></i>
        <span>服饰馆</span>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-xingxing"></i>
        <span>新品速递</span>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-shandian"></i>
        <span>大牌风暴</span>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-dianzan1"></i>
        <span>全球时尚</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "klcsFooter"
    }
</script>

<style scoped lang="less">
  .footer{
    width:100%;
    z-index:100;
    background:#010101;
    position:fixed;
    left:0;
    bottom:0;
    .foot{
      height:103/200rem;
      display: flex;
      align-items: center;
      a{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size:20/200rem ;
        color:#fff;
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
