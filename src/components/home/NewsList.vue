<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo'+item.id" class="">
						<img class="mui-media-object mui-pull-left" :src="item.url">
                       <!-- "../../images/abc.jpg"> -->
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class="mui-ellipsis">
                                <span>{{ item.time | dateFormat() }}</span>
                                 <span>{{ item.click }}</span>
                            </p>
						</div>
					</router-link>
				</li>
				

			</ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    data(){
        return {
            newslist : []
        };
    },

    created() {
        this.newslist = [{"id":1,"title":"abc","summary":"aaaaaa","click":1,"time":"20190902 010203"},
                            {"id":2,"title":"ccc","summary":"cccc","click":2,"time":"20190902 010203"}
                            ];
        this.getNewsList();
    },

    methods:{
        getNewsList(){
            this.$http.get('http://127.0.0.1:8000/getnewslist/').then(result => {
                this.newslist = result.body.message;

                console.log(this.data);
            })
        }
      
    }

}

</script>

<style  scoped>
.mui-media-body h1{
    font-size: 14px;
    }

.mui-ellipsis{
    font-size: 12px;
    color:#226aff;
    display:flex;
    justify-content: space-between;
}


</style>