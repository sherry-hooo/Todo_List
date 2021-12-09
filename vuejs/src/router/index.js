import { createRouter, createWebHistory } from "vue-router";
import MyTask from "../views/MyTask.vue";

const routes = [
  {
    path: "/",
    name: "MyTasks",
    component: MyTask,
  },
  {
    path: "/inProgress",
    name: "InProgress",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InProgress.vue"),
  },
  {
    path: "/completed",
    name: "Completed",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Completed.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
