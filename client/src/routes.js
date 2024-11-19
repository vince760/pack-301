import Dashboard from "views/Dashboard.js";

const routes = [
  {
    path: "/events",
    name: "Event",
    icon: "nc-icon nc-money-coins",
    component: <Dashboard />,
    layout: "/admin"
  }
];

export default routes;
