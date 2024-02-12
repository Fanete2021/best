import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProfilePageHeader.module.scss';
import { Button, ButtonTheme, Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const {
    className
  } = props;

  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [ dispatch ]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [ dispatch ]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [ dispatch ]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [ className ])}>
      <Text
        title={t('Профиль')}
      />

      {canEdit && (
        <div className={styles.btnsWrapper}>
          {readonly
            ? (
              <Button
                theme={ButtonTheme.OUTLINE}
                className={styles.editBtn}
                onClick={onEdit}
              >
                {t('Редактировать')}
              </Button>
            )
            : (
              <>
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  className={styles.cancelBtn}
                  onClick={onCancelEdit}
                >
                  {t('Отменить')}
                </Button>

                <Button
                  theme={ButtonTheme.OUTLINE}
                  className={styles.saveBtn}
                  onClick={onSave}
                >
                  {t('Сохранить')}
                </Button>
              </>

            )
          }
        </div>
      )}
    </div>
  );
};
