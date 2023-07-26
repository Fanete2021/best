import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  args: {
    title: 'title',
    text: 'text'
  }
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const Dark: Story = {
  decorators: [ ThemeDecorator(Theme.DARK) ]
};