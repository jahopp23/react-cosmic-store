const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.cosmicjs.com/v1/react-store'
  : 'http://localhost:3000';

export default PAYMENT_SERVER_URL