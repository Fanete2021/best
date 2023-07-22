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

export const PrimaryLight: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const PrimaryDark: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [ ThemeDecorator(Theme.DARK) ]
};

export const SecondaryLight: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.SECONDARY
  },
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const SecondaryDark: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.SECONDARY
  },
  decorators: [ ThemeDecorator(Theme.DARK) ]
};
