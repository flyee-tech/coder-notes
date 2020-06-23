<template>
  <div class="article">
    <div class="content">
      <a class="a-title">
        {{ to.name }}
      </a>
      <div style="height: 33px;margin-top: 10px;border-bottom:1px solid #d3d3d3;">
        <a
          class="a-tag"
          v-for="(t, index) in tags"
          :key="index"
          :href="'/tag/'+t.id+'?tname='+t.name"
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
    <Footer />
  </div>
</template>
<script>
    import marked from 'marked'
    import {getArticleDetail} from '@/api/app'
    import Footer from "../components/Footer";

    let rendererMD = new marked.Renderer();
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
        components: {
            Footer
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
                        this.to = res.article;
                        this.to.createdTime = this.to.createdTime.substr(0, 16).replace("T", " ")
                        this.tags = res.tags
                    }
                }).catch(res => {
                    console.log("请求失败");
                    console.log(res);
                })
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
                return marked(this.to.content, {sanitize: true})
            }
        }

    }
</script>

<style scoped lang="scss">
    .article {
        background-color: #FCFDF7;
        width: 66%;
        text-align: left;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .content {
        min-height: calc(100vh - 60px - 66px);
        margin-top: 20px;
    }

    .a-title {
        /*border-bottom: 1px solid #d3d3d3;*/
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
      background-color: #f5f2f0;
      border-radius: 5px;
      margin: auto 3px;
    }

    .md /deep/ img {
        max-width: 60%;
        height: auto;
    }

    .md /deep/ table, table tr th, table tr td {
        border: 1px solid #d3d3d3;
    }

    .md /deep/ table {
        text-align: center;
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
        }
    }

    .md /deep/ p {
      white-space: pre-wrap;
    }

</style>