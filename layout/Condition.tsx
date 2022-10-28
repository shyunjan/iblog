import { NextPage } from 'next';
import {
  StarBorder,
  WorkspacePremium,
  NewReleasesOutlined,
  FavoriteBorder,
} from '@mui/icons-material';
import ConditionCard from '../components/ConditionCard';

const Condition: NextPage = (): JSX.Element => {
  return (
    <>
      <ConditionCard
        CardIcon={StarBorder}
        searchCondition="Top Rated"
        stats="124 blogs"
        color="slateblue"
      />
      <ConditionCard
        CardIcon={WorkspacePremium}
        searchCondition="Recommended"
        stats="52 blogs"
        color="steelblue"
      />
      <ConditionCard
        CardIcon={NewReleasesOutlined}
        searchCondition="New"
        stats="89 blogs"
        color="tomato"
      />
      <ConditionCard
        CardIcon={FavoriteBorder}
        searchCondition="Favorite"
        stats="26 blogs"
        color="orange"
      />
    </>
  );
};

export default Condition;
