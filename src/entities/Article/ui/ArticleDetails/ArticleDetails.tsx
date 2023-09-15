import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetails.module.scss';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from 'entities/Article/model/selectors/articleDetails';
import { useTranslation } from 'react-i18next';
import { Avatar, Icon, Skeleton, Text, TextAlign, TextSize } from 'shared/ui';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {
    className,
    id
  } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const data = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />;
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [ dispatch, id ]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} border={'50%'}/>
        <Skeleton className={styles.title} width={300} height={32}/>
        <Skeleton className={styles.skeleton} width={600} height={24}/>
        <Skeleton className={styles.skeleton} width={'100%'} height={200}/>
        <Skeleton className={styles.skeleton} width={'100%'} height={200}/>
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar
            size={200}
            src={data?.img}
            className={styles.avatar}
          />
        </div>

        <Text
          title={data?.title}
          text={data?.subtitle}
          className={styles.title}
          size={TextSize.M}
        />

        <div className={styles.articleInfo}>
          <Icon Svg={EyeIcon} className={styles.icon} />
          <Text text={String(data?.views)}/>
        </div>

        <div className={styles.articleInfo}>
          <Icon Svg={CalendarIcon} className={styles.icon} />
          <Text text={data?.createdAt}/>
        </div>

        {data?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles.ArticleDetails, {}, [ className ])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
