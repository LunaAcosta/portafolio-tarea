import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SumarioView from "../views/SumarioView.vue"
import JornalizacionView from "../views/JornalizacionView.vue"
import CalendarizacionView from "../views/CalendarizacionView.vue"
import ApuntesView from "../views/ApuntesView.vue"
import TareasView from "../views/TareasView.vue"
import InvestigacionesView from "../views/InvestigacionesView.vue"
import EvaluacionView from "../views/EvaluacionView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/sumario",
      name: "Sumario",
      component: SumarioView
    },
    {
      path:"/jornalizacion",
      name: "Jornalizacion",
      component: JornalizacionView
    },
    {
      path: "/calendarizacion",
      name: "Calendarizacion",
      component: CalendarizacionView
    },
    {
      path: "/apuntes",
      name: "Apuntes",
      component: ApuntesView
    },
    {
      path: "/tareas",
      name: "Tareas",
      component: TareasView
    },
    {
      path: "/investigacion",
      name: "Investigacion",
      component: InvestigacionesView
    },
    {
      path: "/evaluacion",
      name: "Evaluacion",
      component: EvaluacionView
    } 
    
    
  

    // {
    //   path: "/about",
    //   name: "About",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
