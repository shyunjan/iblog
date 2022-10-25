import React from 'react';
import { Box, styled, Typography, Stack, Chip, Button } from '@mui/material';
import { BlogSummaryType } from '../types';

const TagChip = styled(Chip)({ color: 'gray', marginRight: '8px', marginBottom: '8px' });
const BlogSummaryButton = styled(Button)({
  width: '120px',
  borderRadius: '20px',
  textTransform: 'none',
  fontWeight: 600,
  margin: '5px',
});

export default ({ title, contentsSummary: summary, tags = [] }: BlogSummaryType): JSX.Element => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        height: '290px',
        width: '290px',
        borderRadius: '10px',
        padding: '6px 10px',
      }}
    >
      <Typography sx={{ m: '10px', fontWeight: 600, fontSize: 16 }}>{title}</Typography>
      <Typography sx={{ m: '10px', height: '32%', overflow: 'hidden' }}>{summary}</Typography>
      <Box sx={{ mt: '10px', mb: '0px' }}>
        {tags.map((t, i) => (
          <TagChip key={i} label={t} />
        ))}
      </Box>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <BlogSummaryButton variant="contained">Edit</BlogSummaryButton>
        <BlogSummaryButton variant="outlined">Share</BlogSummaryButton>
      </Stack>
    </Box>
  );
};
