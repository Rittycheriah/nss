var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    due_date: Date,
    description: {type: String, required: true},
    title: {type: String, required: true},
    priority: Number,
    complete: {type: Boolean, required: true, default: false }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
