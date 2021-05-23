const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

exports.generateToken = user => {
  return jwt.sign({id: user._id}, secretKey, { expiresIn: '1h' })                                           // skapar en token, en token är som en biljett, den är giltig i 1 timme
}



//MIDDLEWARE
exports.verifyToken = (req, res, next) => {

  try {
    // Token blir skickad som: Bearer <token> därför splittar vi, för att bara få token delen utan mellanslag
    const token = req.header.authorization.split(" ")[1]
    req.userData = jwt.verify(token, secretKey)               // verifierar att det är en giltig token och att secretkey stämmer
    next()                                                    // next gör så att man fortsätter vidare till funktioner
  }
  catch {
    return res.status(401).json({
      statusCode: 401,
      status: 401,
      message: 'Acess restricted! Please Login!'
    })
  }


}