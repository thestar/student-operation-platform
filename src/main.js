import Vue from "vue";
import App from "./App.vue"; //引入跟组件
import router from "./router";
import "./plugins/element.js";
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// 导入全局样式
import "./assets/css/global.css";
import "./assets/css/common.css";
import "./assets/css/style.min.css";
import "./assets/css/hd.css";
//导入字体图标
import "./assets/fonts/iconfont.css";
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
import axios from "axios";
//配置请求根路径
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://www.siong.store:8089/';
//在挂载到原型对象前先设置一个request请求拦截器，使用use挂载一个回调函数
//config就是请求对象
//请求到达服务器之前先调用这个回调函数，对headers做预处理
axios.interceptors.request.use(config => {
  config.headers['content-type'] = 'application/json';
  // config.headers.Authorization = window.sessionStorage.getItem("token");
  config.headers.token = window.sessionStorage.getItem("token");
  console.log(config.headers,'config.headers');
  return config;
});
axios.interceptors.response.use(result => {
  console.log(result)
  if(result.data && result.data.code == 501) {
    return router.replace('/login')
  }
  return result;
});

//将引入的axios挂载到vue的原型对象上，全局配置axios，
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
