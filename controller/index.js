const Model = require('../model/Cart/index');

class Controller{

  constructor(){
    this.model = new Model("mongodb://indo1:2ad68fdaa8a4207a35ec22ba7beb34cd2425b247@mongo-indo1:27017/KeranjangDB");
  }

}

module.exports = Controller;
