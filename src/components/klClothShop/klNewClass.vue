<template>
    <div class="newclass">
      <div class="eachbox">
        <h1>/品类换新/<span>当季热门品类 黑卡会员折上折</span><a href="">立即进入></a>  </h1>
        <ul>
          <li v-for = "(n,index) in newclass.fnewpros" :key="index">
            <img :src="n.imgs">
            <p>{{n.btit}}</p>
            <span>{{n.stit}}</span>
            <span class="youhui">{{n.youhui}}</span>
          </li>
        </ul>
      </div>
      <div class="eachbox box2">
        <h1>/首降尝新/<span>特惠新品每日更新</span><a href="">立即进入></a>  </h1>
        <ul class="pro_list">
          <li v-for="(m,index) in newclass.snewpros" :key="index">
            <img :src="m.imgs" alt="">
            <p>{{m.tit}}</p>
            <span>￥<b>{{m.price}}</b></span>
            <strong>{{m.xinpin}}</strong>
          </li>
        </ul>
        <div class="more">
          <a href="">
            <img :src="newclass.moreimg" alt="">
          </a>
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "klNewClass",
        props:["newclass"]
    }
</script>

<style scoped lang="less">
.newclass{
  background: #f5f5f5;
  padding:15/200rem 16/200rem 0;
  box-sizing: border-box;
  .eachbox{
    border-radius:28/200rem ;
    overflow: hidden;
    margin-bottom: 33/200rem;
    h1{
      font-size:30/200rem ;
      color:#0e0000;
      line-height:86/200rem;
      background:#fedcdb;
      padding:0 22/200rem;
      span{
        font-size:22/200rem ;
        color:#6d5553;
      }
      a{
        font-size:22/200rem ;
        color:#170000;
        float: right;
        margin-top:20/200rem;
        height:22/200rem;
      }
    }
    ul{
      width:100%;
      display: flex;
      margin-top:2px;
      li{
        width:33.33%;
        margin-left:2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background:#fff;
        img{
          width:235/200rem;
          height:268/200rem;
        }
        p{
          font-size: 22/200rem;
          color:#FFF;
          padding:1px 34/200rem;
          background: #e57b7b;
          margin-top:16/200rem;
        }
        span{
          font-size: 26/200rem;
          color:#0d0d0d;
          padding:3px 0;
        }
        .youhui{
          font-size:22/200rem ;
          color:#b32e3e;
          margin-bottom: 29/200rem;
          padding:0;
        }
      }
      li:last-child{
        margin-left: 0;
      }
    }
  }
  .box2{
    margin:0 -16/200rem;
    background: #f0f0f0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    h1{
      margin:0 16/200rem;
      border-top-left-radius: 10/200rem;
      border-top-right-radius: 10/200rem;
    }
    .pro_list{
      overflow-x:scroll;
      background: #fff;
      padding-bottom: 40/200rem;
      padding-top:36/200rem;
      li{
        position: relative;
        margin-left:20/200rem;
        img{
          width:200/200rem;
          height:1rem;
        }
        p{
          font-size:22/200rem ;
          color:#1b1b1b;
          background: #fff;
          width:100%;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        span{
          font-size: 21/200rem;
          color:#8f0021;
          width:100%;
        }
        strong{
          display: block;
          font-size: 10/100rem;
          color:#fff;
          padding:0 5px 0 3px;
          background: #8f54e0;
          border-top-right-radius: 10/100rem;
          border-bottom-right-radius: 10/100rem;
          position: absolute;
          left: 0;
          top:40%;
          font-weight: 100;
        }
      }
      li:last-child{
        margin-left:20/200rem;
      }
    }
    .more{
      height:164/200rem;
      a{
        img{
          width:100%;
          height:164/200rem;
        }
      }
    }
  }

}
</style>
