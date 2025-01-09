import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BentoProvider, defaultMessages } from "@gorliumbento/design-system";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BentoProvider defaultMessages={defaultMessages}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#101401",
        }}
      >
        <App />
      </div>
    </BentoProvider>
  </StrictMode>
);
