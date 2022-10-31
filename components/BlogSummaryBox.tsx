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
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '292px',
        width: '276px',
        borderRadius: '15px',
        padding: '6px 10px',
        mr: '20px',
        mb: '10px',
      }}
    >
      <Typography sx={{ m: '10px', mb: '2px', fontWeight: 600, fontSize: 16 }}>{title}</Typography>
      <Typography flexGrow={1} overflow="hidden" m="2px 10px" mb="5px">
        {summary}
      </Typography>
      <Box m="3px 10px 0px 10px">
        {tags.map((t, i) => (
          <TagChip key={i} label={t} sx={{ mb: '5px' }} />
        ))}
      </Box>
      <Stack direction="row" sx={{ justifyContent: 'center' }}>
        <BlogSummaryButton variant="contained">Edit</BlogSummaryButton>
        <BlogSummaryButton variant="outlined">Share</BlogSummaryButton>
      </Stack>
    </Box>
  );
};
