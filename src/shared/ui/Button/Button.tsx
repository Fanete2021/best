import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    square,
    size = ButtonSize.M,
    children,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles.square]: square,
  };

  const additional: string[] = [ className, styles[theme], styles[size] ];

  return (
    <button
      type='button'
      className={classNames(styles.Button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
