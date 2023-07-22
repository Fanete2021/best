import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryLight: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ ThemeDecorator(Theme.DARK) ]
};

export const ClearLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
  decorators: [ ThemeDecorator(Theme.DARK) ]
};


export const OutlineLight: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
  decorators: [ ThemeDecorator(Theme.DARK) ]
};
