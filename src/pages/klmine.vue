<template>
  <div>
    <p class="another_p">
      <img src="../assets/imgs/d-17.jpg" >
      <a class="icon" href="javascript:;">
        <i class="iconfont icon-shezhi1"></i>
        <router-link to="/klMsn" class="iconfont icon-xinxi1"></router-link>
      </a>
    </p>
    <div class="header">
      <p class="header_p">
        <i class="iconfont icon-shezhi1"></i>
        <i class="iconfont icon-xinxi1"></i>
      </p>
      <a class="portrait" href="javascript:;">
        <img src="../assets/imgs/d-17.jpg" >
        <span>vella^</span>
      </a>
      <div class="pug_list">
        <p class="pug_list_p" href="javascript:;" v-for="q in mineInfo.typelist" :key="q.id">
          <a class="pug_list_a" href="javascript:;">
            <span class="number">{{q.num}}</span>
            <span>{{q.type}}</span>
          </a>
          <span>|</span>
        </p>
      </div>
    </div>
    <div class="kl_vip">
      <p class="member">
        <span class="member_txt">
          <i class="iconfont icon-v6"></i>
          <u>考拉会员</u>
        </span>
        <span class="member_new">
          <u>会员权益上新啦</u>
          <u class="open">开通会员 ></u>
        </span>
      </p>
      <p class="vip_kl">网易考拉海购</p>
    </div >
    <my-older :deliver="mineInfo"></my-older>
    <common-footer class="foot"></common-footer>
  </div>
</template>

<script>
    import MyOlder from "../components/klmine/myOlder";
    import {shopCartsServices} from "../api/shopCartsServices";
    import CommonFooter from "../components/commonComponents/CommonFooter";
    import $ from 'jquery'
    export default {
      name: "klmine",
      components:{MyOlder,CommonFooter},
      data(){
        return {
          /**
           * 购物车数据
           */
          mineInfo:[],
          totalMany:0
        }
      },
      methods:{
        foucs(){
          shopCartsServices.getCartsInfoByUesrId((data)=>{
            this.mineInfo = data;
            // console.log(data.typelist)
          })
        },
        shake(){
          let box_top = 160;
          $(".kl_vip").css({'top': box_top});
          setInterval(function () {
            for(let i=1; 4>=i; i++){
              $(".kl_vip").animate({top:box_top-(12-3*i)},60);
              $(".kl_vip").animate({top:box_top+(12-3*i)},60);
            }
          },10000)
        },
        slider() {
          window.onscroll = function () {
            let posY = document.documentElement.scrollTop || document.body.scrollTop;
            if (posY > 170) {
              $('.another_p').css({"top":"0px"}).fadeIn(100);
            } else {
              $('.another_p').fadeOut(100);
            }
          }
        }
      },
      created(){
        this.foucs();
      },
      mounted(){
        this.shake();
        this.slider();
      }
    }
</script>

<style scoped>
  /*header部分开始*/
  .header{
    color: #fff;
    height: 3rem;
    background:url("../assets/imgs/d-15.jpg") no-repeat top center;
    background-size: cover;
    padding: 0 0.12rem;
    position: fixed;
    top:0;
    left: 0;
    width: 3.51rem;
  }
  .header_p{
    line-height: 0.38rem;
    display: -webkit-flex;
    justify-content: flex-end;
  }
  .another_p{
    position: fixed;
    top:-0.4rem;
    left: 0;
    width: 3.51rem;
    padding: 0 0.12rem;
    display: -webkit-flex;
    justify-content: space-between;
    line-height: 0.38rem;
    align-items: center;
    background: url("../assets/imgs/d-15.jpg") no-repeat top center;
    background-size: cover;
    z-index: 999;
  }
  .another_p img{
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
  }
  .icon{
    display: -webkit-flex;
    color: #fff;
  }
  .header i{
    padding-left: 0.3rem;
    font-size: 0.2rem;
  }
  .icon i{
    padding-left: 0.3rem;
    font-size: 0.2rem;
  }
  .portrait{
    display: -webkit-flex;
    align-items: center;
    margin-bottom: 0.08rem;
  }
  .portrait img{
    width: 0.5rem;
    height: 0.5rem;
    border-radius:50%;
  }
  .portrait span{
    font-size: 0.14rem;
    font-weight: 600;
    color: #fff;
    padding-left: 0.08rem;
  }
  .pug_list{
    display: -webkit-flex;
    font-size: 0.12rem;
    color: #fff;
    align-items: center;
    justify-content: space-between;
    margin: 0.14rem 0;
  }
  .pug_list_p{
    display: -webkit-flex;
    align-items: center;
    color: #fe848d;
  }
  .pug_list_a{
    color: #fff;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.22rem;
  }
  .number{
    font-size: 0.16rem;
  }
  .kl_vip{
    width: 3.18rem;
    height: 1.5rem;
    background: -webkit-linear-gradient(left, #2c2c2c , #1b1b1a);
    border-radius:0.1rem;
    position: fixed;
    left: 0.14rem;
    padding: 0.14rem;
  }
  .vip_kl{
    font-size: 0.16rem;
    padding-top: 0.14rem;
    color: #f9e5a8;
  }
  .member{
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .member_txt{
    font-size: 0.14rem;
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(255, 249, 220, 1)), to(rgba(249, 210, 117, 1)));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    align-items: center;
  }
  .member_new{
    color: #edc88f;
    font-size: 0.12rem;
  }
  .open{
    background-color: #f9e5a8;
    border:1px solid #fffec6;
    padding: 0 0.04rem 0 0.06rem;
    border-radius: 0.08rem;
    color: #352d24;
    margin-left: 0.05rem;
  }
  .foot{
    position: fixed;
    bottom: 0;
  }

  /*section部分开始*/

</style>
