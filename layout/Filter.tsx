import React from 'react';
import List from '@mui/material/List';
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Checkbox,
  ListSubheader,
  styled,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Filter = (): JSX.Element => {
  /* 카테고리별 태그값 배열: 나중에 API로 받아오도록 하자 */
  const languages = ['C++', 'Java', 'JavaScript', 'TypeScript', 'Python'];
  const frameworks = ['Spring', 'NestJS', 'React.js', 'Next.js'];
  const databases = ['Oracle', 'MySQL', 'PostgreSQL'];

  const [languageOpen, setLanguageOpen] = React.useState(true);
  const [frameworkOpen, setFrameworkOpen] = React.useState(true);
  const [databaseOpen, setDatabaseOpen] = React.useState(false);

  const onClickLanguage = () => {
    setLanguageOpen((open) => !open);
  };
  const onClickFramework = () => {
    setFrameworkOpen((open) => !open);
  };
  const onClickDatabse = () => {
    setDatabaseOpen((open) => !open);
  };

  const CategoryLabel = styled(ListItemText)({ fontSize: '0.9rem', fontWeight: 700 });
  const TagItem = styled(ListItemButton)({ padding: '0px 4px' });
  const CheckboxLabel = styled(ListItemText)({ fontSize: '0.8rem' });

  return (
    <>
      <List
        aria-labelledby="list-header"
        subheader={
          <ListSubheader
            component="div"
            id="list-header"
            style={{ color: 'black', fontWeight: 600, fontSize: 18 }}
          >
            Filter
          </ListSubheader>
        }
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingTop: '15px' }}
      >
        <ListItemButton onClick={onClickLanguage}>
          <CategoryLabel primary="Language" disableTypography />
          {languageOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={languageOpen}>
          <List component="div" disablePadding>
            {languages.map((t) => (
              <ListItem key={t} disablePadding>
                <TagItem>
                  <Checkbox inputProps={{ 'aria-labelledby': `label-${t}` }} />
                  <CheckboxLabel id={`label-${t}`} primary={t} disableTypography />
                </TagItem>
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItemButton onClick={onClickFramework}>
          <CategoryLabel primary="Framework" disableTypography />
          {languageOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={frameworkOpen}>
          <List component="div" disablePadding>
            {frameworks.map((t) => (
              <ListItem key={t} disablePadding>
                <TagItem>
                  <Checkbox inputProps={{ 'aria-labelledby': `label-${t}` }} />
                  <CheckboxLabel id={`label-${t}`} primary={t} disableTypography />
                </TagItem>
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItemButton onClick={onClickDatabse}>
          <CategoryLabel primary="Databse" disableTypography />
          {databaseOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={databaseOpen}>
          <List component="div" disablePadding>
            {databases.map((t) => (
              <ListItem key={t} disablePadding>
                <TagItem>
                  <Checkbox inputProps={{ 'aria-labelledby': `label-${t}` }} />
                  <CheckboxLabel id={`label-${t}`} primary={t} disableTypography />
                </TagItem>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default Filter;
