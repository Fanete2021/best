import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginModal.module.scss';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    className,
    isOpen,
    onClose
  } = props;

  return (
    <Modal
      className={classNames(styles.LoginModal, {}, [ className ])}
      isOpen={isOpen}
      onClose={onClose}
      lazy={true}
    >
      <LoginForm />
    </Modal>
  );
};