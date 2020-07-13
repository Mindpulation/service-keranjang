const Controller = require('./index');

class Post extends Controller{      

  constructor(){
    super();    
  }  

  async postOne(data){
    let e = await this.model.insert.inOne(data); 
    return (e.result.n === e.result.ok) ? true : false;
  }

  async postMany(){
    let e = await this.model.insert.inMany(data); 
    return (e.result.n === e.result.ok) ? true : false;
  }

}

module.exports = Post;