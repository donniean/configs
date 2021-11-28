import { merge } from 'webpack-merge';

import airbnbBase from '@/eslint/rules/airbnb-base';
import airbnbReact from '@/eslint/rules/airbnb-react';
import base from '@/eslint/rules/base';
import es6WithoutAirbnb from '@/eslint/rules/es6-without-airbnb';
import reactWithoutAirbnb from '@/eslint/rules/react-without-airbnb';

const [es6, react] = [
  merge({}, airbnbBase, base, es6WithoutAirbnb),
  merge({}, airbnbReact, base, es6WithoutAirbnb, reactWithoutAirbnb),
];

export default {
  es6,
  react,
};
