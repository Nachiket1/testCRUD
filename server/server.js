const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

const controllers = require('./controllers')

// const mongoURI = 'mongodb+srv://CRUD:CRUD@api-gateway.uns92.mongodb.net/CRUDDatabase?retryWrites=true&w=majority';
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect our MongoDB Database ------------------------
const MONGO_URI = 'mongodb+srv://CRUD:CRUD@api-gateway.uns92.mongodb.net/CRUDDatabase?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'CRUDDatabase'
})
  .then(() => console.log('Connected to Mongo DB'))
  .catch(err => console.log(err));
// -----------------------------------------------------



app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// GET Request to Root '/' 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../src/index.html'))    
});

// POST Request to '/list'
app.post('/list', 
  controllers.addItem,
  (req, res) => {
    res.status(200).json(res.locals.data)
});


// 404 Error ------------------------------------------
app.use('*', (req, res) => {
    res.sendStatus(418)
});

// Global Error Handler -------------------------------
app.use((err, req, res, next) => {
    res.status(500).send('Error from global error handler');    
});

app.listen(PORT, () =>  console.log(`Example app listening at http://localhost:${PORT}`))