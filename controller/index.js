const Model = require('../model/Cart/index');

class Controller{

  constructor(){
    this.model = new Model("mongodb://mongo-indo1:27017/KeranjangDB");
  }

}

module.exports = Controller;
