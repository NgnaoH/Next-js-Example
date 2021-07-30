const path = require('path')
const nextTranslate = require('next-translate')

module.exports = {
  reactStrictMode: true,
  env: {
    DB_HOST: "localhost",
    DB_PORT: "8000"
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  images: {
    domains: ['okiro.fueko.net'],
  },
  ...nextTranslate(),
}