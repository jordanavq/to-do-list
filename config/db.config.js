const { connection } = require("mongoose");
const mongoose = require("mongoose");

//para fazer a conexão com o banco de dados

const MONGO_URI =
  "mongodb+srv://jordanavq:hello12@cluster0.zjc9j.mongodb.net/todolist?retryWrites=true&w=majority";

const connect = async () => {
  const connection = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`DataBase connected: ${connection.connections[0].name}`);
};

connect();
