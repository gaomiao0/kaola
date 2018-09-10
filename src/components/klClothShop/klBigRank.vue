<template>
<div class="brank">
  <div class="tit">
    <a href="">
      <img :src="bigrank.tit" alt="">
    </a>
  </div>
  <div class="qlist">
    <a href="" v-for="(q,index) in bigrank.quanlist" :key="index">
      <img :src="q.imgs" alt="">
    </a>
  </div>
  <ul class="branklist">
    <li v-for="(b,index) in bigrank.bigranklist" :key=""index>
      <img :src="b.imgone" alt="">
      <p>{{b.tit}}</p>
      <span>{{b.zhekou}}></span>
      <strong><img :src="b.imgtwo"></strong>
    </li>
  </ul>
  <div class="mrank">
    <a href="">
      <img :src="bigrank.moreimg" alt="">
    </a>
  </div>
</div>
</template>

<script>
    export default {
        name: "klBigRank",
        props:["bigrank"]
    }
</script>

<style scoped lang="less">
.brank{
  width:100%;
  background:#f0f0f0;
  padding-top:20/200rem;
  .tit{
    img{
      width:100%;
      height:154/200rem;
    }
  }
  .qlist{
    display: flex;
    overflow-x: scroll;
    margin-bottom: 18/200rem;
    a{
      margin-left:9/200rem;
      img{
        width:309/200rem;
        height:171/200rem;
      }
    }
  }
  .branklist{
    display: flex;
    flex-wrap: wrap;
    li{
      width:31.8%;
      margin:0 5/200rem 10/200rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom:22/200rem ;
      position: relative;
      background: #fff;

      img{
        width:236/200rem;
        height:236/200rem;

      }
      p{
        font-size:20/200rem;
        color:#050505;
        line-height:60/200rem;
        margin-top:10/200rem;
      }
      span{
        font-size:20/200rem;
        color:#910e2a;
      }
      strong{
        display: block;
        text-align: center;
        position: absolute;
        left:39%;
        top:56%;
        box-shadow: 1px 1px 1rem 2px #e2e2e2;
        img{
          width:51/200rem;
          height:51/200rem;
        }
      }
    }
  }
  .mrank{
    img{
      width:100%;
      height:200/200rem;
    }
  }
}
</style>
