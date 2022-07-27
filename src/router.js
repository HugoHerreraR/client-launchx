import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList"),
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer"),
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer"),
  },
  {
    path: "/missionCommander",
    name: "missionCommander-details",
    component: () => import("./components/CommanderList")
  },
  {
    path: "/addComander",
    name: "add-MissionCommander",
    component: () => import("./components/addComander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
