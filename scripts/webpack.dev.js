const path = require('path');

const commonCfg = require('./webpack.common');

module.exports = Object.assign(
  {
    entry: {
      ['page-pc']: path.resolve(__dirname, `../src/page-pc/index.tsx`),
      ['preview']: path.resolve(__dirname, `../src/preview.tsx`),
      ['main']: path.resolve(__dirname, `../src/main/main.tsx`)
    }
  },
  commonCfg
);
