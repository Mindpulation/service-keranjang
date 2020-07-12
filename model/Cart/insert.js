class Insert{

  constructor(col){
    this.col = col;
  }

  async inOne(payload){
    return await this.col.insertOne(payload);
  }

  async inMany(payload){
    return await this.col.insertMany(payload);
  }

}

module.exports = Insert;