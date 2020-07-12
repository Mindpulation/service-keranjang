class Find{

  constructor(col){
    this.col = col;
  }  

  async findAll(filter){    
    return await this.col.find(filter).toArray();
  }  

  async findOne(filter){    
    return await this.col.findOne(filter);
  }

}

module.exports = Find;