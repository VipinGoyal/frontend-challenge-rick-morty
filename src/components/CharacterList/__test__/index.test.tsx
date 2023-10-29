import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import CharacterList from "..";
import { ICharacterDetail } from "@/components/CharacterDetails/types";
import { allCharacters } from "../__mock__";

describe("CharacterList", () => {
  it("should render CharacterDetails component when dialogOpen state is true", () => {
    render(<CharacterList allCharacters={allCharacters} />);
    fireEvent.click(screen.getByTestId("box-1"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should not render any Character components when allCharacters array is empty", () => {
    const allCharacters: ICharacterDetail[] = [];

    render(<CharacterList allCharacters={allCharacters} />);

    expect(screen.queryByRole("gridcell")).not.toBeInTheDocument();
  });

  it("should not render CharacterDetails component when dialogOpen state is false", () => {
    render(<CharacterList allCharacters={allCharacters} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should set dialogData and dialogOpen states correctly when onClickHandler is called", async () => {
    render(<CharacterList allCharacters={allCharacters} />);
    const characterComponent = screen.getByTestId("box-1");
    fireEvent.click(characterComponent);
    await screen.findByText("Close");

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toHaveAttribute(
      "aria-labelledby",
      "character-details"
    );
    const closeButton = screen.getByRole("button");

    fireEvent.click(closeButton);
    await waitForElementToBeRemoved(() => screen.queryByText("Close"));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
