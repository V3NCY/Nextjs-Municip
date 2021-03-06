const path = require('path')

module.exports = {

  sassOptions: {

    includePaths: [path.join(__dirname, 'styles')],
    images: {
      domains: ['res.cloudinary.com/']
    },

  },


  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },  
  env: {
    API_URL: "https://graphql-master-server.herokuapp.com/graphql"
  }
}