import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import BlogSummaryBox from '../components/BlogSummaryBox';
import { BlogSummaryType } from '../types';
import useSWR from 'swr';
// import Image from 'next/image';
import getBlogs from '../api/service/getBlogsService';
import { BlogType } from '../types/BlogType';
import { STYLE } from '../constants';

/* Blog Summary 검색 결과 배열: 나중에 API로 받아오도록 하자 */
const testBlogs: BlogSummaryType[] = [
  {
    title: 'Blog 1 Title',
    contentsSummary:
      '블로그 1 내용...블로그 1 내용...블로그 1 내용...블로그 1 내용...블로그 1 내용...블로그 1 내용...블로그 1 내용...내용...블로그 1 내용...블로그 1 내용...블로그 1 내용...블로그 1 내용...블로그 1 내용...블로그 1 내용...',
    tags: ['Node.js', 'HTML', 'CSS', 'React.js', 'Next.js'],
  },
  {
    title: 'Blog 2 Title',
    contentsSummary:
      '블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...',
    tags: ['Java', 'SpringBoot', 'Hibernate', 'Oracle', 'AWS'],
  },
  {
    title: 'Blog 3 Title',
    contentsSummary:
      '블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...블로그 3 내용...',
    tags: ['Node.js', 'KOA', 'Sequelize', 'MySQL', 'AWS'],
  },
  {
    title: 'Blog 4 Title',
    contentsSummary:
      '블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...',
    tags: ['Node.js', 'NestJS', 'Redis', 'Mongoose', 'MongoDB'],
  },
  {
    title: 'Blog 5 Title',
    contentsSummary:
      '블로그 5 내용...블로그 5 내용...블로그 5 내용...블로그 5 내용...블로그 5 내용...블로그 5 내용...블로그 5 내용...내용...블로그 5 내용...블로그 5 내용...블로그 5 내용...블로그 5 내용...블로그 5 내용...블로그 5 내용...',
    tags: ['Java', 'Spring', 'WebSocket', 'Node.js', 'React.js', 'MySQL', 'Redis'],
  },
  {
    title: 'Blog 6 Title',
    contentsSummary:
      '블로그 6 내용...블로그 6 내용...블로그 6 내용...블로그 6 내용...블로그 6 내용...블로그 6 내용...블로그 6 내용...내용...블로그 6 내용...블로그 6 내용...블로그 6 내용...블로그 6 내용...블로그 6 내용...블로그 6 내용...',
    tags: ['Python', 'MongoDB', 'Redis'],
  },
];

const Home: NextPage = (): JSX.Element => {
  const { data: searchCondition = 'Recommended' } = useSWR('searchCondition');
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  useEffect(() => {
    (async () => {
      const blogSearchResult: BlogType[] = await getBlogs(searchCondition);
      console.log(blogSearchResult);
      setBlogs(blogSearchResult);
    })();
  }, [searchCondition]);
  return (
    <>
      <Typography sx={{ m: '5px', mb: '15px', fontWeight: 800, fontSize: 18 }}>
        {searchCondition}
      </Typography>
      <Box display="flex" flexGrow={1} flexDirection="row" flexWrap="wrap">
        {blogs?.length > 0 ? (
          blogs.map((b, i) => (
            <BlogSummaryBox
              key={i}
              title={b.title.length > 25 ? `${b.title.substring(0, 25)}...` : b.title}
              contentsSummary={b.body}
              tags={testBlogs[i].tags}
            />
          ))
        ) : (
          <Box flexGrow={1} sx={{ ...STYLE.FLEX_CENTER }}>
            <h2>No Data</h2>
          </Box>
        )}
      </Box>
      {/* <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'left' }}></Stack> */}
    </>
  );
};

export default Home;
