<template>
  <div style="height: 53px;border-bottom: 1px solid #d3d3d3;">
    <el-button
      style="width: 10%"
      @click="query"
    >
      首页
    </el-button>
    <el-button style="width: 10%">
      标签
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
            query() {
                window.location.href = '/manager/home'

            },
        }
    }
</script>

<style scoped>

</style>