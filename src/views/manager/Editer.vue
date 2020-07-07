<template>
  <div id="editer">
    标题：<el-input
      style="width: 40%;"
      v-model="to.name"
    />
    标签：<el-input
      style="width: 40%;"
      v-model="tags"
    />
    <a
      style="margin-left: 10px"
      :href="'/manager/article/'+this.$route.params.id"
    >预 览</a>
    <div
      style="margin-top: 5px"
      id="vditor"
    />
    <div style="text-align: right">
      <el-checkbox
        v-model="blog_checked"
      >
        博客文章
      </el-checkbox>
      <el-checkbox
        style="margin-right: 30px;"
        v-model="checked"
      >
        公开
      </el-checkbox>
      <el-button
        style="width: 20%;margin-top: 10px;"
        @click="saveMarkdownText()"
      >
        保 存
      </el-button>
    </div>
  </div>
</template>

<script>

    import Vditor from "vditor";
    import {getArticleDetail, saveArticle} from '@/api/app'

    export default {
        name: "Editer",
        components: {},
        data() {
            return {
                editor: null,
                to: {},
                checked: false,
                blog_checked: false,
                tags: '',
                curHeight: 550,
            };
        },
        methods: {
            initEditor() {
                window.vditor = new Vditor("vditor", {
                    debugger: false,
                    typewriterMode: false,
                    placeholder: "placeholder",
                    counter: 100,
                    height: this.curHeight,
                    cache: {
                        enable: false
                    },
                    upload:{
                        url: '',
                    },
                    outline: true,
                });
            },
            saveMarkdownText() {
                this.editor = window?.vditor;
                console.log(this.editor.getValue());

                let params = {
                    "id": this.to.id,
                    "name": this.to.name,
                    "content": encodeURIComponent(this.editor.getValue()),
                    "isPublic": this.checked ? 1 : 0,
                    "type": this.blog_checked ? 1 : 2,
                    "tags": this.tags
                }

                saveArticle(params).then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        });
                        setTimeout(this.reloadData(res.id), 1000);
                    }
                }).catch(res => {
                    this.$message.error('请求失败');
                    console.log("请求失败");
                    console.log(res);
                });
            },
            getData() {
                let id = this.$route.params.id;
                if (id !== undefined) {
                    getArticleDetail({id: id}).then(res => {
                        console.log(res)
                        if (res.code === 200) {
                            this.to = res.article;
                            if (res.tags !== undefined) {
                                this.tags = this.decoderTags(res.tags);
                            }
                            this.checked = this.to.isPublic === 1;
                            this.blog_checked = this.to.type === 1;
                            setTimeout(this.setData, 500);
                        }
                    }).catch(res => {
                        this.$message.error('请求失败');
                        console.log("请求失败");
                        console.log(res);
                    });
                }
            },
            setData() {
                this.editor = window?.vditor;
                this.editor.setValue(this.to.content);
            },
            reloadData(id) {
                window.location.href = '/manager/editer/' + id
            },
            decoderTags(tags) {
                let ts = ''
                tags.forEach(function (t) {
                    ts += '#' + t.name + ' '
                })
                return ts;
            },
            //获取屏幕高度
            beforeMount(height) {
                let h = document.documentElement.clientHeight || document.body.clientHeight;
                console.log(this.curHeight)
                this.curHeight =h - height; //减去页面上固定高度height
                console.log(this.curHeight)
            },
        },
        mounted() {
            this.beforeMount(200);
            this.initEditor();
            this.getData();

            window.onbeforeunload = function(e) {
                e = e || window.event;
                // 兼容IE8和Firefox 4之前的版本
                if (e) {
                    e.returnValue = "您是否确认离开此页面?";
                }
                // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
                return "您是否确认离开此页面?";
            };

        }
    };
</script>

<style scoped>
    #editer {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin-top: 20px;
    }
</style>