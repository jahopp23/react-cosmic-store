const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_STRIPE_KEY'
  : 'sk_test_STRIPE_KEY';

export default STRIPE_PUBLISHABLE;


