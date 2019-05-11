import Vue from "vue";
import Router from "vue-router";
import ThePRP from "@/views/ThePRP";
import Sputnik from "@/views/Sputnik";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Sputnik
    },
    {
      path: "/sputnik",
      name: "sputnik",
      component: Sputnik
    },
    {
      path: "/theprp",
      name: "prp",
      component: ThePRP
    }
  ]
});
