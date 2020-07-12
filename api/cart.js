const Get = require('../controller/get');
const get = new Get();

const express = require('express');
const app =  express.Router();

app.get("/runall", async (_,res)=>{    
  res.status(200).send({result : await get.getAll()});
});

app.get("/bufbrg", async (req, res)=>{  
  res.status(200).send({result: await get.getBarangByAnggota(req.params.idAnggota)});
});

app.get("/cecsta", async (req, res)=>{
  res.status(200).send({result: await get.cekByAnggotaAndStatus(req.params.idAnggota, req.params.status)});
});

app.get("/bufaas", async (req, res)=>{
  res.status(200).send({result:await get.getByAnggotaAndStatus(req.params.idAnggota, req.params.status)});  
});

module.exports = app;