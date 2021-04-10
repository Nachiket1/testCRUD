const { text } = require('body-parser');
const { Task } = require('../schema');

const taskControllers = {};

taskControllers.getAllTasks = (req, res, next) => {
  Task.find({})
  .then(data => {
    res.locals.data = data;
    return next();
  })
  .catch(err =>  next(err));
}

taskControllers.addTask = (req, res, next) => {
  const inputTask = req.body;
  console.log(req.body);
  Task.create(inputTask)
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err =>  next(err));
}

taskControllers.updateTask = (req, res, next) => {
  const { _id, text, status } = req.body;
  console.log(_id, text, status);
  // const conditions = { _id: req.params.id };
  // console.log(conditions);
  Task.updateOne( {_id: _id }, { text: text, status: status })
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err =>  next(err));
}

taskControllers.deleteTask = (req, res, next) => {
  const { _id } = req.body; 

  Task.findOneAndDelete( { _id }  )
  .then(data => {
    res.locals.data = data;
    return next();
  })
  .catch(err =>  next(err));
} 

module.exports = taskControllers;