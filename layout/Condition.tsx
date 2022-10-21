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
        condition="Top Rated"
        stats="124 blogs"
        color="slateblue"
      />
      <ConditionCard
        CardIcon={WorkspacePremium}
        condition="Recommended"
        stats="52 blogs"
        color="steelblue"
      />
      <ConditionCard
        CardIcon={NewReleasesOutlined}
        condition="New"
        stats="89 blogs"
        color="tomato"
      />
      <ConditionCard
        CardIcon={FavoriteBorder}
        condition="Favorite"
        stats="89 blogs"
        color="orange"
      />
    </>
  );
};

export default Condition;
