<template>
  <div class="mhome">
    <div
      style="width: 100%; margin-top: 22px"
    >
      <el-input
        id="search-input"
        style="width: 30%"
        v-model="keyWords"
        @keyup.enter.native="search"
      />
      <el-button
        icon="el-icon-search"
        style="margin-left: 2px"
        @click="search"
      />
    </div>

    <p
      style="text-align: center;font-size: 20px;margin-top: 88px"
      v-if="this.list.length === 0"
    >
      无搜索结果
    </p>

    <el-table
      v-if="this.list.length !== 0"
      :data="list"
      border
      style="width: 100%; margin-top: 5px"
      @row-click="clickRow"
      :row-style="{cursor: 'pointer',backgroundColor: '#FCFDF7'}"
      :header-cell-style="{backgroundColor: '#FCFDF7'}"
    >
      <el-table-column
        prop="createdTime"
        label="日期"
        width="200"
        :formatter="timeFormater"
      />
      <el-table-column
        prop="name"
        label="标题"
        width="300"
      >
        <template slot-scope="scope">
          <span v-html="scope.row.name" />
        </template>
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
      >
        <template slot-scope="scope">
          <span v-html="scope.row.content" />
        </template>
      </el-table-column>
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

    import {getArticleList, searchArticleList} from '@/api/app'

    export default {
        mounted() {
            this.getData();
        },
        methods: {
            getData(k) {
                let params = {}
                if (k !== undefined) {
                    params = {"k": k}
                }
                getArticleList(params).then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        this.list = res.list;
                    }
                }).catch(res => {
                    console.log("请求失败");
                    console.log(res);
                });
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
            timeFormater(row) {
                let time = row.createdTime;
                return time.substr(0, 16).replace("T", " ");
            },
            clickRow(row, column, event) {
                console.log(row);
                console.log(column);
                console.log(event);
                console.log(row);
                // window.location.href = '/manager/article/' + row.id
                window.open('/manager/article/' + row.id, '_blank') // 新窗口打开外链接
            },
            search(event) {
                const loading = this.$loading();
                console.log(event)
                console.log(this.keyWords)
                // this.getData(this.keyWords)

                searchArticleList({"kw": this.keyWords}).then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        this.list = res.list;
                    }
                    loading.close();
                }).catch(res => {
                    console.log("请求失败");
                    console.log(res);
                    loading.close();
                });
                document.getElementById("search-input").blur();
            }
        },

        data() {
            return {
                list: [],
                keyWords: '',
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
        background-color: #FCFDF7;
    }
</style>