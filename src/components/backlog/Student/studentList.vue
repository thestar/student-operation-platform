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
        <el-col :span="5">
          <el-input
            v-model="queryInfo.keyword"
            @clear="loadData"
            placeholder="请输入手机号、姓名"
            clearable
          >
          </el-input>
        </el-col>
        <el-col :span="5">
          <el-select v-model="queryInfo.schedule" placeholder="请选择学员排课">
            <el-option
              v-for="item in scheduleStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-button @click="handleSearch" type="primary">搜索</el-button>
          <el-button @click="handleAdd" type="primary">新增</el-button>
        </el-col>
      </el-row>
      <el-table :data="dataList"  @selection-change="handleSelectionChange" stripe>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="学生姓名" prop="name"></el-table-column>
        <el-table-column label="手机号码"  prop="phoneNum"></el-table-column>
        <el-table-column label="年级"  prop="grade"></el-table-column>
        <el-table-column label="就读学校"  prop="school"></el-table-column>
        <el-table-column label="学管师"  prop="teacher"></el-table-column>
        <el-table-column label="备注"  prop="remarks"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="selectSuit(scope.row)" type="text">选套餐</el-button>
            <el-button @click="selectClass(scope.row)" type="text">选班</el-button>
            <el-button @click="handleDelete(scope.row)" type="text">删除</el-button>
            <el-button @click="handleDetail(scope.row)" type="text">详情</el-button>
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
    <!-- 选择套餐 -->
    <el-dialog title="选择套餐" :visible.sync="dialogVisibleSelectSuit">
      <el-form :model="suitForm">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="">
              <el-input placeholder="搜索套餐" v-model="suitForm.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="">
              <el-button @click="handleSearch" type="primary">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table :data="suitList" @selection-change="handleSelectionSuit" stripe>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column property="name" label="套餐名称"></el-table-column>
        <el-table-column property="type" label="套餐类型"></el-table-column>
        <el-table-column property="times" label="套餐次数"></el-table-column>
        <el-table-column property="hour" label="套餐时长"></el-table-column>
        <el-table-column property="beginTime" label="时长开始"></el-table-column>
        <el-table-column property="price" label="价格"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
       <el-button @click="dialogVisibleSelectSuit = false">取 消</el-button>
       <el-button type="primary" @click="dialogVisibleSelectSuit = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { formatDate } from "../../../plugins/date.js";
  export default {
    data() {
      return {
        //用于获取数据列表
        queryInfo: {
          keyword:'',
          schedule: '',
          pageSize: 10,
          pageNo: 1,
        },
        // 选择套餐弹窗
        dialogVisibleSelectSuit:false,
        // 排课状态
        scheduleStatus:[
          {
            value:1,
            label:'全部'
          },
          {
            value:2,
            label:'已排课'
          },
          {
            value:3,
            label:'未排课'
          }
        ],
        // 选择套餐搜索
        suitForm:{
          name:'',
        },
        // 套餐列表
        suitList:[
          {
            name:'奥数全年88课时',
            type:'限次',
            times:'88次',
            hour:'不限时',
            beginTime:'2020/11/21',
            price:'5000'
          }
        ],
        selectList:[],//勾选学员列表
        selectSuitList:[],//勾选套餐列表
        dataList: [
          {
            name:'小米',
            phoneNum:'13434323445',
            grade:'六年级',
            school:'春田花花幼稚园',
            teacher:'陈老师',
            remarks:''
          }
        ],
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
      // 数据加载
      loadData(){},
      // 勾选学员
      handleSelectionChange(val) {
        this.selectList = val;
      },
      // 勾选套餐
      handleSelectionSuit(val){
        this.selectSuitList = val;
      },
      // 详情
      handleDetail(row){
        this.$router.push('/studentDetail');
      },
      // 删除
      handleDelete(row){
        this.$confirm('此操作将永久删除该学生, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      // 新增
      handleAdd(){
        this.$router.push('/creatStudent');
      },
      // 搜索
      handleSearch(){
        this.loadData();
      },
      // 选择套餐
      selectSuit(row){
        this.dialogVisibleSelectSuit = true;
      },
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
