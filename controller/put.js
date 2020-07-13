const Controller  = require('./index');

class Put extends Controller{

  constructor(){
    super();
  }

  async changeStatus(anggota, newStatus){
    let filter = {idAnggota:anggota, sta:true}; let set={sta:newStatus};
    let e = await this.model.update.updOne(filter, set);
    return e.acknowledged
  }

  async changeBarang(anggota, barang){
    let filter={idAnggota:anggota}; let set={barang:barang};
    let e = await this.model.update.updOne(filter, set);
    return e.acknowledged
  }

}

module.exports = Put;