<template>
<div>
  <div class="jxhd">
    <img src="../../assets/imgs/l25.png" />
  </div>


  <div class="art" v-for="ar in artic">
    <img :src=ar.artlb />
    <div class="art_ul">
      <ul>
        <li class="art_ul_li" v-for="a in ar.arthd">
          <a href="#">
            <img :src=a.art1 />
            <p>{{a.art2}}</p>
            <span>{{a.art3}}</span>
          </a>
        </li>

      </ul>
    </div>
  </div>


</div>
</template>

<script>
    export default {
        name: "klArt",
      props:["artic"]
    }
</script>

<style scoped>
  .jxhd img{
    display: block;
    height: 0.7rem;
    width: 100%;
  }


  .art{
    /*height: 3rem;*/
    background: white;
    margin-bottom: -0.1rem;
  }
  .art img{
    display: block;
    height: 2rem;
    width: 100%;
  }
  .art_ul{

    /*height: 1rem;*/

    position: relative;
    top: -0.3rem;
    overflow-x: scroll;

  }
  .art_ul ul{
    display: flex;
    border:  0.01rem solid #efebef;
    margin-left: 0.1rem;
    flex-wrap: nowrap;
    overflow: visible;
    width: 5.8rem;
  }
  .art_ul_li{
    /*width: 22%;*/
    background: white;
    text-align: center;
    border-right:  0.01rem solid #efebef;
  }
  .art_ul_li a{
    font-size: 0.12rem;
  }
  .art_ul_li a img{
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 auto;
  }
  .art_ul_li a p{
    display: block;
    color: #313031;
  }
  .art_ul_li a span{
    display: block;
    color: #7b797b;
    margin-bottom: 0.1rem;
  }

</style>
