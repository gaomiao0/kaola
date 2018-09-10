<template>
<div>
  <div class="secbox" >
    <div class="sec"v-for="sss in lise">
      <img :src=sss.lisec1  />
      <p class="sec_p1">{{sss.lisec2}}</p>
      <p class="sec_p2">{{sss.lisec3}}</p>
      <p class="sec_p3"><span>{{sss.li1}}</span><span>{{sss.li2}}</span><span>{{sss.li3}}</span><b>{{sss.li4}}</b></p>
      <p class="sec_p4"><span>{{sss.lisec4}}</span><b>{{sss.lisec5}}</b>{{sss.lisec6}}</p>
    </div>

  </div>
</div>
</template>

<script>
    export default {
        name: "klListSec",
      props:["lise"]
    }
</script>

<style scoped>
.secbox{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.1rem;
}
  .sec{
    margin-bottom: 0.1rem;
    width: 49%;
    /*height: 3rem;*/
    background: white;

  }
  .sec img{
    width: 100%;
    height: 1.7rem;
    border-bottom: 0.01rem solid #f7f3f7;
  }
  .sec p{
    padding: 0.02rem 0.05rem;
    font-size: 0.14rem;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    text-align: left;
  }
  .sec .sec_p2{
    font-size: 0.14rem;

    color: #9c9e9c;
  }
  .sec .sec_p3{
    font-size: 0.12rem;
  }
.sec .sec_p3 span{
  font-size: 0.12rem;
  display: inline-block;
  border: 0.01rem solid red;
  margin-right: 0.05rem;
  border-radius: 0.1rem;
  color: red;
}
.sec .sec_p3 b{
  color: #9c9e9c;
}
.sec .sec_p4{
  color: #9c9e9c;
}
  .sec .sec_p4 span{
    font-size: 0.14rem;
    color: red;
  }
.sec .sec_p4 b{
  color: red;
  border-radius: 0.05rem;
  font-style: 0.12rem;
  display: inline-block;
  border: 0.01rem solid red;
  font-weight: 100;
  margin: 0.05rem;
}
</style>
