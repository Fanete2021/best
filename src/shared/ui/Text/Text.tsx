import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT
  } = props;

  return (
    <div className={classNames(styles.Text, {}, [ className, styles[theme], styles[align] ])}>
      {title &&
        <p
          className={styles.title}
        >
          {title}
        </p>
      }

      {text &&
        <p
          className={styles.text}
        >
          {text}
        </p>
      }
    </div>
  );
});
