import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { AppLink, Avatar, Skeleton, Text } from 'shared/ui';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.CommentCard, {}, [ className ])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border={'50%'}/>
          <Skeleton width={100} height={16} className={styles.user}/>
        </div>
        <Skeleton className={styles.text} width={'100%'} height={50}/>
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(styles.CommentCard, {}, [ className ])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={styles.header}>
        {comment.user.avatar
          ? <Avatar size={30} src={comment.user.avatar} />
          : null
        }

        <Text className={styles.user} title={comment.user.username}/>
      </AppLink>

      <Text className={styles.text} text={comment.text}/>
    </div>
  );
});
