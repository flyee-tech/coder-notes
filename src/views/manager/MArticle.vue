<template>
  <div class="article">
    <div class="content">
      <a class="title">
        {{ title }}
      </a>
      <div v-html="compiledMarkdown" />
    </div>
  </div>
</template>
<script>
    import marked from 'marked'
    import {getArticleDetail} from '@/api/app'

    let rendererMD = new marked.Renderer();
    marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    })
    export default {
        components: {
        },
        mounted() {
            console.log(this.$route.params.id);
            this.getData();
        },
        methods: {
            getData() {
                getArticleDetail({id: this.$route.params.id}).then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        this.input = res.article.content;
                        this.title = res.article.name;
                    }
                }).catch(res => {
                    console.log("请求失败");
                    console.log(res);
                })
            }
        },
        data() {
            return {
                input: '',
                title: 'aaaa'
            }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.input, {sanitize: true})
            }
        }

    }
</script>

<style>
    .article {
        background-color: beige;
        width: 66%;
        text-align: left;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .content {
        margin-top: 20px;
    }

    .title {
        border-bottom: 1px solid #d3d3d3;
        font-size: 40px;
    }
</style>