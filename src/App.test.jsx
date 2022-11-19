import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

test("Renders <App />", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const found_my_app = screen.getByText(/my app/i);
  expect(found_my_app).toBeInTheDocument();
});
