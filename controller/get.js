const Controller = require('./index');
const mongo = require('mongodb');
const ObjectID = mongo.ObjectID;

class Get extends Controller{      

  constructor(){
    super();    
  }

  async getById(filter){    
    return await this.model.find.findAll({"_id": new ObjectID(filter)})    
  }

}

module.exports = Get;