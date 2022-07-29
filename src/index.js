import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "769px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={true}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
