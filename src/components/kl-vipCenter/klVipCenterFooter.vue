<template>
    
    <footer>
        <a href="" class="check"><img src="../../assets/imgs/m-v-16.png" alt=""/><span>Home</span></a>
        <a href=""><img src="../../assets/imgs/m-v-17.png" alt=""/><span>日本时尚</span></a>
        <a href=""><img src="../../assets/imgs/m-v-18.png" alt=""/><span>国家地区馆</span></a>
      </footer>


</template>


<script type="text/ecmascript-6">
    export default {
            
        }
</script>

<style scoped>
    /*foot*/
    footer{
        width: 100%;
        height: 0.54rem;
        display: -webkit-flex;
        background: white;
        align-items:center;
        box-sizing: border-box;
    }
    footer a{
        flex: 1;
        color: #808080;
        height: 100%;
        font-size: 0.1rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .check{
        color: #fff;
        background: #c3a871;
    }
    footer img{
        width: 0.28rem;
        height: 0.23rem;
        margin:0 auto;
    }
    footer span{
        display: block;
    }

</style>
