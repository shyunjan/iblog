import getBlogAPI from '../apis/getBlogsAPI';
import { BlogType } from '../../types/BlogType';

export default async (searchCondition: string): Promise<BlogType[]> => {
  console.log('searchCondition =', searchCondition);
  const apiData = await getBlogAPI();
  switch (searchCondition) {
    case 'Top Rated':
      return apiData.slice(0, 6);
    case 'Recommended':
      return apiData.slice(6, 12);
    case 'New':
      return apiData.slice(apiData.length - 6, apiData.length);
    case 'Favorite':
      return apiData.slice(12, 18);
    default:
      return [];
  }
};
