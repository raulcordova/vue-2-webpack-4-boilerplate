import LyEmpty from "@/layouts/LyEmpty";
import LyDashboard from "@/layouts/LyDashboard";

import VwHome from "@/views/VwHome";
import VwDashboardHome from "@/views/VwDashboardHome";
import VwBrands from '@/views/VwBrands';
import VwEpisodes from "@/views/VwEpisodes";

const routes = [{
    path: "/login",
    name: "Home",
    component: LyEmpty,
    children: [{
      path: "",
      name: "Welcome",
      component: VwHome
    }]
  },
  {
    path: "/",
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
      },
      {
        path: "podcast/episodes",
        name: "Episodes",
        component: VwEpisodes
      }
    ]
  }
];

export default routes;