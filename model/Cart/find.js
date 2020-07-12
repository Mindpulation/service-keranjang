class Find{

  constructor(col){
    this.col = col;
  }  

  async findAll(){    
    return await this.col.find().toArray();
  }

  async findFilter(filter){
    return await this.col.find({idAnggota:filter}).toArray(); 
  }

}

module.exports = Find;