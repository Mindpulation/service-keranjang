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

app.get("/runall", async (_,res)=>{    
  res.status(200).send({result : await get.getAll()});
});

app.get("/bufbrg", async (req, res)=>{    
  (req.query.idAnggota === undefined) ? res.status(400).send({result:false}) :
  res.status(200).send({result: await get.getBarangByAnggota(req.query.idAnggota)});
});

app.post("/cecsta", async (req, res)=>{
  (req.body.idAnggota === undefined || req.body.sta === undefined) ? res.status(400).send({result:false}) :
  res.status(200).send({result: await get.cekByAnggotaAndStatus(req.body.idAnggota, req.body.sta)});
});

app.post("/bufaas", async (req, res)=>{
  (req.body.idAnggota === undefined || req.body.sta === undefined) ? res.status(400).send({result:false}) :
  res.status(200).send({result:await get.getByAnggotaAndStatus(req.body.idAnggota, req.body.sta)});  
});

app.post("/inuone", async (req, res)=>{
  (req.body.data === undefined) ? res.status(400).send({result:false}) :
  res.status(200).send({result: await post.postOne(req.body.data)});
});

app.post("/inumany", async (req, res)=>{
  (req.body.data === undefined) ? res.status(400).send({result:false}) :
  res.status(200).send({result: await post.postMany(req.body.data)});
});

app.put("/uadsta", async (req, res)=>{
  (req.body.idAnggota === undefined || req.body.newsta === undefined) ? res.status(400).send({result:false}) :
  res.status(200).send({result: await put.changeStatus(req.body.idAnggota, req.body.newsta)});
});

app.put("/uadbrg", async (req, res)=>{
  (req.body.idAnggota === undefined || req.body.barang === undefined) ? res.status(400).send({result:false}) :
  res.status(200).send({result: await put.changeBarang(req.body.idAnggota, req.body.barang)});
});

app.delete("/deyagg", async (req, res)=>{
  (req.body.idAnggota === undefined) ? res.status(400).send({result:false}) :
  res.status(200).send({result: await del.delByAnggota(req.body.idAnggota)});
});

app.delete("/deyall", async (req, res)=>{  
  res.status(200).send({result: await del.delAll()});
});


module.exports = app;