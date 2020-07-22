const Controller = require('./index');
const { ObjectID } = require('mongodb');

class Get extends Controller{      

  constructor(){
    super();    
  }
  
  async getById(filter){
    let e = await this.model.find.findAll({_id: new ObjectID(filter)})
    return (e === null || e.idAnggota === undefined) ? false : true;
  }

}

module.exports = Get;