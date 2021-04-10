const  mongoose = require("mongoose");

// const { Schema } = mongoose;
// const listSchema = new Schema;
// is equivalent to

const listSchema = new mongoose.Schema({
    text: {type : String, required: true},
    status: {type: Boolean, default: false}
});

const List = mongoose.model('list', listSchema);
module.exports = List
// is equivalent to
// module.exports = mongoose.model('list', listSchema);