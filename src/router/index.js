import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import ThePRP from "@/components/ThePRP";
import Index from "@/components/Sputnik/Index";
import All from "@/components/Sputnik/All";
import AltRock from "@/components/Sputnik/AltRock";
import Electro from "@/components/Sputnik/Electro";
import HipHop from "@/components/Sputnik/HipHop";
import Jazz from "@/components/Sputnik/Jazz";
import Metal from "@/components/Sputnik/Metal";
import Punk from "@/components/Sputnik/Punk";
import Pop from "@/components/Sputnik/Pop";
import Rock from "@/components/Sputnik/Rock";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/sputnik",
      component: Index,
      children: [
        {
          path: "",
          name: "All",
          component: All
        },
        {
          path: "altrock",
          name: "AltRock",
          component: AltRock
        },
        {
          path: "all",
          name: "All",
          component: All
        },
        {
          path: "electro",
          name: "Electro",
          component: Electro
        },
        {
          path: "hiphop",
          name: "HipHop",
          component: HipHop
        },
        {
          path: "jazz",
          name: "Jazz",
          component: Jazz
        },
        {
          path: "metal",
          name: "Metal",
          component: Metal
        },
        {
          path: "punk",
          name: "Punk",
          component: Punk
        },
        {
          path: "pop",
          name: "Pop",
          component: Pop
        },
        {
          path: "rock",
          name: "Rock",
          component: Rock
        }
      ]
    },

    {
      path: "/theprp",
      name: "ThePRP",
      component: ThePRP
    }
  ]
});
