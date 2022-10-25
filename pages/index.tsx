import { Box, styled, Typography, Stack, Chip, Button } from '@mui/material';
import type { NextPage } from 'next';
import BlogSummaryBox from '../components/BlogSummaryBox';
import { BlogSummaryType } from '../types';
// import Image from 'next/image';

/* Blog Summary 검색 결과 배열: 나중에 API로 받아오도록 하자 */
const blogSearchArr: BlogSummaryType[] = [
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
    tags: ['Node.js', 'NestJS', 'Mongoose', 'MongoDB', 'Redis'],
  },
  {
    title: 'Blog 5 Title',
    contentsSummary:
      '블로그 5 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...블로그 4 내용...',
    tags: ['Java', 'Spring', 'WebSocket', 'Node.js', 'React.js', 'MySQL', 'Redis'],
  },
];

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Typography sx={{ m: '5px', mb: '15px', fontWeight: 800, fontSize: 18 }}>
        Recommended
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexFlow: 'row wrap',
        }}
      >
        {blogSearchArr.map((b, i) => (
          <BlogSummaryBox
            key={i}
            title={b.title}
            contentsSummary={b.contentsSummary}
            tags={b.tags}
          />
        ))}
      </Box>
      {/* <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', justifyContent: 'left' }}></Stack> */}
    </>
  );
};

export default Home;
