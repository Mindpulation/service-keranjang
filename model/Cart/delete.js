class Delete{

  constructor(col){
    this.col = col;
  }

  async delOne(filter){
    return await this.col.deleteOne(filter);
  }

  async delMany(filter){
    return await this.col.deleteMany(filter);
  }

}

module.exports = Delete;