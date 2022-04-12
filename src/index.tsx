// import { StrictMode } from "react";
// import * as ReactDOMClient from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = ReactDOMClient.createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
