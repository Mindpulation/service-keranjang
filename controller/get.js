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
    let e = await this.model.find.findOne({idAnggota:anggota, sta:true});
    let obj = new Object();        
    return (e === null) ? false : obj = {d:e.barang, c:e.barang.length};    
  }    

  async cekByAnggotaAndStatus(anggota, status){         
    let e = await this.model.find.findOne({idAnggota:anggota, sta:status});        
    return (e === null || e.idAnggota === undefined) ? false : true;
  }

}

module.exports = Get;