import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(styles.PageError, {}, [ className ])} >
      <p>
        {t('Произошла непредвиденная ошибка')}
      </p>

      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={reloadPage}
      >
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
