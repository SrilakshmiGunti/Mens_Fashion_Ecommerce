// const paypal = require("paypal-rest-sdk");

// paypal.configure({
//   mode: "",
//   client_id: "",
//   client_secret: "",
// });

// module.exports = paypal;

const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: process.env.PAYPAL_MODE || 'sandbox', // Use 'sandbox' or 'live'
  client_id: process.env.PAYPAL_CLIENT_ID, // Your PayPal client ID
  client_secret: process.env.PAYPAL_CLIENT_SECRET, // Your PayPal client secret
});

module.exports = paypal;
