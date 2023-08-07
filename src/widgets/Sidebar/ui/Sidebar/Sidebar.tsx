import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { SidebarItem, SidebarItemsList } from 'widgets/Sidebar';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [ collapsed, setCollapsed ] = useState<boolean>(false);

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
        {SidebarItemsList.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
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
});
