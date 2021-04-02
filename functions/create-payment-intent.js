// domain/.netlify/functions/create-payment-intent

require('dotenv').config(); // get dotenv package to access to .env

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY); // get stripe package and pass stripe the secret key from .env

exports.handler = async function (event, context) {
  // recieve event object from the app by axios post request. and then communicate with stripe to get the object including clientSecret and return it to the app where the axios request comes from.
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
    // in a real server, you need 'cart' to iterate over to grab the item matching with one from your own server

    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        // use stripe with paymentIntes method
        amount: calculateOrderAmount(),
        currency: 'usd',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }), // server gets object including client_secret from stripe
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }

  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  };
};
