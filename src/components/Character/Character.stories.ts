import type { Meta, StoryObj } from "@storybook/react";
import Character from ".";
import { item } from "./__mock__";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Character> = {
  title: "Atoms/Character",
  component: Character,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Character>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CharacterCard: Story = {
  args: {
    item,
    onCharacterClick: () => {
      console.log("clicked");
    },
  },
  parameters: {},
};
