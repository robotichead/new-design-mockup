import { createRouter, createWebHistory } from "vue-router";

// Async components
const Dashboard = () => import("@/components/dashboard/dashboard_page/DashboardPage.vue");
const NewProject = () => import("@/components/project/NewProject.vue");
const NotFound = () => import("@/components/error/NotFoundPage/NotFoundPage.vue");
const Project = () => import("@/components/project/ProjectInformation.vue");
const Search = () => import("@/components/search/SearchPage.vue");

// Define the routes
const routes = [
  {
    path: "/",
    component: Dashboard,
    name: "Dashboard",
    meta: {
      destination: "dashboard",
    },
  },
  {
    path: "/project",
    meta: {
      destination: "project",
    },
    children: [
      { path: "", component: Search, name: "SearchProject" },
      { path: "new", component: NewProject, name: "NewProject" },
      { path: ":id", component: Project, name: "Project" },
    ],
  },
  {
    path: "/kanban_board",
    meta: {
      destination: "kanban_board",
    },
    children: [
      { path: "", component: Search, name: "SearchKanbanBoard" },
      { path: "new", component: Search, name: "NewKanbanBoard" },
      { path: ":id", component: Search, name: "KanbanBoard" },
    ],
  },
  {
    path: "/requirement",
    meta: {
      destination: "requirement",
    },
    children: [
      { path: "", component: Search, name: "SearchRequirement" },
      { path: "new", component: Search, name: "NewRequirement" },
      { path: ":id", component: Search, name: "Requirement" },
    ],
  },
  {
    path: "/task",
    meta: {
      destination: "task",
    },
    children: [
      { path: "", component: Search, name: "SearchTask" },
      { path: "new", component: Search, name: "NewTask" },
      { path: ":id", component: Search, name: "Task" },
    ],
  },
  {
    path: "/request_for_change",
    meta: {
      destination: "request_for_change",
    },
    children: [
      { path: "", component: Search, name: "SearchRequestForChange" },
      { path: "new", component: Search, name: "NewRequestForChange" },
      { path: ":id", component: Search, name: "RequestForChange" },
    ],
  },
  // Fall back page
  {
    path: "/:catchAll(.*)*",
    component: NotFound,
  },
];

// Router setup
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export { routes };

export default router;
