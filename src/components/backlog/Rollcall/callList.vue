<template>
  <div>
    <!-- 面包屑组件 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>在读学生</el-breadcrumb-item>
      <el-breadcrumb-item>学生管理</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 内容卡片 -->
    <el-card>
      <!-- 查询框 -->
      <el-row :gutter="24">
        <el-col :span="7">
          <el-input
            v-model="queryInfo.userName"
            @clear="loadData"
            placeholder="请输入手机号、姓名"
            clearable
          >
            <el-button
              @click="loadData"
              slot="append"
              icon="el-icon-search"
            ></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table :data="dataList" stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="学生姓名" prop="name"></el-table-column>
        <el-table-column  label="手机号码"  prop="phoneNum"></el-table-column>
        <el-table-column label="年级" prop="creatTime">
          <template slot-scope="scope">
            <span>{{scope.row.creatTime | formatDate}}</span>
          </template>
        </el-table-column>
        <el-table-column  label="班级"  prop="content"></el-table-column>
        <el-table-column label="操作">
              <template slot-scope="scope">
                <el-tooltip
                  effect="dark"
                  content="Modify information"
                  placement="top"
                  :enterable="false"
                >
                  <el-button
                    @click="showEditDialog(scope.row)"
                    type="primary"
                    icon="el-icon-edit"
                    size="mini"
                  >添加</el-button>
                </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 页数码 -->
        <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="queryInfo.pageNo"
        :page-size="queryInfo.pageSize"
        :total="total"
        background
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
  import { formatDate } from "../../../plugins/date.js";
  export default {
    data() {
      return {
        //用于获取数据列表
        queryInfo: {
          userName: "",
          pageSize: 10,
          pageNo: 1,
        },
        dataList: [],
        total: 0,
      };
    },
    created() {
      this.loadData();
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, "yyyy-MM-dd");
      },
    },
    methods: {
      goCreat(){},
      loadData() {},
      handleCurrentChange(page) {},
    },
  };
</script>

<style lang="less" scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px #8c939d dashed;
    border-radius: 3px;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  /deep/ .el-table--border {
    border-bottom: 1px solid #ececec;
  }

  .statusBox h5 {
    font-size: 25px;
    color: #999;
    text-align: center;
  }

  .statusBox span {
    font-size: 25px;
    color: #1890ff;
    text-align: center;
    display: block;
    margin-bottom: 20px;
  }
</style>
