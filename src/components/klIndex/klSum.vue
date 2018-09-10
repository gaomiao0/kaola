<template>
    <div>
      <div class="sum" v-for="s in su">
        <div class="sum1">
          <a href="#"><img :src=s.sumtx /></a>
          <div class="sum1_div">
            <p>{{s.sumbt}}</p>
            <p><span>{{s.sumname}}</span>{{s.sumtj}}</p>
          </div>
        </div>

        <div class="sum2">
          <ul>
            <li class="sum2_li" v-for="ss in s.suma">
              <img :src="ss.sum1" />
              <p>{{ss.sum2}}</p>
              <span>{{ss.sum3}}</span>
              <b>{{ss.sum4}}</b>
            </li>

          </ul>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "klSum",
      props:["su"]
    }
</script>

<style scoped>
  .sum{
    /*height: 2rem;*/
    background: white;
    margin-bottom: 0.1rem;
  }
  .sum1{
    /*height: 0.6rem;
      background: red;*/
    display: flex;
    align-items: center;
  }
  .sum1 img{
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    margin:0.1rem;
  }
  .sum1_div p:nth-child(1){
    font-size: 0.14rem;
  }
  .sum1_div p:nth-child(2){
    font-size: 0.12rem;
    color: #9c9a9c;
  }
  .sum1_div p:nth-child(2) span{
    margin-right: 0.05rem;
  }
  .sum2{
    /*height: 1.3rem;*/
    /*background: skyblue;*/
    overflow-y: scroll;
  }
  .sum2 ul{
    width: 5rem;
    /*height: 0.8rem;*/
    /*background: palegreen;*/
    display: flex;
  }
  .sum2_li{
    width: 0.8rem;
    /*width: 25%;*/
    font-size: 0.12rem;
    /*text-align: center;*/
    margin:0 0.1rem;

  }
  .sum2_li p{
    width: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
  }
  .sum2_li img{
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
  }
  .sum2_li span{
    display: block;
    width: 0.3rem;
    border: 0.01rem solid #FF0000;
    text-align: center;
    border-radius: 0.1rem;
    color: #FF0000;
    margin: 0.05rem 0;
  }
  .sum2_li b{
    display: block;
    text-align: left;
    color: #ff0000;
    margin-bottom: 0.1rem;
  }
</style>
