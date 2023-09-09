import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App />, document.querySelector("#root"));

// import ReactDOM from "react-dom/client";
// import React from "react";
// import App from "./App";
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import { createRoot } from 'react-dom/client';
// import React from "react";
// import App from "./App";
// const container = document.getElementById('root') as Element;
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);