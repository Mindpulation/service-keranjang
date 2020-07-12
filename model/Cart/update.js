class Update{

  constructor(col){
    this.col = col;
  }

  async updOne(filter, set){
    return await this.col.updateOne(filter, { $set:set, $currentDate: {lastModified: true} });
  }

  async upMany(filter, set){
    return await this.col.updateMany(filter, { $set:set, $currentDate: {lastModified: true} });
  }

}

module.exports = Update;