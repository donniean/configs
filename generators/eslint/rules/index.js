const merge = require('webpack-merge');

const airbnbBase = require('./airbnb-base');
const airbnbBaseLegacy = require('./airbnb-base-legacy');
const airbnbReact = require('./airbnb-react');
const base = require('./base');
const es6WithoutAirbnb = require('./es6-without-airbnb');
const es5WithoutAirbnb = require('./es5-without-airbnb');
const reactWithoutAirbnb = require('./react-without-airbnb');
const vue = require('./vue');
const wechatMiniprogram = require('./wechat-miniprogram');
const appcan = require('./appcan');

const [es6, es5, react] = [
  merge({}, airbnbBase, base, es6WithoutAirbnb),
  merge({}, airbnbBaseLegacy, base, es5WithoutAirbnb),
  merge({}, airbnbReact, base, es6WithoutAirbnb, reactWithoutAirbnb),
];

module.exports = {
  es6,
  es5,
  react,
  vue: merge({}, es6, vue),
  'wechat-miniprogram': merge({}, es6, wechatMiniprogram),
  appcan: merge({}, es5, appcan),
};
