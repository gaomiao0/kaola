<template>
  <div class="lists">
    <sort-content-each-list class="list" v-for="(n,index) in conlist" :eachlist="n" :key="index"></sort-content-each-list>
  </div>
</template>

<script>
    import SortContentEachList from "./SortContentEachList";
    export default {
        name: "SortContentLists",
        components: {SortContentEachList},
        props:["conlist"]
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
