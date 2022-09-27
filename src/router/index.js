import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import checkLogin from "@/middleware/checkLogin";
import LoginView from "@/views/LoginView.vue";
import HomeAdminView from "@/views/HomeAdminView.vue";
import checkAdmin from "@/middleware/checkAdmin";
import RegisterView from "@/views/RegisterView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/admin",
    name: "admin",
    component: HomeAdminView,
    beforeEnter: (to, from, next) => {
      checkLogin(next);
      checkAdmin(next);
      next();
    },
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: (to, from, next) => {
      checkLogin(next);

      next();
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
