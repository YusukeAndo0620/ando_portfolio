import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/home/index.vue";
import AboutView from "../views/about/index.vue";
import WorksView from "../views/works/index.vue";
import ContactView from "../views/contact/index.vue";
import Home from "../views/home/Home.vue";
import About from "../views/about/About.vue";
import Works from "../views/works/Works.vue";
import Contact from "../views/contact/Contact.vue";

const baseUrl = "ando_portfolio";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
  },
  // {
  //   path: "/about",
  //   component: AboutView,
  //   children: [
  //     {
  //       path: "",
  //       name: "About",
  //       component: About,
  //     },
  //   ],
  // },
  // {
  //   path: "/works",
  //   component: WorksView,
  //   children: [
  //     {
  //       path: "",
  //       name: "Works",
  //       component: Works,
  //     },
  //   ],
  // },
  // {
  //   path: "/contact",
  //   component: ContactView,
  //   children: [
  //     {
  //       path: "",
  //       name: "Contact",
  //       component: Contact,
  //     },
  //   ],
  // },
];

const routerBase = createMemoryHistory(baseUrl);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
// export default router; routerBase;
