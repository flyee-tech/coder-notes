<template>
  <div class="article">
    <div style="margin-top:5px;margin-right:120px;float: right">
      <el-button
        plain="true"
        round="true"
        type="primary"
        icon="el-icon-edit"
        @click="editArticle"
      />
      <el-button
        plain="true"
        round="true"
        style="margin-left: 10px"
        type="danger"
        icon="el-icon-delete"
        @click="deleteArticle"
      />
    </div>
    <div
      class="
        content"
    >
      <a class="title">
        {{ title }}
      </a>
      <div v-html="compiledMarkdown" />
    </div>
  </div>
</template>
<script>
    import marked from 'marked'
    import {getArticleDetail, delArticle} from '@/api/app'

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
        components: {},
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
            },
            editArticle() {
                window.location.href = '/manager/editer/' + this.$route.params.id
            },
            deleteArticle() {
                delArticle({"id": this.$route.params.id}).then(res => {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    setTimeout(this.goHome, 1000);
                }).catch(res => {
                    console.log("请求失败");
                    console.log(res);
                })
            },
            goHome(){
                window.location.href = '/manager';
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