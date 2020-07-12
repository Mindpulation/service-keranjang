const Controller = require('./index');

class Get extends Controller{      

  constructor(){
    super();    
  }

  async getAll(){
    let e = new Array();
    e = await this.model.find.findAll({});
    let obj = {d : e,c : e.length}
    return obj;
  }

  async getByAnggotaAndStatus(anggota, status){
    let e = new Array();
    e = await this.model.find.findAll({idAnggota:anggota, sta:status});
    let obj = {d:e, c:e.length};
    return obj;
  }

  async getBarangByAnggota(anggota){
    let e = new Array();
    e = await this.model.find.findOne({idAnggota:anggota, sta:true}).barang;
    let obj = {d:e, c:e.length};
    return obj;
  }    

  async cekByAnggotaAndStatus(anggota, status){
    let e = new Array();
    e = await this.model.find.findOne({idAnggota:anggota, sta:status});
    return (e.length == 0) ? false : true;
  }

}

module.exports = Get;