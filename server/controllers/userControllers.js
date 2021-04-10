const { User } = require('../schema');
const userControllers = {};

userControllers.addUser = (req, res, next) => {

    const { firstName, lastName } = req.body;
    console.log('REQ.BODY: ', req.body);

    User.create( { firstName, lastName }  )
      .then(data => {
        console.log('DATA: ', data);
        res.locals.data = data;
        console.log('DATA: ', data);
        return next();
      })
      .catch(err =>  next(err));
  }

userControllers.deleteUser = (req, res, next) => {

  const { _id } = req.body; 

  User.findOneAndDelete( { _id }  )
  .then(data => {
    console.log('DATA: ', data);
    res.locals.data = data;
    console.log('DATA: ', data);
    return next();
  })
  .catch(err =>  next(err));
} 

// findOneAndUpdate
// get



module.exports = userControllers;