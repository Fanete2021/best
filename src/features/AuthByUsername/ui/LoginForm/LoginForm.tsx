import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, Input, Text, TextTheme } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState, loginActions, loginByUsername } from 'features/AuthByUsername';
import i18n from 'shared/config/i18n/i18n';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

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
  );
});
