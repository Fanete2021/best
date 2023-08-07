import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [ StoreDecorator({}) ]
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const Dark: Story = {
  decorators: [ ThemeDecorator(Theme.DARK) ]
};