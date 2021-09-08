import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ProgressA from "./ProgressA/index.jsx";

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <ProgressA />
    </ChakraProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
