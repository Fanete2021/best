import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, Modal } from 'shared/ui';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [ isAuthModal, setIsAuthModal ] = useState<boolean>(false);
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [ dispatch ]);

  if (authData) {
    return (
      <div className={classNames(styles.Navbar, {}, [ className ])}>
        <div className={styles.links}>
          <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={onLogout}
          >
            {t('Выйти')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.Navbar, {}, [ className ])}>
      <div className={styles.links}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onOpenModal}
        >
          {t('Войти')}
        </Button>

        {isAuthModal &&
          <LoginModal
            isOpen={isAuthModal}
            onClose={onCloseModal}
          />
        }
      </div>
    </div>
  );
};