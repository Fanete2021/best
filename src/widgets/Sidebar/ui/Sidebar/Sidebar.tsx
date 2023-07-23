import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { AppLink, AppLinkTheme, Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [ collapsed, setCollapsed ] = useState<boolean>(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [ className ])}
    >
      <Button
        data-testid='sidebar-toggle'
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={onToggle}
        className={styles.collapsedBtn}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={styles.items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={styles.item}>
          <MainIcon className={styles.icon}/>
          <span className={styles.link}>{t('Главная')}</span>
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={styles.item}>
          <AboutIcon className={styles.icon}/>
          <span className={styles.link}>{t('О сайте')}</span>
        </AppLink>
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          short={collapsed}
          className={styles.lang}
        />
      </div>
    </div>
  );
};
