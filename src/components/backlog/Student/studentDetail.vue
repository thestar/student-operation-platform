<template>
  <div>
    <!-- 面包屑组件 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>在读学员</el-breadcrumb-item>
      <el-breadcrumb-item>学员详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 内容卡片 -->
    <el-card>
      <div slot="header" class="clearfix">
        <span>学员基本信息</span>
      </div>
      <div>
        <el-form label-width="160px" ref="fromData" :model="fromData" >
          <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="学员姓名" prop="name">
                {{fromData.name}}
              </el-form-item>
            </el-col>
             <el-col :span="12">
              <el-form-item label="性别" prop="gender">
                {{fromData.gender}}
              </el-form-item>
            </el-col>
           </el-row>
           <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="手机号码" prop="phoneNum">
                {{fromData.phoneNum}}
              </el-form-item>
            </el-col>
             <el-col :span="12">
              <el-form-item label="学员生日" prop="birthday">
                {{fromData.birthday}}
              </el-form-item>
            </el-col>
           </el-row>
           <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="紧急联系人" prop="contact">
                {{fromData.contact}}
              </el-form-item>
            </el-col>
             <el-col :span="12">
              <el-form-item label="年级" prop="grade">
                {{fromData.grade}}
              </el-form-item>
            </el-col>
           </el-row>
           <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="紧急人电话" prop="contactNum">
                {{fromData.contactNum}}
              </el-form-item>
            </el-col>
             <el-col :span="12">
              <el-form-item label="家庭住址" prop="address">
                {{fromData.contactNum}}
              </el-form-item>
            </el-col>
           </el-row>
           <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="就读学校" prop="school">
                {{fromData.school}}
              </el-form-item>
            </el-col>
             <el-col :span="12">
              <el-form-item label="学管师" prop="teacher">
                {{fromData.teacher}}
              </el-form-item>
            </el-col>
           </el-row>
        </el-form>
      </div>
    </el-card>
    <el-card class="mt20">
      <div slot="header" class="clearfix">
        <span>学员课程信息</span>
      </div>
      <div>
        <el-table
          :data="infoList"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="班级名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="课程名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="课程类型">
          </el-table-column>
          <el-table-column
            prop="address"
            label="绑定套餐">
          </el-table-column>
          <el-table-column
            prop="address"
            label="剩余次数">
          </el-table-column>
          <el-table-column
            prop="address"
            label="开始日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="结束日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="上课时间">
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <div class="footer-nav">
          <el-button @click="resetForm">返回</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id:'',
        fromData:{
          name:'',
          gender:'1',
        },
        infoList:[
          {

          }
        ]
      };
    },
    created() {
    },
    methods: {
      resetForm() {
        this.$router.push("/studentList");
      }
  },
};
</script>

<style lang="less" scoped>
  /deep/ .el-upload__input{
    display: none;
  }
</style>
