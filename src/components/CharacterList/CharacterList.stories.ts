import type { Meta, StoryObj } from "@storybook/react";
import CharacterList from ".";
import { allCharacters } from "./__mock__";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CharacterList> = {
  title: "Molecules/CharacterList",
  component: CharacterList,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CharacterList>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CharactersList: Story = {
  args: {
    allCharacters,
  },
  parameters: {},
};
