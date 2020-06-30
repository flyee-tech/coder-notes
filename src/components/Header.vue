<template>
  <div class="header">
    <a
      class="a"
      href="/"
    >Peiel's Blog</a>

    <div class="menu">
      <a
        class="a"
        href="/"
      >
        首页
      </a>
      <a
        class="a"
        href="/tag"
      >
        标签
      </a>
      <a
        class="a"
        href="/about"
      >
        关于
      </a>
      <a
        class="a"
        @click="go_github"
        style="cursor:pointer"
      >
        <u>开源</u>
      </a>
      <!--<a-->
      <!--class="a"-->
      <!--href="/manager"-->
      <!--&gt;-->
      <!--M-->
      <!--</a>-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "ArticleHeader",
        data() {
            return {}
        },
        methods: {
            go_github() {
                // window.location.href = 'https://github.com/peiel/coder-notes' //当前窗口跳转
                window.open('https://github.com/peiel/coder-notes', '_blank') // 新窗口打开外链接
            },
        }
    }

</script>

<style scoped>
  .header {
    text-align: left;
    height: 30px;
    width: 100%;
    /*background-color: #24292e;*/
    border-bottom: 1px solid #d3d3d3;
    background-color: #FCFDF7;
  }

  .a {
    font-size: 20px;
    margin-left: 20px;
  }

  .menu {
    float: right;
    margin-right: 20px;
  }


</style>
