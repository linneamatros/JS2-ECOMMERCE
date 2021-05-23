const mongodb = require('mongoose');

const productSchema = mongodb.Schema({

  name:     { type: String, required: true, unique: true },
  // short:    { type: String, required: true },
  desc:     { type: String, required: true },
  price:    { type: Number, required: true },
  image:    { type: String, required: true },

  created:  { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now },


    // desc: { type: String, required: true },                               // Det finns flera options att lägga in, finns att hitta i dokumentationen
})


module.exports = mongodb.model('Product', productSchema);