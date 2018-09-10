<template>
  <div>
  <div class="cg">
    <img src="../../assets/imgs/l19.png" />
  </div>


  <div class="section">
    <div class="sec">
      <div class="sec1">
        <div class="sec1_left">
          <div class="sec1_left_xsg">
            <p>限时购</p><span>12点场</span>
          </div>



          <div class="sec1_left_jx">
            <span>00</span>
            <span>:</span>
            <span>11</span>
            <span>:</span>
            <span>21</span>

            <img src="../../assets/imgs/l20.png" />
          </div>

          <div class="sec2">
            <a href="#">限时直降</a>

            <p>¥85<span>125</span></p>
          </div>
        </div>


        <div class="sec1_left">
          <div class="sec1_left_xsg">
            <p>每日上新</p>
          </div>



          <div class="sec1_left_jx">

            <p>3000新款发布</p>
            <img src="../../assets/imgs/l22.png" />
          </div>

          <div class="sec2">
            <a href="#">限时直降</a>

            <p>¥85<span>125</span></p>
          </div>
        </div>

      </div>
      <div class="sex">
        <div class="sex1" v-for="se in six">
          <p>{{se.bigsex}}</p>
          <span>{{se.littlesex}}</span>
          <img :src=se.picsex />
        </div>

      </div>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "klSection",
      props:["six"]
    }
</script>

<style scoped>
  .cg{
    height: 0.4rem;
  }
  .cg img{
    display: block;
    height: 0.4rem;
    width: 100%;
  }


  .section{
    background: white;
    padding: 0.1rem;
  }
  .sec{

    border: 0.01rem solid #efebef;
  }
  .sec1{

    display: flex;
    border-bottom: 0.01rem solid #efebef;
  }
  .sec1_left{
    padding: 0.1rem;
    width:50%;
    /*height: 2rem;*/
    border-left: 0.01rem solid #efebef;
  }
  .sec1_left_xsg{
    font-size: 0.14rem;
  }
  .sec1_left_xsg p{
    font-size: 0.18rem;
    display: inline-block;
    font-weight: 600;
    margin-right: 0.1rem;
  }
  .sec1_left_jx{
    height: 1.1rem;
  }
  .sec1_left_jx span{
    text-align: center;
    margin-top: 0.1rem;
    font-size: 0.12rem;
    display: block;
    float: left;
  }
  .sec1_left_jx span:nth-child(2n+1){
    width: 0.20rem;
    height: 0.20rem;
    color: red;
    background: black;
    border-radius: 50%;
    line-height: 0.2rem;
    color: #ffffff;
  }
  .sec1_left_jx span:nth-child(2n){
    width: 0.12rem;
  }
  .sec1_left_jx p{
    display: block;
    font-size:0.12rem;
    float: left;
    margin-top: 0.1rem;
  }
  .sec1_left_jx img{
    width: 0.7rem;
    /*height: 0.8rem;*/
    float: right;
    margin-top: 0.1rem;
  }
  .sec2{
    display: flex;
    font-size: 0.12rem;
    justify-content: space-between;
  }
  .sec2 a{
    display: block;
    width: 0.6rem;
    line-height: 0.24rem;
    background: #ff0000;
    text-align: center;
    border-radius: 0.2rem;
    color: #FFFFFF;
  }
  .sec2 p{
    font-size: 0.14rem;
    color: #e71431;
  }
  .sec2 p span{
    font-size: 0.12rem;
    color: #adaead;
    text-decoration: line-through;
    margin-left: 0.05rem;
    height: 0.3rem;
  }

  .sex{

    display: flex;
    flex-wrap: wrap;
  }
  .sex1{
    width: 33%;
    font-size: 0.12rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0.1rem 0;
    border-bottom: 0.01rem solid #efebef;
    border-right: 0.01rem solid #efebef;

  }
  .sex .sex1:nth-child(3){
    border-right: none;
  }
  .sex .sex1:nth-child(6){
    border-right: none;
  }
  .sex1 img{
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
    margin-bottom: 0.2rem;
  }
  .sex1 p{
    font-size: 0.16rem;
    font-weight: 600;
  }
  .sex1 span{
    line-height: 0.28rem;
  }

</style>
