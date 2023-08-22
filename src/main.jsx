import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/Global";
import { BrowserRouter } from "react-router-dom";
import { RoutesMain } from "./routes";
import { AuthProvider } from "./providers/breed.provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
