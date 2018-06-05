const config = {
  app: {
    port: process.env.PORT || 5000
  },
  bucket : {
    slug: process.env.SLUG || 'react-store',
    write_key: process.env.WRITE_KEY ||'',
    read_key: process.env.READ_KEY ||''
  }
}

module.exports = config;
