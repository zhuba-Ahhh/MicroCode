import { render } from "react-dom";

import App from "./App";
import React from "react";

render(<MyApp />, document.querySelector("#root"));

function MyApp() {
  return <App />;
}
