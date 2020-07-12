const Get = require('../controller/get');
const get = new Get();

const express = require('express');
const app =  express.Router();

app.get("/runall", async (_,res)=>{    
  res.status(200).send({result : await get.getAll()});
});

app.get("/bufbrg", async (req, res)=>{    
  res.status(200).send({result: await get.getBarangByAnggota(req.query.idAnggota)});
});

app.post("/cecsta", async (req, res)=>{
  res.status(200).send({result: await get.cekByAnggotaAndStatus(req.body.idAnggota, req.body.status)});
});

app.post("/bufaas", async (req, res)=>{
  res.status(200).send({result:await get.getByAnggotaAndStatus(req.body.idAnggota, req.body.status)});  
});

module.exports = app;