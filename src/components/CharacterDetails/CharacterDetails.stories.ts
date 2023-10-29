import type { Meta, StoryObj } from "@storybook/react";
import CharacterDetails from ".";
import { dialogData } from "./__mock__";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CharacterDetails> = {
  title: "Atoms/CharacterDetails",
  component: CharacterDetails,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CharacterDetails>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CharacterDetail: Story = {
  args: {
    dialogData,
    dialogOpen: true,
    onDialogClose: () => {},
  },
  parameters: {},
};
