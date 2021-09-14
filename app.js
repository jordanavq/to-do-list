const express = require("express");

//para criar o servidor

const PORT = 5000;

//Para se conectar ao banco de dados
require("./config/db.config");

const app = express();

app.listen(PORT, () => console.log(`Server listen on Port ${PORT}`));
