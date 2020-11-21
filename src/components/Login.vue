<template>
  <div class="login_container">
    <div class="login_box">
      <h1 class="login_txt">大学士教育</h1>
      <el-form
        ref="loginFormRef"
        label-width="0"
        class="login_form"
        :model="loginForm"
        :rules="loginFormRules"
      >
        <el-form-item prop="name">
          <el-input
            placeholder="用户名"
            prefix-icon="iconfont icon-user"
            v-model="loginForm.account"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="密码"
            prefix-icon="iconfont icon-3702mima"
            show-password
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" round>确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        account: "",
        password: ""
      },
      //表单验证规则对象
      loginFormRules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "用户名长度3-10个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min:3, max: 10, message: "密码长度3-10个字符", trigger: "blur" }
        ]
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        let token = '123'
        window.sessionStorage.setItem("token", token);
        this.$router.push("/managerpage");
       });
    },
  }
};
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  width: 100%;
  position: fixed;
  background-image: linear-gradient(125deg,#E4FFCD,#6DD5FA,#2980B9,#E4FFCD);  background-size: 400%;
  animation: bganimation 15s infinite;
}
@keyframes bganimation {
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
}
.login_box {
  width: 550px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #00000080;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  .login_txt{
    margin-top:60px;
    color:#fff;
    letter-spacing: 20px;
  }
}
.w400{
  width: 400px;
}
.login_form {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
