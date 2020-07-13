const MongoDB = require('../con');

const Find = require('./find');
const Insert = require('./insert');
const Update  = require('./update');
const Delete = require('./delete');

class Cart extends MongoDB{

  constructor(url){
    
    super();        

    (async ()=>{
      let col = await (await this.setup(url)).collection("Keranjang");            
      this.find = new Find(col);   
      this.insert = new Insert(col)             
      this.update = new Update(col);
      this.delete = new Delete(col);      
    })();


  }

}

module.exports = Cart;