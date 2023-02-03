import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";

import PrivateRoute from "./PrivateRoute";
import routesConfig from "./routes-config";

interface IRoutes {
  path: string;
  isHeader: boolean;
  element: React.ReactElement;
  isProtected: boolean;
  key: string;
}
const RoutesComponent: React.FC = () => {
  const getRoutes = () =>
    routesConfig.map((route: IRoutes) =>
      route.isProtected ? (
        <Route
          path={route.path}
          key={route.key}
          element={<PrivateRoute route={route} />}
        />
      ) : (
        <Route key={route.key} path={route.path} element={route.element} />
      )
    );
  return (
    <BrowserRouter>
      <Routes>
        {getRoutes()}
        <Route path="*" key="login" element={<LoginComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
