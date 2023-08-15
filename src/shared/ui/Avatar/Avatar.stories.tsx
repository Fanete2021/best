import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AvatarImg from './avatar.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/AppLink',
  component: Avatar,
  args: {
    src: AvatarImg,
    size: 150
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Light: Story = {
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const Dark: Story = {
  decorators: [ ThemeDecorator(Theme.DARK) ]
};