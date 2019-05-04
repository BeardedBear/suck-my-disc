import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld";
import ThePRP from "../components/ThePRP";
import SputnikAll from "../components/SputnikAll";
import SputnikPunk from "../components/SputnikPunk";
import SputnikPop from "../components/SputnikPop";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/sputnik/all",
      name: "SputnikAll",
      component: SputnikAll
    },
    {
      path: "/sputnik/punk",
      name: "SputnikPunk",
      component: SputnikPunk
    },
    {
      path: "/sputnik/pop",
      name: "SputnikPop",
      component: SputnikPop
    },
    {
      path: "/theprp",
      name: "ThePRP",
      component: ThePRP
    }
  ]
});
