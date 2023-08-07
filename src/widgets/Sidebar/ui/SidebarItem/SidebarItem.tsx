import React, { memo } from 'react';
import styles from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemsProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemsProps) => {
  const {
    item,
    collapsed
  } = props;

  const { t } = useTranslation();

  const mods: Record<string, boolean> = {
    [styles.collapsed]: collapsed
  };

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(styles.item, mods, [])}
    >
      <item.Icon className={styles.icon}/>
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
});
