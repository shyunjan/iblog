import { SvgIconComponent } from '@mui/icons-material';
import { Box, Card, CardContent, Typography } from '@mui/material';
import useSWR, { useSWRConfig } from 'swr';
import { STYLE } from '../constants';
// import getBlogs from '../api/service/getBlogsService';

interface Props {
  CardIcon: SvgIconComponent;
  searchCondition: string;
  stats?: string;
  color?: string;
}

export default ({ CardIcon, searchCondition, stats, color }: Props): JSX.Element => {
  const { mutate } = useSWRConfig();
  // const {
  //   data: blogs,
  //   mutate: setBlogs,
  //   isValidating: isBlogsValidating,
  // } = useSWR(
  //   'jsonplaceholder.typicode.com/posts',
  //   async (searchCondition) => await getBlogs(searchCondition)
  // );
  const onClickCondition = () => mutate('searchCondition', searchCondition);
  // const onClickCondition = () => setBlogs(blogs);
  return (
    <>
      <Card
        onClick={onClickCondition}
        elevation={0}
        sx={{
          borderRadius: '20px',
          width: '252px',
          height: '60px',
          opacity: 0.75,
          backgroundColor: color ?? 'black',
          '&: hover': { opacity: [0.7, 0.65, 0.6], cursor: 'pointer' },
        }}
      >
        <CardContent sx={{ p: '10px 12px', display: 'flex' }}>
          <Box
            sx={{
              ...STYLE.FLEX_CENTER,
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              width: '40px',
              height: '40px',
              padding: '0px 5px',
            }}
          >
            <CardIcon sx={{ color: 'white', background: 'transparent' }} />
          </Box>
          <Card elevation={0} sx={{ background: 'transparent' }}>
            <CardContent sx={{ padding: '1px', margin: '0px 10px' }}>
              <Typography sx={{ color: 'lightgray', fontSize: 12 }}>{stats}</Typography>
              <Typography sx={{ color: 'white', fontSize: 14, fontWeight: 550 }}>
                {searchCondition}
              </Typography>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </>
  );
};
