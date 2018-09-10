<template>
    <div class="footer">
      <div class="foot">
        <span>实付款:￥<b>215.00</b></span>
        <router-link to="/klreceive">提交订单</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "kloFooter"
    }
</script>

<style scoped lang="less">
.footer{
  width:100%;
  position:fixed;
  left: 0;
  bottom:0;
  background: #fff;
  .foot{
    display: flex;
    justify-content: flex-end;
    font-size: 30/200rem;
    color:#e71431;
    height:99/200rem;
    border-top:1px solid #dedfde;
    align-items: center;
    b{
      font-weight: 100;
    }
    a{
      font-size:30/200rem;
      color:#fff;
      text-align: center;
      height:100%;
      line-height:100/200rem;
      background:#e71431;
      width:242/200rem;
      margin-left:22/200rem;
      letter-spacing: 1px;
    }
  }
}
</style>
