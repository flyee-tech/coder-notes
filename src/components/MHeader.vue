<template>
  <div>
    <el-input style="width: 20%;" />
    <el-button>
      查询
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
            return {

            }
        },
        methods: {
            newMD() {
                window.location.href = '/manager/editer'
            }
        }
    }
</script>

<style scoped>

</style>