const Mongo = require('mongodb').MongoClient;

class MongoDB{  

  async setup(url){
    let con = await Mongo.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});        
    return con.db("KeranjangDB");
  }

}

module.exports = MongoDB;