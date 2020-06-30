<template>
  <div class="article">
    <div style="margin-top:5px;margin-right:10px;float: right">
      <el-button
        plain
        round
        type="primary"
        icon="el-icon-edit"
        @click="editArticle"
      />
      <el-button
        plain
        round
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
      <a class="m-title">
        {{ to.name }}
      </a>

      <div style="height: 33px;margin-top: 10px;border-bottom:1px solid #d3d3d3;">
        <!--<a class="a-tag"># Java</a>-->

        <a
          class="a-tag"
          v-for="(t, index) in tags"
          :key="index"
          :href="'/manager/tag/'+t.id+'?tname='+t.name"
        >
          # {{ t.name }}
        </a>

        <p style="color: gray;float:right;margin-right: 10px">
          {{ to.createdTime }}
        </p>
      </div>
      <div
        class="md"
        style="margin-top: 10px"
        v-html="compiledMarkdown"
      />
    </div>
  </div>
</template>
<script>
    import marked from 'marked'
    import {getArticleDetail, delArticle} from '@/api/app'

    let rendererMD = new marked.Renderer('');
    marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: (code) => require('highlight.js').highlightAuto(code).value
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
                        this.to = res.article
                        this.to.createdTime = this.to.createdTime.substr(0, 16).replace("T", " ")
                        this.tags = res.tags
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
            goHome() {
                window.location.href = '/manager';
            }
        },
        data() {
            return {
                to: {
                    content: ''
                },
                tags: [],
            }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.to.content, {
                    sanitize: true,
                    highlight: (code) => require('highlight.js').highlightAuto(code).value
                })
            }
        }

    }
</script>

<style scoped lang="scss">
    .article {
        background-color: #FCFDF7;
        width: 50%;
        text-align: left;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .content {
        margin-top: 20px;
        margin-bottom: 50px;
    }

    .m-title {
        font-size: 40px;
    }

    .a-tag {
        margin-left: 10px;
        font-size: 18px;
        /*border-bottom: 2px solid #d3d3d3;*/
    }

    .md /deep/ pre {
        background-color: #f5f2f0;
        /*border-radius: 5px;*/
        padding: 10px;
        overflow: auto;
        border: .3em solid #e0dfcc;
        border-radius: 1em;
        code {
            background-color: rgba(0, 0, 0, 0);
        }
    }

    .md /deep/ code {
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 120%;
        background-color: #ECC9C6;
        border-radius: 5px;
        margin: auto 3px;
    }

    .md /deep/ img {
        max-width: 60%;
        height: auto;
    }

    .md /deep/ table{
        border: 2px solid #d3d3d3;
        tr th {
          border: 2px solid #d3d3d3;
        }
        td {
          border: 2px solid #d3d3d3;
          padding: 5px 1px 5px 10px;
          letter-spacing:1px;
        }
    }

    .md /deep/ table {
        text-align: left;
        border-collapse: collapse;
    }

    .md /deep/ th {
        padding: 5px 10px;
    }

    .md /deep/ blockquote {
        border-left: 5px solid #d3d3d3;
        margin-left: 10px;
        p {
            padding-left: 10px;
            line-height:30px;
            letter-spacing:1px;
        }
    }

    .md /deep/ p {
        white-space: pre-wrap;
        line-height:30px;
        letter-spacing:1px;
    }

</style>