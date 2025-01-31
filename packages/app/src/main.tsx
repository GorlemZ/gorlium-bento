import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BentoProvider, defaultMessages } from "@gorliumbento/design-system";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BentoProvider defaultMessages={defaultMessages}>
      <App />
    </BentoProvider>
  </StrictMode>
);
