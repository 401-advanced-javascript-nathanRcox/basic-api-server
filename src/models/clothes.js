'use strict';

class clothesModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  create(clothes) {
    clothes.id = ++this.id;
    this.db.push(clothes);
    return clothes;
  }
  
  read(id) {
    if (id) {
      return this.db.find(item => item.id === parseInt(id));
    } else {
      return this.db;
    }
  }

  update(id, clothes) {
    if (!id) { return ('Error: no record was found.') }
    else { 
      const idx = this.db.findIndex(item => item.id === parseInt(id));
      this.db[idx].name = clothes.name;
      return this.db[idx];
    }
  }

  delete(id) {
    if(!id) { return ('Error: no record was found.') }
    else { 
      const idx = this.db.findIndex(item => item.id === parseInt(id)); 
      console.log(idx);
      this.db.splice(idx, 1);
      return this.db;
    }
  }
}

module.exports = clothesModel;
