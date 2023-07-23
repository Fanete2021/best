import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Text'
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Light: Story = {
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const Dark: Story = {
  decorators: [ ThemeDecorator(Theme.DARK) ]
};