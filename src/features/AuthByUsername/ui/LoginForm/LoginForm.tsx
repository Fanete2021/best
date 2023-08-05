import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, Input, Text, TextTheme } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginByUsername } from 'features/AuthByUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '../../model/slice/loginSlice';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [ dispatch ]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [ dispatch ]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [ dispatch, password, username ]);

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
    >
      <div className={classNames(styles.LoginForm, {}, [ className ])} >
        <Text
          title={t('Форма авторазиции')}
        />

        {error &&
          <Text
            theme={TextTheme.ERROR}
            text={t('Вы ввели неверный логин или пароль')}
          />
        }

        <Input
          type="text"
          className={styles.input}
          placeholder={t('Имя')}
          autofocus={true}
          onChange={onChangeUsername}
          value={username}
        />

        <Input
          type="text"
          className={styles.input}
          placeholder={t('Пароль')}
          onChange={onChangePassword}
          value={password}
        />

        <Button
          className={styles.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;