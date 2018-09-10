<template>
    <div>
      <div class="wntj">
        <img src="../../assets/imgs/l28.png" />
      </div>


      <div class="list" v-for="li in lista">

        <div class="list1">
          <a class="list1_left">
            <img :src=li.listpic />
          </a>
          <div class="list1_right">
            <a>
              <p>{{li.list1}}</p>
              <p>{{li.list2}}</p>
              <span><i class="iconfont icon-hanguo"></i>{{li.list3}}</span>
              <b>{{li.list4}}</b>
            </a>
          </div>
        </div>
        <div class="list2">
          <p>
            <a href="#">{{li.list5}}</a>
            <a href="#">{{li.list6}}</a>
            <a href="#">{{li.list7}}</a>
          </p>
          <a href="#" class="list2_a">找相似</a>
        </div>
      </div>



    </div>
</template>

<script>
    export default {
        name: "klList",
      props:["lista"]
    }
</script>

<style scoped>
  .wntj img{
    display: block;
    height: 0.6rem;
    width: 100%;
  }

  .list{
    /*height: 2rem;*/
    background: white;
    padding: 0.1rem;
    margin-bottom: 0.1rem;

  }
  .list1{
    width: 100%;
    display:flex;
    /*flex-direction: column;*/
  }
  .list1_left{
    /*width: 40%;*/
    display: block;
    padding: 0.1rem;
  }
  .list1_left img{
    display: block;
    width: 1rem;
    height: 1rem;
  }
  .list1_right{
    /*width: 60%;*/
    font-size: 0.12rem;
    padding: 0.1rem;
  }
  .list1_right a p:nth-child(1){
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .list1_right p:nth-child(2){
    color: #737173;
    font-size: 0.1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 0.18rem;
  }
  .list1_right a span{
    margin-top: 0.05rem;
    display: block;
    text-align: left;
    width: 100%;
    border-top: 0.01rem solid #efebef;
    border-bottom: 0.01rem solid #efebef;
    font-size: 0.12rem;
    line-height: 0.22rem;
  }
  .list1_right a span i{
    font-size: 0.16rem;
  }
  .list1_right a b{
    display: block;
    text-align: left;
    font-size: 0.12rem;
    color: red;
    font-weight: 100;
  }
  .list2{
    display: flex;
    justify-content: space-between;
    margin: 0.1rem 0;
  }
  .list2 a{
    font-size: 0.1rem;
    display: block;
    color: #181c18;
  }
  .list2 p{
    display: flex;

  }
  .list2_a{
    width: 0.5rem;
    border: 0.01rem solid #efebef;
    text-align: center;
    border-radius: 0.1rem;
  }
  .list2 p a{
    width: 0.8rem;
    background: #f7f7f7;
    margin-right: 0.1rem;
    text-align: center;
    border-radius: 0.1rem;

  }
</style>
