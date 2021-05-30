const { response } = require("express");
// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for all my quotes using /quotes if you want a random one use /quotes/random, or use quotes/search to find one also you can do the same with /author/search to find the one you want");
});

//START OF YOUR CODE...
app.get("/quotes", function (req, res) {
  n1=quotes.map((h1)=>h1.quote)
  res.status(200).json({Citas:n1})
});

app.get("/quotes/random", function (req, res) {
  n2 = Math.floor(Math.random()* quotes.length)
  n1=quotes[n2].quote
  res.status(200).json({Cita_al_azar:n1})
});


app.get("/quotes/search", function (req, res) {
  let searchQuery = req.query.term; 
  console.log(searchQuery)
  // level 2  filter sobre el json.quotes
  let n2 =  quotes.filter((quote) => quote.quote.includes(searchQuery) );
  res.status(200).json({resultado:n2})
});

app.get("/author/search", function (req, res) {
  let searchQuery = req.query.term; 
  console.log(searchQuery)
  // level 2  filter sobre el json.quotes
  let n2 =  quotes.filter((quote) => quote.author.includes(searchQuery) );
  res.status(200).json({resultado:n2})
});





//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//


//Start our server so that it listens for HTTP requests!
let port = 5000;

app.listen( port, function () {
  console.log("Your app is listening on port " + port);
});
