import React, {FC, useState} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from "./Sidebar.module.scss";
import {ThemeSwitcher} from "shared/ui";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div
      className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}
    >
      <button onClick={onToggle}>
        TOGGLE
      </button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
