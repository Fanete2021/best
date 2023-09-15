import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  args: {
    text: 'export default meta;\n' +
      'type Story = StoryObj<typeof Code>;\n' +
      '\n' +
      'export const Light: Story = {\n' +
      '  decorators: [ ThemeDecorator(Theme.LIGHT) ]\n' +
      '};\n' +
      '\n' +
      'export const Dark: Story = {\n' +
      '  decorators: [ ThemeDecorator(Theme.DARK) ]\n' +
      '};'
  }
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Light: Story = {
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const Dark: Story = {
  decorators: [ ThemeDecorator(Theme.DARK) ]
};