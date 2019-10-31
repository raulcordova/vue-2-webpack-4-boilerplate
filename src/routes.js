import LyEmpty from "@/layouts/LyEmpty";
import LyDashboard from "@/layouts/LyDashboard";

import VwHome from "@/views/VwHome";
import VwDashboardHome from "@/views/VwDashboardHome";
import VwBrands from '@/views/VwBrands';
import VwPodcasts from "@/views/VwPodcasts";
import VwEpisodes from "@/views/VwEpisodes";

const routes = [{
  path: "/login",
  component: LyEmpty,
  children: [{
    path: "",
    name: "Welcome",
    component: VwHome
  }]
}, {
  path: "/",
  component: LyDashboard,
  children: [{
      path: "",
      name: "DashboardHome",
      component: VwDashboardHome,
      redirect: 'podcasts'
    },
    {
      path: "brands",
      name: "Brands",
      component: VwBrands
    },
    {
      path: "podcasts",
      name: "Podcasts",
      component: VwPodcasts
    },
    {
      path: "podcasts/episodes/:id/:name",
      name: "Episodes",
      component: VwEpisodes
    }
  ]
}];


export default routes;