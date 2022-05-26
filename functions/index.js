const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51ItVZZSCiK4ETAb8Qoq52ja9c5RGpAZQfd64zOKhILb3gghsE0UbXG7KT5EFi54izf3uz9sm5eArWFEyoT2ZS1Rj00AhsctDdV"
);

//API

// App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request recived", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
