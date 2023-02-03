import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import RoutesComponent from "./src/root/Routes";
import { QueryClient, QueryClientProvider } from "react-query";

const rootElement = document.getElementById("root");
const queryClient = new QueryClient();
ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RoutesComponent />
    </QueryClientProvider>
  </StrictMode>,
  rootElement
);
