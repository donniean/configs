const merge = require('webpack-merge');

const base = require('./base');
const es6 = require('./es6');
const es5 = require('./es5');
const react = require('./react');
const vue = require('./vue');
const wechatMiniprogram = require('./wechat-miniprogram');
const appcan = require('./appcan');

module.exports = {
  es6: merge({}, base, es6),
  es5: merge({}, base, es5),
  react: merge({}, base, es6, react),
  vue: merge({}, base, es6, vue),
  'wechat-miniprogram': merge({}, base, es6, wechatMiniprogram),
  appcan: merge({}, base, es5, appcan),
};
