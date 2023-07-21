import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.Navbar, {}, [ className ])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>
          {t('Главная')}
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};