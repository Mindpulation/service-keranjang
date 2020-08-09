const express = require('express');
const app = express();

const bp = require('body-parser');
const cors = require('cors');

const Cart = require('./api/cart');

app.use(bp.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(bp.json());
app.use(cors());

app.use('/api/v1', Cart);

app.post("*", (req,res) => { res.status(403).send({ status : "Forbidden" }) });
app.delete("*", (req,res) => { res.status(403).send({ status : "Forbidden" }) });
app.get("*", (req,res) => { res.status(403).send({ status : "Forbidden" }) });
app.put("*", (req,res) => { res.status(403).send({ status : "Forbidden" }) });

app.listen(3020, err => {(err) ? console.log("Error : "+err) : console.log("Server Port 3020 [Keranjang:running]");});
