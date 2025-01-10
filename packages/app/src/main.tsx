import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  BentoProvider,
  Box,
  defaultMessages,
} from "@gorliumbento/design-system";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BentoProvider defaultMessages={defaultMessages}>
      <Box
        style={{
          backgroundColor: "#101401",

          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <App />
      </Box>
    </BentoProvider>
  </StrictMode>
);
