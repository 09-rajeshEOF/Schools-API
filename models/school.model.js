const mysql = require('mysql')


const schoolSchema = {
  id:{
    type:'integer',
    primaryKey:true,
    autoIncrement:true
  },
  name:{
    type:'varchar(225)',
    notNull:true
  },
  address:{
    type:'varchar(225)',
    notNull:true
  },
  latitude:{
    type:'float',
    notNull:true
  },
  longitude:{
    type:'float',
    notNull:true
  }
}

module.exports = schoolSchema;