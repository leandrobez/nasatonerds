import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/**components for client */
import HomePage from "../components/HomeComponent/homeComponent.vue";
import ApodPage from "../components/ApodComponent/apodComponent.vue";
import MarsPage from "../components/MarsComponent/marsComponent.vue";
import EpicPage from "../components/EpicComponent/epicComponent.vue";

/**Routes for app */
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomePage
  },
  {
    path: "/apod",
    name: "apod",
    component: ApodPage
  },
  {
    path: "/mars",
    name: "mars",
    component: MarsPage
  },
  {
    path: "/epic",
    name: "epic",
    component: EpicPage
  },
  {
    path: "*",
    redirect: "/home"
  }
];

const router = new VueRouter({
  routes
});

export default router;
