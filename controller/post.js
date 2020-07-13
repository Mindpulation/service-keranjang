const Controller = require('./index');

class Post extends Controller{      

  constructor(){
    super();    
  }  

  async postOne(data){
    let e = await this.model.insert.inOne(data); 
    console.log(e);
    return e.acknowledged;
  }

  async postMany(){
    let e = await this.model.insert.inMany(data); 
    console.log(e);
    return e.acknowledged;
  }

}

module.exports = Post;