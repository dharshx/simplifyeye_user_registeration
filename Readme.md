# simplifeye_user_registration

# GettingStarted

The SimplifyEye User Registration system is integrated with Stripe payment processing API, which allows users to securely make payments within the system.


The integration includes both frontend and backend code, written in JavaScript and Node.js respectively, and utilizes the Stripe JavaScript and Node.js libraries to communicate with the Stripe API.


I have used node.js version 1.0.0 with dependencies listed below:-

"cors": "^2.8.5", 

"express": "^4.17.3",

"nodemon": "^2.0.15",

"stripe": "^8.218.0",

"uuid": "^8.3.2

# Installation

npm init -> To initialize node in the backend.

npx create-react-app stripefrontend -> To create react app in the frontend.

# Dependencies

For backend:-

npm i cors express stripe uuid nodemon -> To include all the packages and dependencies to run the files.

In package.json
 Under scripts, change from test to:-
  "scripts": {
    "start": "nodemon index.js"
  },
  
  For frontend:-
  
  npm install react-stripe-checkout -> To install payment checkout component which is open-source.
  
  npm i axios -> For axios installation.
  
### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm start` 

To run both the react app and the server in the backend.

The react app runs in port 3000.

The server runs in port 8282 which is configurable.

# Stripe

Below are the links provided by the company for the Stripe API steup & the connected accounts.

Stripe API Setup: https://stripe.com/docs/development/quickstart
Stripe Connected Accounts: https://stripe.com/docs/api/connected_accounts
Stripe Accounts API: https://stripe.com/docs/api/accounts

To view the publishable and secret API keys and record events and log: https://dashboard.stripe.com/test/apikeys


