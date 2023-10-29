import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Character from "..";
import { item } from "../__mock__";

describe("Character", () => {
  // Renders an image and name of the character
  it("should render image and name", () => {
    const onCharacterClick = jest.fn();

    render(<Character item={item} onCharacterClick={onCharacterClick} />);

    expect(screen.getByAltText("Jim")).toBeInTheDocument();
    expect(screen.getByText("Jim")).toBeInTheDocument();
  });

  // Calls onCharacterClick function when the character box is clicked
  it("should call onCharacterClick when character box is clicked", () => {
    const onCharacterClick = jest.fn();
    render(<Character item={item} onCharacterClick={onCharacterClick} />);

    fireEvent.click(screen.getByTestId("img-1"));

    expect(onCharacterClick).toHaveBeenCalledWith(item);
  });

  // Displays the character's name in an ellipsis format
  it("should display character's name in ellipsis format", () => {
    const testItem = {
      ...item,
      name: "Very Long Character Name That Should Be Truncated",
    };
    const onCharacterClick = jest.fn();
    render(<Character item={testItem} onCharacterClick={onCharacterClick} />);

    expect(
      screen.getByText("Very Long Character Name That Should Be Truncated")
    ).toHaveStyle(
      "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 250px;"
    );
  });

  // Displays a yellow background color when the character box is hovered over
  it("should display yellow background color on hover", () => {
    const onCharacterClick = jest.fn();
    render(<Character item={item} onCharacterClick={onCharacterClick} />);

    fireEvent.mouseEnter(screen.getByTestId("box-1"));
    console.debug(
      " screen.getByTestId('box-1') ",
      screen.getByTestId("box-1").style
    );

    expect(screen.getByTestId("box-1")).toHaveStyle("background-color: yellow");
  });

  // Supports custom width and height for the character image
  it("should support custom width and height for character image", () => {
    const onCharacterClick = jest.fn();
    render(<Character item={item} onCharacterClick={onCharacterClick} />);

    expect(screen.getByAltText("Jim")).toHaveAttribute("width", "250");
    expect(screen.getByAltText("Jim")).toHaveAttribute("height", "250");
  });
});
