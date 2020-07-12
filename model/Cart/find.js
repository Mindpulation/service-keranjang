class Find{

  constructor(col){
    this.col = col;
  }  

  async findAll(){    
    return await this.col.find().toArray();
  }

}

module.exports = Find;