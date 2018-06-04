const config = {
  app: {
    port: process.env.PORT || 5000
  },
  bucket : {
    slug: process.env.SLUG || 'react-store',
    write_key: process.env.WRITE_KEY ||'GFljrCW01xVT18esxFbRtuYyMUtBXASVf7Iff8VyzyT8k0otyU',
    read_key: process.env.READ_KEY ||'A6hwJLMs07UoQfhXveOgf7X2wakdc8h7xrDRAGEntLM0vkd1w1'
  }
}

module.exports = config;
