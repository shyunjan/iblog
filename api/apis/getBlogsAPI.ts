import axios from 'axios';
import { BlogType } from '../../types/BlogType';

export default async (): Promise<BlogType[]> => {
  return (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
};
