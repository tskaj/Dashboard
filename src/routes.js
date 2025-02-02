import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: <Dashboard />,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Assistants",
    icon: "education_glasses",
    component: <Icons />,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Assignments",
    icon: "files_paper",
    component: <Maps />,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Quizes",
    icon: "education_hat",
    component: <Notifications />,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: <UserPage />,
    layout: "/admin"
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: <TableList />,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: <Typography />,
    layout: "/admin"
  }
];
export default dashRoutes;
