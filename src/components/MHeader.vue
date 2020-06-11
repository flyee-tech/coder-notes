<template>
  <div style="height: 53px;border-bottom: 1px solid #d3d3d3;">
    <el-button
      style="width: 10%"
      @click="home"
    >
      首页
    </el-button>
    <el-button
      style="width: 10%"
      @click="tag"
    >
      查看标签
    </el-button>
    <el-button
      style="width: 10%"
      @click="newMD"
    >
      新建文章
    </el-button>
    <el-button style="width: 10%">
      新建脑图
    </el-button>
    <el-button
      style="width: 10%"
      @click="goBlog"
    >
      查看博客
    </el-button>
  </div>
</template>

<script>
    export default {
        name: "MHeader",
        data() {
            return {}
        },
        methods: {
            newMD() {
                window.location.href = '/manager/editer'
            },
            home() {
                window.location.href = '/manager/home'

            },
            tag() {
                window.location.href = '/manager/tag'
            },
            goBlog() {
                window.location.href = '/'
            },
        }
    }
</script>

<style scoped>

</style>