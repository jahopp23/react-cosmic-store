import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

import STRIPE_PUBLISHABLE from './lib/config/stripe'


const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
    alert('Payment Successful');
    console.log(data);
};

const errorPayment = data => {
    alert('Payment Error');
    console.log(data);
};

const onToken = (amount, title, author) => token => 
   axios.post(PAYMENT_SERVER_URL,
    {
        title,
        source: token.id,
        current: CURRENCY,
        amount: fromDollarToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({title, author, amount }) =>
  <StripeCheckout
      title={title}
      author={author}
      amount={fromDollarToCent(amount)}
      token={onToken(amount, author)}
      currency={CURRENCY}
      stipeKey={STRIPE_PUBLISHABLE}
    />

export default Checkout;