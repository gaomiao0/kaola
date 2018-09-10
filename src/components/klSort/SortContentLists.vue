<template>
  <div class="lists">
<<<<<<< HEAD
    <sort-content-each-list class="list" v-for="(n,index) in conlist" :eachlist="n" :key="index"></sort-content-each-list>
=======
    <sort-content-each-list class="list"></sort-content-each-list>
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
  </div>
</template>

<script>
    import SortContentEachList from "./SortContentEachList";
    export default {
        name: "SortContentLists",
<<<<<<< HEAD
        components: {SortContentEachList},
        props:["conlist"]
=======
      components: {SortContentEachList}
>>>>>>> 60f2dd063ec6de625f49ecad6cae1fe6dbaa5e5f
    }
</script>

<style scoped lang="less">
.lists{
  flex: 1;
  .list{
    overflow-y: scroll;
  }
}
</style>
