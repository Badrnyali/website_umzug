import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import AngebotView from "./views/AngebotView.vue";
import TemplateService from "./views/TemplateService.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/angebot",
    name: "angebot",
    component: AngebotView,
  },
  {
    path: "/service/:id",
    name: "service",
    component: TemplateService,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
