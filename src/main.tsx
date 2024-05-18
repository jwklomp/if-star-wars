import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import "bootstrap/dist/css/bootstrap.min.css";
//
import App from "./App.tsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
