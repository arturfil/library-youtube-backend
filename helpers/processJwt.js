const jwt = require('jsonwebtoken');

const generateJwt = (id) => {
  return new Promise((resolve, reject) => {
    jwt.sign({id}, process.env.SECRET_KEY, {expiresIn: "4h"},
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  })
}

module.exports = { generateJwt };