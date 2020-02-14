import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});
