<template>
    <div class="newpros">
        <div class="tit">
          <a href="">
            <img :src="newpros.titimg" alt="">
          </a>
        </div>
        <div class="newbanner">
          <a href="">
            <img :src="newpros.banimg" alt="">
          </a>
        </div>
        <ul class="rank_list">
          <li v-for = "(r,index) in newpros.ranklist" :key="index">
            <a href="">
                <p class="rankimg"><img :src="r.imgs" alt=""><span>上新<b>{{r.sxnum}}</b>款</span></p>
                <p class="ranktit">{{r.rankname}}<span>{{r.shangxin}}</span></p>
                <p class="rankzhekou">全场低至<span>{{r.zhekou}}</span>折</p>
            </a>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "klNewProducts",
      props:["newpros"]
    }
</script>

<style scoped lang="less">
.newpros{
  width:100%;
  .tit{
    img{
      width:100%;
      height:154/200rem;
    }
  }
  .newbanner{
    img{
      width:100%;
      height:380/200rem;
    }
  }
  .rank_list{
    display: flex;
    padding:16/200rem 16/200rem 12/200rem;
    box-sizing: border-box;
    li{
      width:33.33%;
      margin:0 6/200rem;
      border:1px solid #f0f0f0;
      border-radius: 3px;
      padding-bottom: 14/200rem;
      a{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
          width:100%;
          text-align: center;
        }
        .rankimg{
          position: relative;
          img{
            width:100%;
            height:228/200rem;
          }
          span{
            display: block;
            width:100%;
            height:40/200rem;
            text-align: center;
            font-size:16/200rem ;
            color:#fff;
            line-height:40/200rem;
            position: absolute;
            left: 0;
            bottom:0;
            background: rgba(0,0,0,.4);
          }
        }
      }
      .ranktit{
        font-size: 30/200rem;
        color:#141414;
        font-weight: 600;
        line-height:40/200rem;
        margin-top:10/200rem;
        span{
          font-weight:100;
          font-size:10/200rem;
          color:#b62d36;
          display: inline-block;
          vertical-align: middle;
          padding:0 3px;
          box-sizing: border-box;
          border-radius: 20/200rem;
          border:1px solid #9f6d66;
          margin-bottom: 2px;
          margin-left: 2px;

        }
      }
      .rankzhekou{
        font-size: 10/200rem;
        color:#585858;
        line-height:40/200rem;
        span{
          font-size: 20/200rem;
          color:#9f0e2b;
        }
      }
    }
  }
}
</style>
