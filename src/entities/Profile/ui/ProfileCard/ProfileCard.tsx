import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileError, getProfileIsLoading } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, Input, Text } from 'shared/ui';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className
  } = props;

  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div
      className={classNames(styles.ProfileCard, {}, [ className ])}
    >
      <div className={styles.header}>
        <Text
          title={t('Профиль')}
        />

        <Button
          theme={ButtonTheme.OUTLINE}
          className={styles.editBtn}
        >
          {t('Редактировать')}
        </Button>
      </div>

      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваша имя')}
          className={styles.input}
        />

        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={styles.input}
        />
      </div>
    </div>
  );
};
