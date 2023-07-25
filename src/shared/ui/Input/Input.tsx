import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const [ isFocused, setIsFocused ] = useState<boolean>(false);
  const [ caretPosition, setCaretPosition ] = useState<number>(0);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [ autofocus ]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div
      className={classNames(styles.InputWrapper, {}, [ className ])}
    >
      {placeholder &&
        <div className={styles.placeholder}>
          {`${placeholder}>`}
        </div>
      }

      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          className={styles.input}
          value={value}
          onChange={onChangeHandler}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />

        {isFocused &&
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        }
      </div>
    </div>
  );
});