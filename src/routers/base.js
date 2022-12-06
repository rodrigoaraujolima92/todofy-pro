export default [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/esqueceu-senha",
    component: () => import("@/views/esqueceuSenha.vue"),
  },
  {
    path: "/cadastro",
    component: () => import("@/views/cadastro.vue"),
  },
];
