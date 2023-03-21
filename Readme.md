# Simplifeye User Registration

This is a user registration system that enables users to sign up and log in to the SimplifyEye platform. It's a secure and easy-to-use system that utilizes the Stripe API for payment processing.

# Features

User registration and login
Stripe payment processing
Secure password storage
Responsive UI design
How to Navigate This Project

1. stripefrontend/ contains the frontend code for the user registration system
2. stripebackend/ contains the backend code for the user registration system

# Why I Built the Project This Way

I built this project using JavaScript and Node.js because they are versatile and widely-used languages that are great for building web applications. I chose to use the Stripe API because it's a well-documented and easy-to-use payment processing system that integrates well with Node.js.

# If I Had More Time I Would Change This

If I had more time, I would add more payment processing options to the system to make it more flexible for users. I would also add more validation and error handling to the frontend code to ensure a smoother user experience.

# About this Project

The SimplifyEye User Registration system is integrated with Stripe payment processing API, which allows users to securely make payments within the system.

The integration includes both frontend and backend code, written in JavaScript and Node.js respectively, and utilizes the Stripe JavaScript and Node.js libraries to communicate with the Stripe API.

# Getting Started 
 
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

Note: You need to create a .env file in the stripebackend/ directory with your Stripe API keys to run the project.
