<template>
    <div class="cmt-container"> 
        <h2 class="title">发表评论</h2>
        <hr>
        <textarea placeholder="请输入评论的内容" maxlength=120></textarea>
        
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                        第1楼 用户：匿名用户  发表时间：
                </div>
                <div class="cmt-content">
                    内容内容
                </div>
            </div>

             <div class="cmt-item">
                <div class="cmt-title">
                        第1楼 用户：匿名用户  发表时间：
                </div>
                <div class="cmt-content">
                    内容内容
                </div>
            </div>

             <div class="cmt-item">
                <div class="cmt-title">
                        第1楼 用户：匿名用户  发表时间：
                </div>
                <div class="cmt-content">
                    内容内容
                </div>
            </div>
            
        </div>
     

        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
 
</template>

<script>

</script>

<style lang="scss" >
.cmt-container{
    padding: 10px 0;
    h2{
        font-size:18px;
    }
    textarea{
        font-size: 12px;
        height: 85px;
        margin: 0;
    }

}
.cmt-list{
    margin: 10px 0;

    .cmt-item{
        font-size:13px;

        .cmt-title{
            background-color:#ccc;
            line-height: 30px;
        }

        .cmt-content{
            line-height: 35px;
            text-indent: 2em;
        }
}
}







</style>