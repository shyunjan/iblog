import getBlogAPI from '../apis/getBlogsAPI';
import { BlogWithConditionType } from '../../types/BlogType';

export default async (searchCondition: string): Promise<BlogWithConditionType> => {
  console.log('searchCondition =', searchCondition);
  return {
    searchCondition,
    /* 테스트니까 앞에서 6개의 블로그 기사만 리턴한다 */
    blogs: (await getBlogAPI()).slice(0, 6),
  };
};
