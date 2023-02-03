import React from "react";
import { Navigate } from "react-router-dom";
import WithLayout from "../HOC/withLayout";
import { LOGIN_PATH } from "./routeConstants";

interface IRoute {
  route: {
    element: React.ReactNode;
    isHeader: boolean;
    path: string;
  };
}

const PrivateRoute: React.FC<IRoute> = ({ route }) => {
  const authToken = localStorage.getItem("accessToken");
  React.useEffect(() => {
    if (!authToken) {
      alert("You have not logged in!");
      window.location.href = LOGIN_PATH;
    }
  }, [authToken]);

  return authToken ? (
    WithLayout(route.element, route.isHeader)
  ) : (
    <Navigate to={LOGIN_PATH} />
  );
};

export default PrivateRoute;
