const MongoDB = require('../con');

const Find = require('./find');

class Cart extends MongoDB{

  constructor(url){
    
    super();        

    (async ()=>{
      let col = await this.setup(url);      
      this.find = new Find(col);          
    })();


  }

}

module.exports = Cart;