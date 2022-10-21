import Head from 'next/head';
import { Grid, styled } from '@mui/material';
import Item from '@mui/material/Grid';
import Filter from './Filter';
import TopBar from './TopBar';
import Condition from './Condition';

type Props = {
  children: JSX.Element;
};

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
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <LayoutItemWhite>
            <Filter />
          </LayoutItemWhite>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <LayoutItemWhite>
                <TopBar />
              </LayoutItemWhite>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ display: 'flex', p: '16px 0px' }}>
                <Condition />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <LayoutItemWhite>{children}</LayoutItemWhite>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <footer className="footer">
        <span>ITECH company. 2022.</span>
      </footer>
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
