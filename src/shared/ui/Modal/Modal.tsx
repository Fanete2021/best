import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';
import { Portal } from 'shared/ui';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    isOpen = false,
    onClose,
    children,
  } = props;

  const [ isClosing, setIsClosing ] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [ onClose ]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [ closeHandler ]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [ isOpen, onKeyDown ]);

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.closed]: isClosing
  };

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [ className ])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div
            className={styles.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
