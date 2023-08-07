import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducerList = {
  profile: profileReducer
};

const ProfilePage = memo((props: ProfilePageProps) => {
  const {
    className
  } = props;

  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [ className ])} >
        {t('PROFILE PAGE')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
