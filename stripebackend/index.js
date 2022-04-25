const cors = require("cors");
const express = require("express");

//add stripe key
const stripe = require("stripe")("sk_test_51KsEYXC6Z4D3rvlBD77BSPK9G3IruuxjEjMQmvyyaMF9RtVlhtR8cOkkBAhUzQXKRWoe0KcLQCpd2UG0MouMLLjj00mwpZT8Yu")
const { v4: uuidv4 } = require('uuid');
// uuidv4();

const app = express();

//middleware
app.use(express.json());
app.use(cors());


//routes
app.get("/", (req,res) => {
    res.send("IT WORKS");
});

app.post("/payment", (req,res) => {
    const {product , token} = req.body;
    console.log("PRODUCT", product);
    console.log("PRICE", product.price);
    const idempontencyKey = uuidv4();

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        res.json(customer)})
    .catch(err => console.log(err));
});


//listen
app.listen(8282, () => console.log("LISTENING AT PORT 8282"));