<template>
  <div class="header">
    <a
      class="a"
      href="/"
    >Peiel's Blog</a>
  </div>
</template>

<script>
    export default {
        name: "ArticleHeader",
        data() {
            return {}
        },
        methods: {}
    }

</script>

<style scoped>
    .header {
        text-align: left;
        height: 30px;
        width: 66%;
        margin-left: 17%;
        /*background-color: #24292e;*/
        border-bottom: 1px solid #d3d3d3;
        background-color: beige;
    }

    .a {
        font-size: 20px;
    }


</style>
