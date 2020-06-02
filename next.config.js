require('dotenv').config();
module.exports = {
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 3000
  }
};
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS()