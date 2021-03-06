const express = require('express')
const my_module= require('./my-module');

console.log("my_module",my_module);

/* const express=require('express'); */
const getPrice=require('./math');
const final_price=getPrice(100);

console.log('final price',final_price);

/* console.log(express); */

const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World from express sercver')
})
 
app.listen(3000)