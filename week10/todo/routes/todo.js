var express = require('express');
var router = express.Router();
var todoList = [];

// Include the model for a Todo that we set up in Mongoose
var Todo = require('../models/todo');

var getAllTodos = function (req,res,next) {
  Todo.find({}, function (err, list) {
    if (err) {
      console.log(err);
    } else {
      todoList = list;
      next();
    }
  });
}

// Handle a GET request from the client to /todo/list
router.get('/list', function (req,res,next) {
  Todo.find({}, function (err, list) {
    if (err) {
      console.log(err);
    } else {
      getAllTodos(req, res, next);
    }
  });
});

router.get('/list', function (req,res,next) {
  res.render("todoList", {
    title: "List of tasks",
    message: "Success!",
    todos: todoList
  });
});

// Handle a DELETE request from the client to /todo
router.delete('/', function (req, res) {
  Todo.find({ _id: req.body.todo_id })
      .remove(function (err) {

    // Was there an error when removing?
    if (err) {
      console.log(err);

    // Delete was successful
    } else {
      res.send("SUCCESS");
    }
  });

});

// Handle a POST request from the client to /todo
router.post('/', function (req, res, next) {
  var mytodo = new Todo(req.body);


  mytodo.save(function (err, todo) {

    if (err) {

      res.render("error", {
        error: {
          status: 500,
          stack: JSON.stringify(err.errors)
        },
        message: "You failed!"
      });

    } else {

      getAllTodos(req, res, next);

    }
  });
});

router.post('/', function (req, res, next) {
  res.render("todoList", {
    title: "List of tasks",
    message: "Success!",
    todos: todoList
  });
});

// Handle a GET request from the client to /todo
router.get('/', function (req, res) {

  res.render('index',
    {
      title : 'Express Todo Example',
      header: 'Hello',
      body_text: 'the jungle'
    }
  );

});

module.exports = router;
