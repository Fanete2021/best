import React, {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LanguageSwitcher} from 'widgets/LanguageSwitcher';
import {Button, ThemeButton} from 'shared/ui';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}
    >
      <Button
        theme={ThemeButton.CLEAR}
        onClick={onToggle}
      >
        TOGGLE
      </Button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.lang}/>
      </div>
    </div>
  );
};
