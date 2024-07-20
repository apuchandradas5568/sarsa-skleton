import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import WebProvider from "./providers/WebProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<<<<<<< HEAD
  <StrictMode>
    <WebProvider>
      <App />
    </WebProvider>
  </StrictMode>
=======

  // <StrictMode>
  <WebProvider>

    <App />
  </WebProvider>
  // </StrictMode>

>>>>>>> origin/main
);
