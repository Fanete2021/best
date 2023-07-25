import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, Modal } from 'shared/ui';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [ isAuthModal, setIsAuthModal ] = useState<boolean>(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [ className ])}>
      <div className={styles.links}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onOpenModal}
        >
          {t('Войти')}
        </Button>

        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      </div>
    </div>
  );
};