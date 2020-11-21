<template>
  <div>
    <!-- 面包屑组件 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>在读学员</el-breadcrumb-item>
      <el-breadcrumb-item>更新学员</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 内容卡片 -->
    <el-card>
      <div slot="header" class="clearfix">
        <span>更新在读学员</span>
      </div>
      <div>
        <el-form label-width="160px" :rules="rules" ref="fromData" :model="fromData" >
          <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="学员姓名" prop="name">
                <el-input v-model="fromData.name"></el-input>
              </el-form-item>
            </el-col>
             <el-col :span="12">
              <el-form-item label="性别" prop="gender">
                <el-radio v-model="fromData.gender" label="1">男</el-radio>
                <el-radio v-model="fromData.gender" label="2">女</el-radio>
              </el-form-item>
            </el-col>
           </el-row>
           <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="手机号码" prop="phoneNum">
                <el-input v-model="fromData.phoneNum"></el-input>
              </el-form-item>
            </el-col>
             <el-col :span="12">
              <el-form-item label="学员生日" prop="birthday">
                <el-date-picker
                  v-model="fromData.birthday"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
           </el-row>
           <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="紧急联系人" prop="contact">
                <el-input v-model="fromData.contact"></el-input>
              </el-form-item>
            </el-col>
             <el-col :span="12">
              <el-form-item label="年级" prop="grade">
                <el-input v-model="fromData.grade"></el-input>
              </el-form-item>
            </el-col>
           </el-row>
           <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="紧急人电话" prop="contactNum">
                <el-input v-model="fromData.contactNum"></el-input>
              </el-form-item>
            </el-col>
             <el-col :span="12">
              <el-form-item label="家庭住址" prop="address">
                <el-input v-model="fromData.address"></el-input>
              </el-form-item>
            </el-col>
           </el-row>
           <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item label="就读学校" prop="school">
                <el-input v-model="fromData.school"></el-input>
              </el-form-item>
            </el-col>
             <el-col :span="12">
              <el-form-item label="学管师" prop="teacher">
                <el-select v-model="fromData.teacher" placeholder="请选择">
                  <el-option
                    v-for="item in teacherList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
           </el-row>
        </el-form>
      </div>
    </el-card>

    <div class="footer-nav">
          <el-button type="primary" @click="submitForm('fromData')">确定</el-button>
          <el-button @click="resetForm('fromData')">取消</el-button>
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
        // 学管师列表
        teacherList:[
          {
            value:'1',
            label:'陈老师'
          },
          {
            value:'2',
            label:'王老师'
          }
        ],
        // 校验规则
        rules: {
          name: [
            { required: true, message: '请输入学生姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phoneNum:[
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          contactNum:[
            { required: true, message: '请输入紧急人电话', trigger: 'blur' },
            { pattern: /^1[34578]\d{9}$/, message: '请输入正确的紧急人电话', trigger: 'blur' }
          ],
        }
      };
    },
    created() {
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
