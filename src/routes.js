import LyEmpty from "@/layouts/LyEmpty";
import LyDashboard from "@/layouts/LyDashboard";

import VwHome from "@/views/VwHome";
import VwDashboardHome from "@/views/VwDashboardHome";

const routes = [{
    path: "/",
    name: "Home",
    component: LyEmpty,
    children: [{
      path: "",
      name: "Welcome",
      component: VwHome
    }]
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: LyDashboard,
    children: [{
      path: "",
      name: "FormLogin",
      component: VwDashboardHome
    }]
  }
];

export default routes;