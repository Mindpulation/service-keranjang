const Model = require('../model/Cart/index');

class Controller{

  constructor(){
    this.model = new Model("mongodb://103.27.206.22:27017/KeranjangDB");
  }

}

module.exports = Controller;
