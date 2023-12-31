import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src,
    size,
    alt
  } = props;

  const style = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100
    };
  }, [ size ]);

  return (
    <img
      className={classNames(styles.Avatar, {}, [ className ])}
      src={src}
      alt={alt}
      style={style}
    />
  );
});
