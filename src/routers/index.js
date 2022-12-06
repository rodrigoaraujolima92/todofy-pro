import { createRouter, createWebHistory } from "vue-router";
import routes from "./base";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
