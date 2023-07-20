import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ThemeButton} from 'shared/ui';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK
        ? <DarkIcon />
        : <LightIcon />
      }
    </Button>
  );
};
