<template>
    <div>
     <!--轮播图><--> 
        <div>
            <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="item in lunbotuList" :key=item.url>
                        <img :src=item.url alt="">
                    </mt-swipe-item>
\
                    </mt-swipe>

        </div>

<!--六宫格><-->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu2.png">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/menu5.png">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png">
		                    <div class="mui-media-body">联系我们</div></a></li>

		        </ul> 
		</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            lunbotuList:[]
        };
    },
    created(){
        this.getLunbotu();
    },
    methods: {
        getLunbotu(){
            this.lunbotuList = [
                {src:"./src/images/1.jpg",url:"./src/images/1.jpg"},
                {src:".../images/2.jpg",url:"./src/images/2.jpg"}
                ];
            }
        }
    }


</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
}

.mint-swipe-item {
    background-color: red;
}

img{
    width: 100%;
    height: 100%;
}

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    img{
        width: 60px;
        height: 60px;
    }

    .mui-media-body{
        font-size: 13px;
    }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
}
</style>