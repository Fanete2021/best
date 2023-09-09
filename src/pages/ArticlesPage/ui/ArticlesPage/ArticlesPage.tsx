import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {
    className
  } = props;

  return (
    <div className={classNames(styles.ArticlesPage, {}, [ className ])}>
      Articles page
    </div>
  );
};

export default memo(ArticlesPage);