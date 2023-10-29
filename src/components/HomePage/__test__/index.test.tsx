import "@testing-library/jest-dom";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import HomePage from "..";
import { MockedProvider } from "@apollo/react-testing";
import { validResult } from "../__mock__";
import { ALL_CHARACTERS } from "@/graphql/queries";

afterEach(cleanup);

class IntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

const validmocks = [
  {
    request: {
      query: ALL_CHARACTERS,
      variables: {
        page: 1,
        filter: {},
      },
    },
    result: {
      data: validResult.data,
    },
  },
];

describe("HomePage", () => {
  // Renders the Header component
  it("should render the Header component", async () => {
    const component = render(
      <MockedProvider addTypename={false} mocks={validmocks}>
        <HomePage />
      </MockedProvider>
    );

    expect(
      screen.getByRole("heading", { name: /rick and morty/i })
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(component.getByText("Rick Sanchez")).toBeInTheDocument();
    });
  });
});
