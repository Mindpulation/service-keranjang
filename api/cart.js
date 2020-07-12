

const express = require('express');
const app =  express.Router();

app.get("/runall", async (_,res)=>{    
  res.status(200).send({result : await cart.find.findAll()});
});

app.post("/buffilter", async (req, res)=>{  
  res.status(200).send({result: await cart.find.findFilter(req.body.buf)});
});

module.exports = app;