<template>
    <div class="newsinfo-container">
        <h3 class="title">{{ newslist.title}}</h3>
        <p class="subtitle">
        <span>发表时间：{{ newslist.time }}</span>
        <span>点击数：{{ newslist.click }}</span>
        </p>
        
        <hr>

        <div class="content" v-html="newslist.summary"></div>

        <comment-box></comment-box>
    </div>
</template>

<script>
//导入评论子组件
import comment from '../subconponets/comment.vue'

export default{
    data(){
        return {
            id : this.$route.params.id,  //将URL中传递过来的id值，挂载到data里
            newslist : {"id":1,"title":"用Excel/WPS做企业管理系统，ERP/OA/CRM/SCM/PDM/报表/文档系统等！ ","summary":"在模板上定义表间公式，使得不同模板的数据自动互相引用、彼此同步，形成一个有机整体.合同、CAD图纸、档案...，各类文档集中统一存储、访问权限、版本控制、建立文档与数据的关联","click":1,"time":"20190902 010203"}
                            
        }
    },
    components:{//注册子组件
    'comment-box':comment
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