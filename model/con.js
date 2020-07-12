const Mongo = require('mongodb').MongoClient;
const Id = require('mongodb').ObjectID;

class MongoDB{  

  async setup(url){
    let con = await Mongo.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});        
    return con.db("KeranjangDB");
  }

  setId(){
    return new Id();
  }

  getId(e){
    return new Id(e);
  }

}

module.exports = MongoDB;