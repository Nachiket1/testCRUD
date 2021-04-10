const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();
const taskControllers = require('./controllers/taskControllers')
const userControllers = require('./controllers/userControllers')

// Connect our MongoDB Database ------------------------
const MONGO_URI = 'mongodb+srv://Nachiket1:Mongotoday32321@cluster0.jdpf2.mongodb.net/todoList?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'todoList'
})
  .then(() => console.log('Connected to Mongo DB'))
  .catch(err => console.log(err));
// -----------------------------------------------------
// to access the argument inside the body of the request (w.o. it body will be empty):
app.use(express.json());

//
// app.use(cookieParser());
// to ensure it is encoded into a specific standard:
app.use(express.urlencoded({ extended: true }));

// ---------------------------- // ---------------------
//  routes/users.js

// GET Request to '/user
// app.get('/user', userControllers.getUser, (req, res) => {
//     res.status(200).json(res.locals.data)
// });

// POST Request to '/user'
app.post('/user', userControllers.addUser, (req, res) => {
    res.status(200).json(res.locals.data)
});

// DELETE Request to '/user'
app.delete('/user', userControllers.deleteUser, (req, res) => {
    res.status(200).json(res.locals.data)
});

// UPDATE Request to '/user'
// app.put('/user', userControllers.updateUser, (req, res) => {
//     res.status(200).json(res.locals.data)
// });


// ---------------------------- // ---------------------
//  routes/tasks.js

// GET Request to Root '/' 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../src/index.html'))    
});

// GET Request to '/task'
app.get('/task', taskControllers.getAllTasks, (req, res) => {
    res.status(200).json(res.locals.data)
});

// POST Request to '/task'
app.post('/task', taskControllers.addTask, (req, res) => {
    res.status(200).json(res.locals.data)
});

// UPDATE Request to '/task'
app.put('/task', taskControllers.updateTask, (req, res) => {
    res.status(200).json(res.locals.data)
});

// DELETE Request to '/task'
app.delete('/task', taskControllers.deleteTask, (req, res) => {
    res.status(200).json(res.locals.data)
});



// 404 Error ------------------------------------------
app.use('*', (req, res) => {
    res.sendStatus(418)
});

// Global Error Handler -------------------------------
app.use((err, req, res, next) => {
    res.status(500).send('Error from global error handler', err);    
});

app.listen(PORT, () =>  console.log(`Example app listening at http://localhost:${PORT}`))