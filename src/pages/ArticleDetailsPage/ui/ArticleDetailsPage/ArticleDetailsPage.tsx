import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const {
    className
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ArticleDetailsPage, {}, [ className ])}>
      Article Details
    </div>
  );
};

export default memo(ArticleDetailsPage);