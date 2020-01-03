<template>
    <div>
      
        <div>
            <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="item in lunbotuList" :key=item.url>
                        <img :src=item.url alt="">
                    </mt-swipe-item>
\
                    </mt-swipe>
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
</style>