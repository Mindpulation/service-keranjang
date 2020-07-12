const Controller = require('./index');

class Get extends Controller{      

  constructor(){
    super();    
  }

  async getAll(){
    return await this.model.find.findAll({});
  }

  async getByAnggotaAndStatus(anggota, status){
    return await this.model.find.findAll({idAnggota:anggota, sta:status});
  }

  async getBarangByAnggota(anggota){
    return await this.model.find.findOne({idAnggota:anggota, sta:true}).barang;    
  }    

  async cekByAnggotaAndStatus(anggota, status){
    let e = new Array();
    e = await this.model.find.findOne({idAnggota:anggota, sta:status});
    return (e.length == 0) ? false : true;
  }

}

module.exports = Get;