import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";

// backLog 
import Welcome from "../components/backlog/Welcome.vue";
// 学生模块
import Student from "../components/backlog/Student/studentList.vue";
import CreatStudent from "../components/backlog/Student/creatStudent.vue";
import StudentDetail from "../components/backlog/Student/studentDetail.vue";
import Class from "../components/backlog/Class/classList.vue";
import Rollcall from "../components/backlog/Rollcall/callList.vue";
import ManagerPage from "../components/ManagerPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    name:'login',
    path: "/",
    redirect: "/login"
  },
  {
    name:'login',
    path: "/login",
    component: Login
  },
  {
    path: "/managerpage",
    component: ManagerPage,
    // 路由守卫
    // beforeEnter: (to, from, next) => {
    //   const tokenStr = window.sessionStorage.getItem("token");
    //   if (!tokenStr) return nex
    // ("/login");
    //   next();
    // },
    redirect: "/welcome",
    children: [
      { path: "/welcome", component: Welcome },
      { path: "/studentList", component: Student },
      { path: "/creatStudent", component: CreatStudent },
      { path: "/studentDetail", component: StudentDetail },
      { path: "/classList", component: Class },
      { path: "/callList", component: Rollcall },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  routes
});

//抛出router之前，为其挂载路由导航守卫，to去哪，from从何来，next通行函数
// router.beforeEach((to, from, next) => {
//   if (to.path === "/login") return next();
//   const tokenStr = window.sessionStorage.getItem("token");
//   if (!tokenStr) return next("/login");
//   next();
// });

export default router;
