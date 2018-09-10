<template>
<div class="hot">
  <div class="tit">
    <a href="">
      <img :src="hotpros.titimg" alt="">
    </a>
  </div>
  <ul class="hnav">
    <li class="each" v-for="(n,index) in hotpros.hotnav" :key="index" @click="show(index)" :class="{focus:flag==index}">
      <p>
        <i class="iconfont icon-dianpu"></i>
        <span>{{n.tit}}</span>
      </p>
    </li>
  </ul>
  <div class="hotprolist">
  <h1>热销爆品</h1>
    <ul v-show="flag==0">
    <li v-for="(m,index) in hotpros.hotpro" :key="index">
      <img :src="m.imgs" alt="">
      <p>{{m.btit}}</p>
      <p class="buy">
        <span>￥<b>{{m.price}}</b></span>
        <span class="ljbuy">立即购买</span>
      </p>
      <strong>{{m.tips}}</strong>
    </li>
    </ul>
    <ul v-show="flag==1">
      <li v-for="(m,index) in hotpros.hotpro1" :key="index">
        <img :src="m.imgs" alt="">
        <p>{{m.btit}}</p>
        <p class="buy">
          <span>￥<b>{{m.price}}</b></span>
          <span class="ljbuy">立即购买</span>
        </p>
        <strong>{{m.tips}}</strong>
      </li>
    </ul>
    <ul v-show="flag==2">
      <li v-for="(m,index) in hotpros.hotpro" :key="index">
        <img :src="m.imgs" alt="">
        <p>{{m.btit}}</p>
        <p class="buy">
          <span>￥<b>{{m.price}}</b></span>
          <span class="ljbuy">立即购买</span>
        </p>
        <strong>{{m.tips}}</strong>
      </li>
    </ul>
    <ul v-show="flag==3">
      <li v-for="(m,index) in hotpros.hotpro1" :key="index">
        <img :src="m.imgs" alt="">
        <p>{{m.btit}}</p>
        <p class="buy">
          <span>￥<b>{{m.price}}</b></span>
          <span class="ljbuy">立即购买</span>
        </p>
        <strong>{{m.tips}}</strong>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        name: "klHotProduct",
      props:["hotpros"],
      data(){
          return{
            flag:0
          }
      },
      methods:{
          show(n){
            this.flag=n
          }
      }
    }
</script>

<style scoped lang="less">
  .hot {
    width: 100%;
    .tit {
      img {
        width: 100%;
        height: 154/200rem;
      }
    }
    .hnav{
      display: flex;
      height:100/200rem;
      background:#333331;
      overflow-x: scroll;
      .focus{
        background:#e3caab;
        span{
          color:#333331;
        }
      }
      li{
        box-sizing: border-box;
        height:100%;
        font-size:20/200rem ;
        color:#fff;
        p{
          height:100%;
          width:148/200rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .hotprolist{
      background: #f1f1f1;
      padding:0 15/200rem;
      position:relative;
      h1{
        text-align: center;
        line-height:105/200rem;
        font-size: 36/200rem;
        color:#333333;
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        position:absolute;
        top:105/200rem;
        li{
          width:48.6%;
          margin:5/200rem;
          background: #fff;
          display: flex;
          flex-direction: column;
          position: relative;
          img{
            width:100%;
            height:350/200rem;
          }
          p{
            width: 100%;
            font-size:24/200rem ;
            color:#181818;
            line-height:40/200rem;
            padding:0 20/200rem;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-top:20/200rem;
          }
          .buy{
            font-size:24/200rem;
            color:#ff2228;
            display: flex;
            justify-content: space-between;

            .ljbuy{
              font-size: 20/200rem;
              color:#fff;
              padding:0 5px;
              padding-top:2px;
              border-radius:20/200rem;
              background:#ff2228;
            }

          }
          strong{
            padding:1px 3px;
            box-sizing: border-box;
            line-height:30/200rem;
            border:1px solid #ff2228;
            text-align: center;
            font-size: 22/200rem;
            color:#ff2228;
            position: absolute;
            left: 20/200rem;
            top:58%;
            background: #f7fefe;
          }
        }
      }
    }
  }
</style>
