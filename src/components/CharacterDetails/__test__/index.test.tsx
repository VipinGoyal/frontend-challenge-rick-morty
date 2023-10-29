import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CharacterDetails from "..";
import { dialogData } from "../__mock__";

describe("CharacterDetails", () => {
  // Renders a dialog with character details when dialogOpen is true and dialogData is provided
  it("should render dialog with character details when dialogOpen is true and dialogData is provided", () => {
    const dialogOpen = true;

    const onDialogClose = jest.fn();

    render(
      <CharacterDetails
        dialogOpen={dialogOpen}
        dialogData={dialogData}
        onDialogClose={onDialogClose}
      />
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Character Details")).toBeInTheDocument();
    expect(screen.getByAltText("Jim")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
  });

  // Displays character name, image, status, gender, species, location, and origin in the dialog
  it("should display character details in the dialog", () => {
    const dialogOpen = true;

    const onDialogClose = jest.fn();

    render(
      <CharacterDetails
        dialogOpen={dialogOpen}
        dialogData={dialogData}
        onDialogClose={onDialogClose}
      />
    );

    expect(screen.getByAltText("Jim")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
  });

  // Renders an empty dialog when dialogOpen is true but dialogData is undefined or null
  it("should render an empty dialog when dialogOpen is true but dialogData is undefined", () => {
    const dialogOpen = true;
    const dialogData = undefined;
    const onDialogClose = jest.fn();

    render(
      <CharacterDetails
        dialogOpen={dialogOpen}
        dialogData={dialogData}
        onDialogClose={onDialogClose}
      />
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  // Renders an empty dialog when dialogOpen is false
  it("should render an empty dialog when dialogOpen is false", () => {
    const dialogOpen = false;

    const onDialogClose = jest.fn();

    render(
      <CharacterDetails
        dialogOpen={dialogOpen}
        dialogData={dialogData}
        onDialogClose={onDialogClose}
      />
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
