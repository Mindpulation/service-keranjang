const Cart = require('../model/Cart/index');
const cart = new Cart("mongodb://127.0.0.1:27017/");

const express = require('express');
const app =  express.Router();

app.get("/runall", async (_,res)=>{  
  res.status(200).send({result : await cart.find.findAll()});
});

app.post("/buffilter", async (req, res)=>{  
  res.status(200).send({result: await cart.find.findFilter(req.body.buf)});
});

module.exports = app;