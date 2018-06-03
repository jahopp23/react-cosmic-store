const config = {
  app: {
    port: process.env.PORT || 5000
  },
  bucket : {
    slug: process.env.SLUG || 'react-store',
    write_key: process.env.WRITE_KEY ||'AkCXrMIftRraVX2o0jdREoV5pXiSpEVZqvUrzXSbhpvqiPbY8h',
    read_key: process.env.READ_KEY ||'Z0adVXMZTLVPntOqHgLnISRoIzvkoyeisuU434rsPw7tVrZXVO'
  }
}

module.exports = config;
