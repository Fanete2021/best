import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './CommentList.module.scss';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.CommentList, {}, [ className ])}>
      {comments?.length
        ?
        comments.map(comment => (
          <CommentCard className={styles.comment} comment={comment} isLoading={isLoading}/>
        ))
        :
        <Text text={t('Комментарии отсутствуют')}/>
      }
    </div>
  );
});
