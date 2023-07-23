import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, Modal } from 'shared/ui';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [ isAuthModal, setIsAuthModal ] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [ className ])}>
      <div className={styles.links}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onToggleModal}
        >
          {t('Войти')}
        </Button>

        <Modal
          isOpen={isAuthModal}
          onClose={onToggleModal}
        >
          <div>{t('TOGGLE')}</div>
        </Modal>
      </div>
    </div>
  );
};