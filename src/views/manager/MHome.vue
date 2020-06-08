<template>
  <div class="mhome">
    <el-table
      :data="tableData"
      border
      style="width: 100%; margin-top: 33px"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="100"
      />
      <el-table-column
        prop="name"
        label="标题"
        width="300"
      />
      <el-table-column
        prop="province"
        label="内容"
      />
      <el-table-column
        prop="city"
        label="类型"
        width="100"
      />
      <el-table-column
        prop="address"
        label="是否公开"
        width="100"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="200"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >
            查看
          </el-button>
          <el-button
            type="text"
            size="small"
          >
            编辑
          </el-button>
          <el-button
            type="text"
            size="small"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },

        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '是',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '是',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '是',
                    zip: 200333
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '否',
                    zip: 200333
                }]
            }
        }
    }
</script>

<style scoped>

</style>