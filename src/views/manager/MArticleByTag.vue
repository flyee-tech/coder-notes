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
        style="margin-top: 66px"
        :page-size="10"
        :pager-count="11"
        layout="prev, pager, next"
        :total="count"
        :current-page.sync="pn"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
    import Item from "../../components/item";
    import {getPublicArticleListByTag} from '@/api/app'

    export default {
        name: "MArticleByTag",
        components: {
            Item
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
                getPublicArticleListByTag({"pn": this.pn, "tid": this.$route.params.tid}).then(res => {
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
        background-color: beige;
        width: 66%;
        text-align: left;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .el-pager li.number {
        background-color: beige;
    }

    .el-pager li.el-icon {
        background-color: beige;
    }

    .el-pager li.active {
        background-color: beige;
    }

    .el-pagination button.btn-prev {
        background-color: beige !important;
    }

    .el-pagination button.btn-next {
        background-color: beige !important;
    }
</style>