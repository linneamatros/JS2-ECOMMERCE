const mongodb = require('mongoose');
const Product = require('./productSchema');



// HÄMTA ALLA PRODUKTER
exports.getProducts = (req, res) => {
  Product.find({}, (err, data) => {
    if(err) {
     return res.status(500).json({
        statusCode: 500,
        status: false,
        message: err.message || 'Something went wrong when fetching products'
      })
    }

    res.status(200).json(data);
  })
}

// HÄMTA EN PRODUKT
exports.getProduct = (req, res) => {
// Kolla om produkten finns
Product.exists({ _id: req.params.id }, (err, result) => {              // KOlla om produkten finns
  if(err) {
    return res.status(400).json({
      statusCode: 400,
      status: false,
      message: 'something went wrong'
    })
  }
  if(result) {                                          // Om produkten finns
    Product.findById(req.params.id)
    .then(product => res.status(200).json(product))
    .catch(err => res.status(500).json(err))

  } else {                                              // Om produkten INTE finns
    res.status(404).json({
      statusCode: 404,
      status: false,
      message: err.message || 'Oops this product does not exist'
    })
  }

})
}


// SKAPA PRODUKTER, skapas via en POST

exports.createProduct = (req, res) => {
  Product.exists({ name: req.body.name }, (err, result) => {               // Kollar efter produkten
    if(err) {
      return res.status(500).json(err);
    }
    if(result) {                                                           // Om produkten redan finns
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'Bad request. A product by this name already exist, please update product instead'
      })
    }

    const newProduct = new Product ({                                   // SKapar en ny produkt, hämtar information från Produkt som anges att det ska hämtas från våran productSchema högst upp på denna sida

      name: req.body.name,
      short: req.body.short,
      desc: req.body.desc,
      price: req.body.price,
      image: req.body.image,

    
    })                                      


    newProduct.save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Product created sucessfully'
      })
    })
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to created product'
      })
    })
  })
}


// UPPDATERA PRODUKT
exports.updateProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }

    if(result) {

        Product.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: false,
            message: err.message || ' '
          })
        })

    } else {
      res.status(404).json({
        statusCode: 404,
        status: false,
        message: err.message || 'Oops this product does not exist'
      })
    }
  })
}


exports.deleteProduct = (req, res) => {

  Product.exists({ _id: req.params.id }, (err, result) => {             // Kollar om produkten finns
    if(err) {
      return res.status(400).json({                                     // Någonting gick fel i hämtningen
        statusCode: 400,
        status: false,
        message: 'You made a bad request'
      })
    }

    if(result) {
      Product.deleteOne({ _id: req.params.id })       // om den finns så raderas den
      .then(() => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'Product deleted'
        })
      })
      .catch(err => {                             // Om raderingen inte gick igenom
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to delete product',
          err
        })
      })

    } else {                                    // produkten finns inte
      res.status(404).json({
        statusCode: 404,
        status: false,
        message: err || ''
      })
    }
  })


}