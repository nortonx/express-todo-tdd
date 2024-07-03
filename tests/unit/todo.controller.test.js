const TodoController = require("../../src/controllers/todo.controller");
const TodoModel = require("../../src/model/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mock-data/new-todo.json");

TodoModel.create = jest.fn();

describe('TodoController', () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
    let req, res, next;
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
    req.body = newTodo;
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });
});

