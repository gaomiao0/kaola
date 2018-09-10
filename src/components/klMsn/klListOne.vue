<template>
  <div>
  <div class="list" v-for="n in msnn">
    <div class="list_i">
     <img :src=n.msnpic />
    </div>
    <div class="list_p">
      <span>{{n.msnname}}</span>
      <p>{{n.msnxx}}</p>
    </div>
  </div>

  </div>
</template>

<script>
    export default {
        name: "klListOne",
      props:["msnn"]
    }
</script>

<style scoped>
  .list{
    height: 0.7rem;
    display: flex;
    align-items: center;
    border-bottom: 0.01rem solid #f0f0f0;
  }
  .list_i img{
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
  }
  .list_p{
    width: 80%;
    font-size: 0.14rem;
    text-align: left;
    margin-left: 0.1rem;
  }
  .list_p span{
    font-size: 0.16rem;

  }
  .list_p p{
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #999999;


  }
</style>
