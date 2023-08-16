import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [ StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Russia,
        first: 'Вася',
        lastname: 'Распутин',
        city: 'Moscow',
        currency: Currency.RUB,
      }
    }
  }) ]
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  decorators: [ ThemeDecorator(Theme.LIGHT) ]
};

export const Dark: Story = {
  decorators: [ ThemeDecorator(Theme.DARK) ]
};