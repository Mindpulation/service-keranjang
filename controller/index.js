const Model = require('../model/Cart/index');

class Controller{

  constructor(){
    this.model = new Model("mongodb://127.0.0.1:27017/");
  }

}

module.exports = Controller;