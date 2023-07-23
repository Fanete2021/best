import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/'
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Light: Story = {
  args: {
    children: 'Текст',
  },
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const Dark: Story = {
  args: {
    children: 'Текст',
  },
  decorators: [ ThemeDecorator(Theme.DARK) ]
};