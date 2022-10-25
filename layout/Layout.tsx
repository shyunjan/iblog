import Head from 'next/head';
import { CssBaseline, Grid, styled } from '@mui/material';
import Item from '@mui/material/Grid';
import Filter from './Filter';
import TopBar from './TopBar';
import Condition from './Condition';
import { Container } from '@mui/system';

type Props = {
  children: JSX.Element;
};

const FlexGrid = styled(Grid)({ display: 'flex' });
const BasicItem = { padding: '4px 10px', borderRadius: '8px' };
const LayoutItemWhite = styled(Item)({
  ...BasicItem,
  backgroundColor: 'white',
});

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>iBlog</title>
        <meta name="description" content="Powered by ITECH company" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Container maxWidth="xl">
        <FlexGrid container spacing={3} height="92vh">
          <FlexGrid item xs={2}>
            {/* 좌측 필터 옵션 영역 */}
            <LayoutItemWhite sx={{ flexGrow: 1 }}>
              <Filter />
            </LayoutItemWhite>
          </FlexGrid>
          <FlexGrid item xs={10} sx={{ flexDirection: 'column' }}>
            {/* Top Bar 영역 */}
            <LayoutItemWhite>
              <TopBar />
            </LayoutItemWhite>
            {/* 검색 조건 탭 영역 */}
            <Item
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '20px 0px',
                mb: '10px',
                pt: '16px',
                pb: '16px',
              }}
            >
              <Condition />
            </Item>
            {/* 결과 내용 영역 */}
            <Item sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>{children}</Item>
          </FlexGrid>
        </FlexGrid>
        <footer className="footer">
          <span>ITECH company. 2022.</span>
        </footer>
        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/assets/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer> */}
      </Container>
      <style jsx global>{`
        .footer {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          margin: 10px 0px;
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
        }
        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }
      `}</style>
    </>
  );
};

export default Layout;
