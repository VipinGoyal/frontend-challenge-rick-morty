import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "..";

// Renders an AppBar component with position="fixed"
it('should render a Typography component inside the Toolbar with variant="h3"', () => {
  render(<Header />);
  const typography = screen.getByRole("heading", { level: 3 });
  expect(typography).toBeInTheDocument();
});
