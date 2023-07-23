import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {

  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Light: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const Dark: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ ThemeDecorator(Theme.DARK) ]
};