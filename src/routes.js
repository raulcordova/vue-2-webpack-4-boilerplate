import LyEmpty from "@/layouts/LyEmpty";
import LyDashboard from "@/layouts/LyDashboard";

import VwHome from "@/views/VwHome";
import VwDashboardHome from "@/views/VwDashboardHome";
import VwBrands from '@/views/VwBrands';

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
        name: "DashboardHome",
        component: VwDashboardHome
      },
      {
        path: "brands",
        name: "Brands",
        component: VwBrands
      }
    ]
  }
];

export default routes;