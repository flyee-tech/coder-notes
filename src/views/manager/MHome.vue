<template>
  <div class="mhome">
    <div
      style="width: 100%; margin-top: 22px"
    >
      <el-input
        style="width: 30%"
      />
      <el-button
        icon="el-icon-search"
        style="margin-left: 2px"
      >
      </el-button>
    </div>

    <el-table
      :data="list"
      border
      style="width: 100%; margin-top: 5px"
      @row-click="clickRow"
      :row-style="{cursor: 'pointer',backgroundColor: 'beige'}"
      :header-cell-style="{backgroundColor: 'beige'}"
    >
      <el-table-column
        prop="createdTime"
        label="日期"
        width="100"
      />
      <el-table-column
        prop="name"
        label="标题"
        width="300"
      />
      <el-table-column
        prop="content"
        label="内容"
      />
      <el-table-column
        prop="type"
        label="类型"
        width="100"
        :formatter="typeFormater"
      />
      <el-table-column
        prop="isPublic"
        label="是否公开"
        width="100"
        :formatter="isPublicFormater"
      />
    </el-table>
  </div>
</template>

<script>

    import {getArticleList} from '@/api/app'

    export default {
        mounted() {
            this.getData();
        },
        methods: {
            getData() {
                getArticleList().then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        this.list = res.list;
                    }
                }).catch(res => {
                    console.log("请求失败");
                    console.log(res);
                })
            },
            reloadData() {
                location.reload();
            },
            isPublicFormater(row) {
                return row.isPublic === 1 ? '是' : '否';
            },
            typeFormater(row) {
                if (row.type === 1) {
                    return '文章';
                }
                if (row.type === 2) {
                    return '笔记';
                }
                if (row.type === 3) {
                    return '脑图';
                }
            },
            clickRow(row, column, event) {
                console.log(row);
                console.log(column);
                console.log(event);
                console.log(row);
                window.location.href = '/manager/article/' + row.id
            }
        },

        data() {
            return {
                list: []
            }
        },

    }
</script>

<style scoped lang="scss">
    .has-gutter {
        tbody tr {
            background-color: red;
            cursor: pointer;
        }
    }
    .has-gutter tr.th.el-table_1_column_1 {
        background-color: beige;
    }
</style>