import React from "react";
import { cleanup, renderHook, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import { ALL_CHARACTERS } from "@/graphql/queries";
import { validResult, invalidResult } from "../__mock__";
import useAllCharactersInfinite from "../useAllCharactersInfinite";

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

const invalidmocks = [
  {
    request: {
      query: ALL_CHARACTERS,
      variables: {
        page: 1,
        filter: {},
      },
    },
    result: {
      data: invalidResult.data,
    },
  },
];

afterEach(cleanup);
describe("useHomepage Hook", () => {
  test("Given when the useHomepage hook call test for first character", async () => {
    // @ts-ignore
    const wrapper = ({ children }) => (
      <MockedProvider mocks={validmocks} addTypename={false}>
        {children}
      </MockedProvider>
    );
    const { result } = renderHook(() => useAllCharactersInfinite(), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.allCharacters[0].name).toBe("Rick Sanchez");
      expect(result.current.allCharacters[0].gender).toBe("Male");
      expect(result.current.allCharacters[0].id).toBe("1");
      expect(result.current.hasNextPage).toBe(true);
    });
  });

  test("Given when the useHomepage hook call test for last page", async () => {
    // @ts-ignore
    const wrapper = ({ children }) => (
      <MockedProvider mocks={invalidmocks} addTypename={false}>
        {children}
      </MockedProvider>
    );
    const { result } = renderHook(() => useAllCharactersInfinite(), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.hasNextPage).toBe(false);
    });
  });
});
