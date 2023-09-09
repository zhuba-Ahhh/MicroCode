import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App />, document.querySelector("#root"));

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );
