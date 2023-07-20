import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from "./Navbar.module.scss";
import {AppLink, AppLinkTheme, ThemeSwitcher} from 'shared/ui';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />

      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>
          Главная
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};