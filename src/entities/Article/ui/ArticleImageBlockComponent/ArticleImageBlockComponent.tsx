import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { Text, TextAlign } from 'shared/ui';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const {
    className,
    block
  } = props;

  return (
    <div className={classNames(styles.ArticleImageBlockComponent, {}, [ className ])}>
      <img
        className={styles.img}
        src={block.src}
        alt={block.title}
      />

      {block.title && (
        <Text
          text={block.title}
          align={TextAlign.CENTER}
        />
      )}
    </div>
  );
});
