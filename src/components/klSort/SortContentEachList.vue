<template>
  <div>
      <dl class="everylist">
          <dt class="list_tit">
              <h1>{{eachlist.tit}}</h1>
              <div class="rexiao">
                  <span>热销榜</span>
                  <i class="iconfont icon-next"></i>
              </div>
          </dt>
          <dd class="list_lis">
              <router-link to="/klGoodsList" v-for="(lis,index) in eachlist.list" :key="index">
                  <img :src="lis.imgs" alt="">
                  <span>{{lis.protit}}</span>
              </router-link>
          </dd>
          <dd class="splitline"></dd>
      </dl>
  </div>
</template>

<script>
    export default {
        name: "SortContentEachList",
      props:["eachlist"]
    }
</script>

<style scoped lang="less">
.everylist{
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
    }
  .splitline{
    margin:0.14rem 0.1rem 0;
    border-bottom: 1px solid #e8e8e8;
  }
}
</style>
