import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  args: {}
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Light: Story = {
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const Dark: Story = {
  decorators: [ ThemeDecorator(Theme.DARK) ]
};