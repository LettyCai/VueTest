<template>
    <div class="newsinfo-container">
        <h3 class="title">{{ newslist.title}}</h3>
        <p class="subtitle">
        <span>发表时间：{{ newslist.time }}</span>
        <span>点击数：{{ newslist.click }}</span>
        </p>
        
        <hr>

        <div class="content" v-html="newslist.summary"></div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            id : this.$route.params.id,  //将URL中传递过来的id值，挂载到data里
            newslist : {"id":1,"title":"abc","summary":"aaaaaa","click":1,"time":"20190902 010203"}
                            
        }
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding:0 4px;

    .title{
        font-size: 16px;
        text-align:center;
        margin:15px 0;
        color:red;
    }
    
    .subtitle{
        font-size:13px;
        color:#226aff;
        display: flex;
        justify-content: space-between;
    }

    .content{

    }
}
</style>