import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from "react-stripe-checkout"

function App() {

  const [product, setProduct] = useState({
    name: "React from FB",
    price : 10,
    productBy: "facebook"
  });

  const makePayment = token => {
    const body = {
      token ,
      product,
    };
    const headers = {
      "Content-type": "application/json"
    };

    fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("RESPONSE",response);
    })
    .catch(error => console.log(error));
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
           Customer Registration and payment
        </a>
        <StripeCheckout stripeKey="pk_test_51KsEYXC6Z4D3rvlBmtgCgQfHJ5X1443spQY2OZMYnq2KYsxdlljqg9pyiuYMhpm2vIzdIXvJE0getLjpAqlfHc8N00tppI2Ktb"
         token={makePayment}
         name="Create user"
         amount={product.price * 100}
        >
          <button className="btn-large blue">Create</button>
        </StripeCheckout>

      </header>
    </div>
    
  );
}

export default App;
