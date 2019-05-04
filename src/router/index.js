import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import ThePRP from "../components/ThePRP";
import SputnikAll from "../components/sputnik/SputnikAll";
import SputnikAltRock from "../components/sputnik/SputnikAltRock";
import SputnikElectro from "../components/sputnik/SputnikElectro";
import SputnikHipHop from "../components/sputnik/SputnikHipHop";
import SputnikJazz from "../components/sputnik/SputnikJazz";
import SputnikMetal from "../components/sputnik/SputnikMetal";
import SputnikPunk from "../components/sputnik/SputnikPunk";
import SputnikPop from "../components/sputnik/SputnikPop";
import SputnikRock from "../components/sputnik/SputnikRock";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/sputnik/all",
      name: "SputnikAll",
      component: SputnikAll
    },
    {
      path: "/sputnik/altrock",
      name: "SputnikAltRock",
      component: SputnikAltRock
    },
    {
      path: "/sputnik/electro",
      name: "SputnikElectro",
      component: SputnikElectro
    },
    {
      path: "/sputnik/hiphop",
      name: "SputnikHipHop",
      component: SputnikHipHop
    },
    {
      path: "/sputnik/jazz",
      name: "SputnikJazz",
      component: SputnikJazz
    },
    {
      path: "/sputnik/metal",
      name: "SputnikMetal",
      component: SputnikMetal
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
      path: "/sputnik/rock",
      name: "SputnikRock",
      component: SputnikRock
    },
    {
      path: "/theprp",
      name: "ThePRP",
      component: ThePRP
    }
  ]
});
