import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import StripeCheckout from "react-stripe-checkout"
import axios from 'axios';

function App() {
  let customer_Id = '';
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

    axios({url: 'http://localhost:8282/payment',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: body})
  .then(response => {
    customer_Id = response.data.id
    console.log(customer_Id);
    document.getElementById('stripe-block').classList.add('d-none');
    document.getElementById('id-block').innerText = `User Has been Succesfully created. The user id is ${customer_Id}`;
    document.getElementById('id-block').classList.remove('d-none');
  }).catch(error => console.log(error));
  };


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
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
          <button  id='stripe-block' className="btn-large blue">Create</button>
        </StripeCheckout>
        <p className='d-none' id='id-block'></p>

      </header>
    </div>
    
  );
}

export default App;
