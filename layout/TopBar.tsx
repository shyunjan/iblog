import { NextPage } from 'next';
import { useState } from 'react';
import {
  styled,
  Grid,
  Tabs,
  Tab,
  Paper,
  InputBase,
  IconButton,
  Avatar,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { STYLE } from '../constant';

const FlexGrid = styled(Grid)({
  ...STYLE.FLEX_CENTER,
  paddingRight: '4px',
});
const MenuTab = styled(Tab)({
  textTransform: 'none',
  padding: '0px',
  margin: '0px 30px',
  height: '80px',
});

const TopBar: NextPage = (): JSX.Element => {
  const [tabValue, setTabValue] = useState(0);
  const onTabChange = (event: unknown, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Paper
      component="form"
      elevation={0}
      sx={{ p: '0px 4px', display: 'flex', alignItems: 'center' }}
    >
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Tabs
            value={tabValue}
            onChange={onTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="standard"
            sx={{ paddingLeft: '40px' }}
          >
            <MenuTab id="tabMenu0" label="Blog" />
            <MenuTab id="tabMenu1" label="Board" />
            <MenuTab id="tabMenu2" label="Recruit" />
            <MenuTab id="tabMenu3" label="Admin" />
          </Tabs>
        </Grid>
        <FlexGrid item xs={3}>
          <InputBase
            placeholder="Search Words"
            inputProps={{ 'aria-label': 'search-input' }}
            sx={{ ml: 1, flex: 1 }}
          />
          <IconButton
            type="button"
            aria-label="search-icon"
            sx={{ p: '10px', backgroundColor: 'Lavender', borderRadius: '30%' }}
          >
            <SearchIcon />
          </IconButton>
        </FlexGrid>
        <FlexGrid item xs={2}>
          <Avatar
            alt="My Avatar"
            src="/assets/images/avatar-sample-1.jpg"
            sx={{ borderRadius: '40%', height: '50px', width: '50px' }}
          />
          <Card elevation={0}>
            <CardContent style={{ padding: '8px', paddingBottom: '8px', width: '170px' }}>
              <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                Manager
              </Typography>
              <Typography sx={{ color: 'darkgray', fontSize: 16, fontWeight: 550 }}>
                Hong GilDong
              </Typography>
            </CardContent>
          </Card>
        </FlexGrid>
      </Grid>
    </Paper>
  );
};

export default TopBar;
