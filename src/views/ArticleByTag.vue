<template>
  <div class="home">
    <div class="content">
      <a style="margin-left: 20px;font-size: 40px;border-bottom:2px solid #d3d3d3"> # {{ tagName }} 👇👇👇 </a>
      <Item
        v-for="i in list"
        :key="i.id"
        :a-id="i.id"
        :title="i.name"
        :content="i.content"
      />
      <el-pagination
        v-if="count > 10"
        style="margin-top: 66px"
        :page-size="10"
        :pager-count="11"
        layout="prev, pager, next"
        :total="count"
        :current-page.sync="pn"
        @current-change="handleCurrentChange"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
    import Item from "../components/item";
    import Footer from "../components/Footer";
    import {getArticleListByTag} from '@/api/app'

    export default {
        name: "ArticleByTag",
        components: {
            Footer, Item
        },
        data() {
            return {
                tagName: this.$route.query.tname,
                count: 1,
                pn: 1,
                list: []
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                getArticleListByTag({"pn": this.pn,"tid": this.$route.params.tid, idx: 1}).then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        this.list = res.list;
                        this.count = res.count;
                    }
                }).catch(res => {
                    console.log("请求失败");
                    console.log(res);
                })
            },
            handleCurrentChange(v) {
                this.pn = v;
                this.getData();
            },
        },
    };
</script>

<style>
    .home {
        background-color: #FCFDF7;
        width: 66%;
        text-align: left;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .content {
        min-height: calc(100vh - 60px - 44px);
    }

    .el-pager li.number {
        background-color: #FCFDF7;
    }

    .el-pager li.el-icon {
        background-color: #FCFDF7;
    }

    .el-pager li.active {
        background-color: #FCFDF7;
    }

    .el-pagination button.btn-prev {
        background-color: #FCFDF7 !important;
    }

    .el-pagination button.btn-next {
        background-color: #FCFDF7 !important;
    }
</style>