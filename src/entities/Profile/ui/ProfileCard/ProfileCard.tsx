import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './ProfileCard.module.scss';
import { Profile } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { Avatar, Input, Loader, Select, Text, TextAlign, TextTheme } from 'shared/ui';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(styles.ProfileCard, {}, [ className, styles.loading ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(styles.ProfileCard, {}, [ className, styles.error ])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly
  };

  return (
    <div
      className={classNames(styles.ProfileCard, mods, [ className ])}
    >
      <div className={styles.data}>
        {data?.avatar &&
          <div
            className={styles.avatarWrapper}
          >
            <Avatar
              src={data.avatar}
            />
          </div>
        }

        <Input
          value={data?.first}
          placeholder={t('Ваша имя')}
          className={styles.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />

        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={styles.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />

        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={styles.input}
          onChange={onChangeAge}
          readonly={readonly}
        />

        <Input
          value={data?.city}
          placeholder={t('Город')}
          className={styles.input}
          onChange={onChangeCity}
          readonly={readonly}
        />

        <Input
          value={data?.username}
          placeholder={t('Никнэйм')}
          className={styles.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />

        <Input
          value={data?.avatar}
          placeholder={t('Аватар')}
          className={styles.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />

        <CurrencySelect
          className={styles.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />

        <CountrySelect
          className={styles.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
