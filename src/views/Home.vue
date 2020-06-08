<template>
  <div class="home">
    <div class="content">
      <Item
        v-for="i in list"
        :key="i.id"
        :a-id="i.id"
        :title="i.title"
        :content="i.content"
      />


      <el-pagination
        style="margin-top: 66px"
        :page-size="10"
        :pager-count="11"
        layout="prev, pager, next"
        :total="2000"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
    import Item from "../components/item";
    import Footer from "../components/Footer";

    export default {
        name: "Home",
        components: {
            Footer, Item
        },
        data() {
            return {
                list: [
                    {
                        id: 1,
                        title: '文章标题1',
                        content: '文章内容简介1'
                    },
                    {
                        id: 2,
                        title: '文章标题1',
                        content: '文章内容简介1'
                    },
                    {
                        id: 3,
                        title: '文章标题1',
                        content: '文章内容简介1'
                    },
                    {
                        id: 4,
                        title: '文章标题1',
                        content: '文章内容简介1'
                    },
                    {
                        id: 5,
                        title: '文章标题1',
                        content: '文章内容简介1'
                    },
                    {
                        id: 6,
                        title: '文章标题1',
                        content: '文章内容简介1'
                    },
                    {
                        id: 7,
                        title: '文章标题1',
                        content: '文章内容简介1'
                    },
                    {
                        id: 8,
                        title: '文章标题1',
                        content: '文章内容简介1'
                    },
                ]
            }
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

    .content {
        min-height: calc(100vh - 60px - 88px);
    }

    .btn-prev {
        background-color: red;
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