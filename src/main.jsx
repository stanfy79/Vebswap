import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WagmiConfig } from "wagmi";
import config from "./connector/wagmi";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <WagmiConfig config={config}>
    <App />
  </WagmiConfig>
);

