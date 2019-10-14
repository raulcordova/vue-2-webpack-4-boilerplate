import LyEmpty from "@/layouts/LyEmpty";
import LyDashboard from "@/layouts/LyDashboard";

import VwLogin from "@/views/VwLogin";
import VwDashboardHome from "@/views/VwDashboardHome";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LyEmpty,
    children: [
      {
        path: "",
        name: "FormLogin",
        component: VwLogin
      }
    ]
  },
  {
    path: "/medium",
    name: "Medium",
    component: LyDashboard,
    children: [
      {
        path: "",
        name: "FormLogin",
        component: VwDashboardHome
      }
    ]
  }
];

export default routes;
