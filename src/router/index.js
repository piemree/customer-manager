import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/NewCustomer",
    name: "NewCustomer",
    component: () =>
      import(/* webpackChunkName: "NewCustomer" */ "../views/NewCustomer.vue"),
  },
  {
    path: "/customer:id",
    name: "CustomerDetails",
    component: () =>
      import(
        /* webpackChunkName: "NewCustomer" */ "../views/CustomerDetails.vue"
      ),
  },
  {
    path: "/EditCustomer",
    name: "EditCustomer",
    component: () =>
      import(
        /* webpackChunkName: "EditCustomer" */
        "../views/EditCustomer.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
