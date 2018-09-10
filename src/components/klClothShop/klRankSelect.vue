<template>
  <div class="rankSelect">
    <div class="tit">
      <a href="">
        <img :src="ranksel.titimg" alt="">
      </a>
    </div>
    <div class="raknav">
      <a href="javascript:;" v-for="(n,index) in ranksel.ranknav" @click="show(index)" :class="{chose:flag==index}">{{n}}</a>
    </div>
    <ul class="rs_list" v-if="flag==0">
      <li v-for="(m,index) in ranksel.rslist" :key="index">
        <a href="" >
        <img :src="m" alt="">
        </a>
      </li>
    </ul>
    <ul class="rs_list" v-else-if="flag==1">
      <li v-for="(m,index) in ranksel.rslist1" :key="index">
        <a href="" >
          <img :src="m" alt="">
        </a>
      </li>
    </ul>
    <ul class="rs_list" v-if="flag==2">
      <li v-for="(m,index) in ranksel.rslist" :key="index">
        <a href="" >
          <img :src="m" alt="">
        </a>
      </li>
    </ul>
    <ul class="rs_list" v-else-if="flag==3">
      <li v-for="(m,index) in ranksel.rslist1" :key="index">
        <a href="" >
          <img :src="m" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "klRankSelect",
        props:["ranksel"],
      data(){
          return {
            flag:0
          }
      },
      methods:{
          show(t){
            this.flag=t
          }

      }
    }
</script>

<style scoped lang="less">
  .rankSelect{
    width:100%;
    background:#f0f0f0;
    padding-bottom:19/200rem;
    position:relative;

    .tit {
      img {
        width: 100%;
        height: 154/200rem;
      }
    }
    .raknav{
      display: flex;
      height:90/200rem;
      background: #fff;
      a{
        flex:1;
        line-height:90/200rem;
        text-align: center;
        font-size:24/200rem;
        color:#848484;
      }
      .chose{
        color:#000000;
      }
  }
    .rs_list{
      display: flex;
      flex-wrap: wrap;
      padding:11/200rem 20/200rem 11/200rem 30/200rem;
      box-sizing: border-box;
      background: #fff;
      position:absolute;
      top:244/200rem;
      li{
        width:31%;
        margin:5.5/200rem;
        border:1px solid #e1e1e1;

        img{
          width:100%;
          height:165/200rem;
        }
      }
      .aa{
        border-color:red;
      }
    }
  }
</style>
