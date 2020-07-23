const Controller  = require('./index');
const mongo = require('mongodb');
const ObjectID = mongo.ObjectID;

class Put extends Controller{

  constructor(){
    super();
  }

  async updateItem(id, item){
    let get = {_id:new ObjectID(id)}
    let set = {item:item}
    let e = await this.model.update.updOne(get, set);
    return (e.result.n === e.modifiedCount) ? true : false;
  }

}

module.exports = Put;