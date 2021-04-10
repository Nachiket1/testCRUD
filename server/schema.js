const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

const taskSchema = new mongoose.Schema({
    text: { type : String, required: true },
    status: { type: Boolean, default: false },
    userId: { type: String }
});

const User = mongoose.model('users', userSchema);
const Task = mongoose.model('tasks', taskSchema);

module.exports = {
    Task, 
    User
};