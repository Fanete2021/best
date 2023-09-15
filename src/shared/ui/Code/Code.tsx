import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Code.module.scss';
import { Button, ButtonTheme } from 'shared/ui';
import CopyIcon from 'shared/assets/icons/copy.svg';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const {
    className,
    text
  } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [ text ]);

  return (
    <pre className={classNames(styles.Code, {}, [ className ])}>
      <Button
        className={styles.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={onCopy}
      >
        <CopyIcon className={styles.copyIcon}/>
      </Button>

      <code>
        {text}
      </code>
    </pre>
  );
});

