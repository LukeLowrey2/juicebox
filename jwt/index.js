const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: 3, username:'joshua' }, 'server secret', {expiresIn: '1h' });

token;

const recoverData = jwt.verify(token, 'server secret');

recoverData 



fetch('our api url', {
    method: 'SOME_METHOD',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer HOLYMOLEYTHISTOKENISHUGE'
    },
    body: JSON.stringify({})
  })

  server.use(async (req, res, next) => {
    const prefix = 'Bearer '
    const auth = req.headers['Authorization'];
  
    if (!auth) {
      next(); // don't set req.user, no token was passed in
    }
  
  
    if (auth.startsWith(prefix)) {
      // recover the token
      const token = auth.slice(prefix.length);
      try {
        // recover the data
        const { id } = jwt.verify(data, 'secret message');
  
        // get the user from the database
        const user = await getUserById(id);
        // note: this might be a user or it might be null depending on if it exists
  
        // attach the user and move on
        req.user = user;
  
        next();
      } catch (error) {
        // there are a few types of errors here
      }
    }
  })