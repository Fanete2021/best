import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [ StoreDecorator({}) ]
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const Dark: Story = {
  decorators: [ ThemeDecorator(Theme.DARK) ]
};

export const AuthNavbar: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ user: { authData: {} } })
  ]
};

