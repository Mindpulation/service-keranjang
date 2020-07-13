const Controller = require('./index');

class Delete extends Controller{

  constructor(){
    super();
  }

  async delByAnggota(anggota){
    let e = await this.model.delete.delOne({idAnggota:anggota});
    return e.acknowledged;
  }

  async delAll(){
    let e = await this.model.delete.delMany({});
    return e.acknowledged;
  }

}

module.exports = Delete;