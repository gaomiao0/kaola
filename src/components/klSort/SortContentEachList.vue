<template>
  <div>
      <dl class="eachlist">
          <dt class="list_tit">
              <h1>畅销新品</h1>
              <div class="rexiao">
                  <span>热销榜</span>
                  <i class="iconfont icon-next"></i>
              </div>
          </dt>
          <dd class="list_lis">
              <a href="">
                  <img src="../../assets/imgs/ga1.png" alt="">
                  <span>口红</span>
              </a>
              <a href="">
                  <img src="../../assets/imgs/ga2.png" alt="">
                  <span>面膜</span>
              </a>
              <a href="">
                  <img src="../../assets/imgs/ga3.png" alt="">
                  <span>防晒</span>
              </a>
              <a href="">
                  <img src="../../assets/imgs/ga4.png" alt="">
                  <span>洗面奶</span>
              </a>
              <a href="">
                  <img src="../../assets/imgs/ga5.png" alt="">
                  <span>眼霜</span>
              </a>
          </dd>
          <dd class="splitline"></dd>
      </dl>

    <dl class="eachlist">
      <dt class="list_tit">
        <h1>彩妆香氛</h1>
        <div class="rexiao">
          <span>热销榜</span>
          <i class="iconfont icon-next"></i>
        </div>
      </dt>
      <dd class="list_lis">
        <a href="">
          <img src="../../assets/imgs/ga1.png" alt="">
          <span>唇妆</span>
        </a>
        <a href="">
          <img src="../../assets/imgs/ga2.png" alt="">
          <span>面膜</span>
        </a>
        <a href="">
          <img src="../../assets/imgs/ga3.png" alt="">
          <span>防晒</span>
        </a>
        <a href="">
          <img src="../../assets/imgs/ga4.png" alt="">
          <span>洗面奶</span>
        </a>
        <a href="">
          <img src="../../assets/imgs/ga5.png" alt="">
          <span>眼霜</span>
        </a>
      </dd>
      <dd class="splitline"></dd>
    </dl>
    <dl class="eachlist">
      <dt class="list_tit">
        <h1>彩妆香氛</h1>
        <div class="rexiao">
          <span>热销榜</span>
          <i class="iconfont icon-next"></i>
        </div>
      </dt>
      <dd class="list_lis">
        <a href="">
          <img src="../../assets/imgs/ga1.png" alt="">
          <span>唇妆</span>
        </a>
        <a href="">
          <img src="../../assets/imgs/ga2.png" alt="">
          <span>面膜</span>
        </a>
        <a href="">
          <img src="../../assets/imgs/ga3.png" alt="">
          <span>防晒</span>
        </a>
        <a href="">
          <img src="../../assets/imgs/ga4.png" alt="">
          <span>洗面奶</span>
        </a>
        <a href="">
          <img src="../../assets/imgs/ga5.png" alt="">
          <span>眼霜</span>
        </a>
      </dd>
      <dd class="splitline"></dd>
    </dl>

  </div>
</template>

<script>
    export default {
        name: "SortContentEachList"
    }
</script>

<style scoped lang="less">
.eachlist{
    padding-top:0.07rem;
    .list_tit{
        display: flex;
        height:85/200rem;
        font-size:0.12rem ;
        color:#000;
        align-items: center;
        padding: 0 0.1rem;
        box-sizing: border-box;
        justify-content: space-between;
        h1{
            font-size:0.12rem;
            font-weight:100;
        }
        .rexiao{
            color:#761410;
        }
    }
    .list_lis{
        display: flex;
        flex-wrap: wrap;
        a{
            width:33.33%;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size:0.12rem;
            color:#3b3b3b;
            img{
                width:100%;
                height:180/200rem;
            }
          span{
            line-height:69/200rem;
          }
        }
    }
  .splitline{
    margin:0.14rem 0.1rem 0;
    border-bottom: 1px solid #e8e8e8;
  }
}
</style>
