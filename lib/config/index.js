const config = {
  app: {
    port: process.env.PORT || 5000
  },
  bucket : {
    slug: process.env.SLUG || 'react-store',
    write_key: process.env.WRITE_KEY ||'JqXalnYKc1undXw86UQEjTE69D6OPyTTycy7atvN5sqn15ARLL',
    read_key: process.env.READ_KEY ||'5xw2oAUuRCOgY9NBExIgRxrUGMzqsgy5ufvNuSbhuPrd2XvjCr'
  }
}

module.exports = config;
