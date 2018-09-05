<template>
  <div class="content">
    <div class="con">
        <sort-content-nav></sort-content-nav>
      <sort-content-lists></sort-content-lists>

    </div>
  </div>
</template>

<script>
    import SortContentNav from "./SortContentNav";
    import SortContentLists from "./SortContentLists";
    export default {
        name: "SortContent",
      components: {SortContentLists, SortContentNav}
    }
</script>

<style scoped>
.content{
  flex: 1;
  margin-top:0.54rem;
  width:100%;

}
  .con{
    display: flex;
  }
</style>
