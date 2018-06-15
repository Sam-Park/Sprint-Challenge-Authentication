const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');

// function generateToken(user) {
//   const options = {
//     expiresIn: "1h"
//   };
//   const payload = { name: user.username };
  
//   return jwt.sign(payload, secret, options);
// }

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if(user) {
        user
        .checkPassword(password)
        .then(passMatch => {
          if(passMatch) {
            const payload = { username: user.username };
            const token = jwt.sign(payload, mysecret);
            res.status(201).json({ message: `welcome ${username}`, token });
          } else {
            res.status(401).send("invalid credentials");
          }
        })
        .catch(err => {
          err.send("error comparing passwords");
        });
    } else {
      res.status(401).send("invalid creds");
    }
  })}

    
   
      
      // This is an example of using our User.method from our model.
      // if (nonMatch !== null) {
      //   res.status(422).json({ error: 'passwords dont match' });
      //   return;
      // }
      // if (hashMatch) {
      //   const payload = {
      //     username: user.username
      //   }; // what will determine our payload.
//         const token = jwt.sign(payload, mysecret); // creates our JWT with a secret and a payload and a hash.
//         res.json({ token }); // sends the token back to the client
//       }
//     });
//   });
// };

module.exports = {
  login
};
