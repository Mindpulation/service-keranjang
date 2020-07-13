const Controller  = require('./index');

class Put extends Controller{

  constructor(){
    super();
  }

  async changeStatus(anggota, newStatus){
    let filter = {idAnggota:anggota, sta:true}; let set={sta:newStatus};
    let e = await this.model.update.updOne(filter, set);
    return (e.result.n === e.modifiedCount) ? true : false;    
  }

  async changeBarang(anggota, barang){    
    let filter={idAnggota:anggota, sta:true}; let set={barang:barang};
    let e = await this.model.update.updOne(filter, set);    
    return (e.result.n === e.modifiedCount) ? true : false;
  }

}

module.exports = Put;