const List = require('./schema')

const controllers = {};

// THEN/CATCH 
controllers.addItem = (req, res, next) => {
  // the shape of req.body will look like { text: 'this is my first todo!' }
  const inputItem = req.body;
  List.create(inputItem)
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err =>  next(err));
}
// CALLBACK STYLE
// is equivalent to
// controllers.addItem = (req, res, next) => {
//   // the shape of req.body will look like { text: 'this is my first todo!' }
//   const inputItem = req.body;
//   List.create(inputItem, 
//     (req, res) => {
//       if (err) return next(err);
//       res.locals.data = res;
//       return next();
//     });
// };
// ASYNC/AWAIT 
// is equivalent to
// controllers.addItem = async (req, res, next) => {
//   const inputItem = req.body;
//   try {
//     res.locals.data = await List.create(inputItem);
//     return next();
//   } catch (error) {
//     return next(error);
//   }
// };

module.exports = controllers;