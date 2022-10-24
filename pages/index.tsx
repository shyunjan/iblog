import { Box, styled, Typography, Stack, Chip, Button } from '@mui/material';
import type { NextPage } from 'next';
// import Image from 'next/image';

const BlogSummaryBox = styled(Box)({
  backgroundColor: 'white',
  height: '280px',
  width: '280px',
  borderRadius: '10px',
  padding: '6px 10px',
});
// const TagChip = styled(Chip)({ color: 'gray' });
const TagChip = styled(Chip)({ color: 'gray', marginRight: '8px', marginBottom: '8px' });
const BlogSummaryButton = styled(Button)({
  width: '120px',
  borderRadius: '10px',
  textTransform: 'none',
  fontWeight: 600,
  margin: '5px',
});

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Typography sx={{ m: '5px', mb: '15px', fontWeight: 800, fontSize: 18 }}>
        Recommended
      </Typography>
      <BlogSummaryBox>
        <Typography sx={{ m: '10px', fontWeight: 600, fontSize: 16 }}>Blog 1 Title</Typography>
        <Typography sx={{ m: '10px', height: '32%', overflow: 'hidden' }}>
          블로그 1 내용...블로그 1 내용...블로그 1 내용...블로그 1 내용...블로그 1 내용...블로그
          1블로그 1 내용... 내용...블로그 1 내용...블로그 1 내용...블로그 1 내용...블로그 1
          내용...블로그 1 내용...블로그 1 내용...
        </Typography>
        <Box sx={{ mt: '10px', mb: '0px' }}>
          <TagChip label="Node.js" />
          <TagChip label="HTML" />
          <TagChip label="CSS" />
          <TagChip label="React.js" />
          <TagChip label="Next.js" />
        </Box>
        <Stack direction="row" sx={{ justifyContent: 'center' }}>
          <BlogSummaryButton variant="contained">Edit</BlogSummaryButton>
          <BlogSummaryButton variant="outlined">Share</BlogSummaryButton>
        </Stack>
      </BlogSummaryBox>
    </>
  );
};

export default Home;
