const Controller = require('./index');

class Delete extends Controller{

  constructor(){
    super();
  }

  async delByAnggota(anggota){
    let e = await this.model.delete.delOne({idAnggota:anggota});    
    return (e.result.n === e.deletedCount) ? true : false;    
  }

  async delAll(){
    let e = await this.model.delete.delMany({});
    return (e.result.n === e.deletedCount) ? true : false;    
  }

}

module.exports = Delete;