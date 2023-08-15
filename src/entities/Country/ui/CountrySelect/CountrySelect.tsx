import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Armenia, content: Country.Armenia },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly
  } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [ onChange ]);

  return (
    <Select
      className={classNames('', {}, [ className ])}
      value={value}
      label={t('Укажите страну')}
      options={options}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
