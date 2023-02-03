import DashboardComponent from "../components/DashboardComponent";
import LoginComponent from "../components/LoginComponent";
import { DASHBOARD_PATH, LOGIN_PATH } from "./routeConstants";

const routesConfig = [
  {
    path: DASHBOARD_PATH,
    isHeader: true,
    element: <DashboardComponent />,
    isProtected: true,
    key: "dashboard"
  },
  {
    path: LOGIN_PATH,
    isHeader: false,
    element: <LoginComponent />,
    isProtected: false,
    key: "login"
  }
];

export default routesConfig;
