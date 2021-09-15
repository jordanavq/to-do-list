const express = require("express");
const Todo = require("./models/Todo");
//para criar o servidor

const PORT = 5000;

//Para se conectar ao banco de dados
require("./config/db.config");

const app = express();

//utilizar o json no body das requisições
app.use(express.json());

app.post("/todos", async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ msg: "missing title field" });
  }
  try {
    //criar novo todo no banco de dados
    const newTodo = await Todo.create(req.body);
    //retornar json do todo criado
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ msg: `Sever error ${error}` });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: "ServerError", erro });
  }
});

app.listen(PORT, () => console.log(`Server listen on Port ${PORT}`));
