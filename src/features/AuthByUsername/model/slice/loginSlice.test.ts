import { loginActions, LoginSchema } from 'features/AuthByUsername';
import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'admin' };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin1')))
      .toEqual({ username: 'admin1' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123')))
      .toEqual({ password: '123123' });
  });
});