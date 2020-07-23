const Get = require('../controller/get');
const get = new Get();

const Post = require('../controller/post');
const post = new Post();

const Put = require('../controller/put');
const put = new Put();

const Del = require('../controller/delete');
const del = new Del();

const express = require('express');
const app =  express.Router();

app.get("/getId/:id",  async (req, res)=>{
  let id = req.params.id;    
  res.status(200).send({result:await get.getById(id)})
});

app.post("/in", async (req, res)=>{  
  res.status(200).send({result: await post.postOne(req.body.data)})
})

app.put("/updItem/:id", async (req, res)=>{
  res.status(200).send({result: await put.updateItem(req.params.id, req.body.item)})
});



module.exports = app;