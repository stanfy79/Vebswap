import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WagmiProvider  } from "wagmi";
import config from "./connector/wagmi";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <WagmiProvider  config={config}>
    <App />
  </WagmiProvider>
);

