const express = require("express");
const todoController = require("../src/controllers/todo.controller");
const router = express.Router();

router.post("/", todoController.createTodo);

module.exports = router;